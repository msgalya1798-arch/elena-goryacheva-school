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

for (const [slug, expectedHash] of Object.entries(sourceHashes)) {
  test(`${slug}: all text matches the DOCX except the owner-approved revision label`, () => {
    const document = documents.find((item) => item.slug === slug);
    assert.ok(document);
    const texts = legalDocumentTexts(document, values);
    assert.equal(texts.filter((text) => text === "Редакция от 05.10.2026").length, 1);
    // Normalize only this approved label change; every other word and table cell stays protected.
    const sourceTexts = texts.map((text) => text === "Редакция от 05.10.2026" ? "Рабочий проект · редакция от 05.10.2026" : text);
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
