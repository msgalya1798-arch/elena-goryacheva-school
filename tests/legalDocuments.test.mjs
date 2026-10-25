import test from "node:test";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { createLegalTextValues, legalDocumentTexts, resolveLegalText } from "../src/lib/legalContent.ts";
import { sellerDetails, contactChannels, legalContactDetails, footerLegalLinks } from "../src/content/site.ts";

const documents = JSON.parse(readFileSync(new URL("../src/content/legal-documents.json", import.meta.url), "utf8"));
// Ground truth extracted independently from the five owner-supplied DOCX files.
const sourceHashes = JSON.parse(readFileSync(new URL("./fixtures/legal-docx-hashes.json", import.meta.url), "utf8"));
const values = createLegalTextValues(sellerDetails, contactChannels, legalContactDetails);

const originalAnalyticsPlaceholder =
  "На момент этой редакции отдельные рекламные или аналитические системы на сайте в Политике не заявлены. При их подключении Политика должна быть обновлена до начала соответствующей обработки.";

for (const [slug, expectedHash] of Object.entries(sourceHashes)) {
  test(`${slug}: approved legal source text stays intact outside the explicit analytics amendment`, () => {
    const document = documents.find((item) => item.slug === slug);
    assert.ok(document);
    let blocks = document.blocks;

    if (slug === "privacy") {
      const start = blocks.findIndex((block) =>
        block.kind === "heading" && block.text === "6.1. Аналитика посещаемости и файлы cookie");
      assert.ok(start > 0, "The analytics disclosure must be present");
      const disclosure = blocks.slice(start, start + 4);
      assert.deepEqual(disclosure.map((block) => block.kind), ["heading", "paragraph", "paragraph", "paragraph"]);
      assert.match(disclosure[1].text, /Яндекс Метрика/);
      assert.match(disclosure[2].text, /«Разрешить»/);
      assert.match(disclosure[2].text, /«Отказаться»/);
      assert.match(disclosure[3].text, /Вебвизор/);

      // Reconstruct ONLY the one owner-approved replacement section for DOCX parity.
      blocks = [
        ...blocks.slice(0, start),
        { kind: "paragraph", text: originalAnalyticsPlaceholder },
        ...blocks.slice(start + disclosure.length),
      ];
    }

    const texts = legalDocumentTexts({ ...document, blocks }, values);
    const edition = slug === "privacy" ? "Редакция от 25.10.2026" : "Редакция от 05.10.2026";
    assert.equal(texts.filter((text) => text === edition).length, 1);
    const sourceTexts = texts.map((text) =>
      text === edition ? "Рабочий проект · редакция от 05.10.2026" : text);
    const actual = createHash("sha256").update(sourceTexts.join("\n")).digest("hex");
    assert.equal(actual, expectedHash);
  });
}

test("all five documents and the existing details page have footer links in the requested order", () => {
  assert.deepEqual(footerLegalLinks.map((link) => link.href), [
    "/legal/details", "/legal/offer", "/legal/privacy", "/legal/refunds", "/legal/personal-data-consent", "/legal/media-consent",
  ]);
  assert.equal(new Set(documents.map((item) => item.slug)).size, 5);
  for (const document of documents) assert.ok(footerLegalLinks.some((link) => link.href === `/legal/${document.slug}`));
});

test("missing shared contact details cannot silently erase approved legal text", () => {
  assert.throws(() => resolveLegalText("{{email}}", {}), /Missing legal contact value/);
  assert.throws(() => createLegalTextValues(sellerDetails, [], legalContactDetails), /Missing legal contact details/);
});
