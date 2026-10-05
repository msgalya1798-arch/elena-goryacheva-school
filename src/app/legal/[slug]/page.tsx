import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalDocumentView } from "@/components/legal/LegalDocumentView";
import { legalDocuments } from "@/content/legal";
import { buildPageMetadata } from "@/lib/metadata";

type Params = Promise<{ slug: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return legalDocuments.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const document = legalDocuments.find((item) => item.slug === slug);
  if (!document) return {};
  return buildPageMetadata({ title: document.title, description: document.description, path: `/legal/${slug}` });
}

export default async function LegalPage({ params }: { params: Params }) {
  const { slug } = await params;
  const document = legalDocuments.find((item) => item.slug === slug);
  if (!document) notFound();
  return <LegalDocumentView document={document} />;
}
