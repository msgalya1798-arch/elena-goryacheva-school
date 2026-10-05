export type LegalBlock =
  | { kind: "paragraph"; text: string }
  | { kind: "heading"; level: 2 | 3; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "table"; label: string; header: boolean; rows: string[][][] };

export interface LegalDocument {
  slug: string;
  title: string;
  description: string;
  blocks: LegalBlock[];
}

export function createLegalTextValues(
  seller: { entrepreneurType: string; personName: string; inn: string; ogrnip: string },
  contacts: { type: string; value: string | null }[],
  legalContacts: { email: string; trainingAddress: string },
): Record<string, string> {
  const phoneDigits = contacts.find((channel) => channel.type === "phone")?.value?.replace(/\D/g, "");
  const telegram = contacts.find((channel) => channel.type === "telegram")?.value;
  if (!phoneDigits || phoneDigits.length !== 11 || !telegram) throw new Error("Missing legal contact details");
  return {
    legalName: `${seller.entrepreneurType} ${seller.personName}`,
    inn: seller.inn,
    ogrnip: seller.ogrnip,
    email: legalContacts.email,
    telegram,
    // Preserve the DOCX phone typography while reusing the shared number.
    phone: `+${phoneDigits[0]} ${phoneDigits.slice(1, 4)} ${phoneDigits.slice(4, 7)}-${phoneDigits.slice(7, 9)}-${phoneDigits.slice(9)}`,
    trainingAddress: legalContacts.trainingAddress,
  };
}

/** Only substitutes shared contact details; approved document wording stays intact. */
export function resolveLegalText(text: string, values: Record<string, string>): string {
  return text.replace(/\{\{(\w+)\}\}/g, (_, key: string) => {
    if (values[key] === undefined) throw new Error(`Missing legal contact value: ${key}`);
    return values[key];
  });
}

export function legalDocumentTexts(document: LegalDocument, values: Record<string, string>): string[] {
  return [document.title, ...document.blocks.flatMap((block) => {
    if (block.kind === "list") return block.items.map((text) => resolveLegalText(text, values));
    if (block.kind === "table") return block.rows.flatMap((row) => row.flatMap((cell) => cell.map((text) => resolveLegalText(text, values))));
    return [resolveLegalText(block.text, values)];
  })];
}
