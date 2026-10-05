import Link from "next/link";
import { EditorialPage } from "@/components/editorial/EditorialPage";
import { legalTextValues } from "@/content/legal";
import { resolveLegalText, type LegalDocument } from "@/lib/legalContent";
import styles from "./LegalDocumentView.module.css";

export function LegalDocumentView({ document }: { document: LegalDocument }) {
  const text = (value: string) => resolveLegalText(value, legalTextValues);

  return (
    <EditorialPage>
      <article className={styles.document} data-legal-document={document.slug}>
        <header data-editorial-hero>
          <div className={`container ${styles.measure}`}>
            <Link href="/legal/details" className={styles.back}>← Реквизиты</Link>
            <h1>{document.title}</h1>
          </div>
        </header>
        <div data-legal-body className={`container ${styles.measure} ${styles.body}`}>
          {document.blocks.map((block, index) => {
            if (block.kind === "heading") {
              const Heading = block.level === 3 ? "h3" : "h2";
              return <Heading key={index} id={`${document.slug}-section-${index}`}>{text(block.text)}</Heading>;
            }
            if (block.kind === "paragraph") return <p key={index}>{text(block.text)}</p>;
            if (block.kind === "list") return <ul key={index}>{block.items.map((item, itemIndex) => <li key={itemIndex}>{text(item)}</li>)}</ul>;

            return (
              <div key={index} className={styles.tableScroll} role="region" aria-label={block.label} tabIndex={0}>
                <table className={block.header ? styles.choices : styles.fields}>
                  <caption className="sr-only">{block.label}</caption>
                  {block.header && (
                    <thead><tr>{block.rows[0]?.map((cell, cellIndex) => <th key={cellIndex} scope="col">{cell.map((value, pIndex) => <p key={pIndex}>{text(value)}</p>)}</th>)}</tr></thead>
                  )}
                  <tbody>
                    {(block.header ? block.rows.slice(1) : block.rows).map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => {
                          const Cell = cellIndex === 0 ? "th" : "td";
                          return <Cell key={cellIndex} scope={cellIndex === 0 ? "row" : undefined}>{cell.map((value, pIndex) => <p key={pIndex}>{text(value)}</p>)}</Cell>;
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          })}
        </div>
      </article>
    </EditorialPage>
  );
}
