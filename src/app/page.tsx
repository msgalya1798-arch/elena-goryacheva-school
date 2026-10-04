import type { Metadata } from "next";
import { EditorialHome } from "@/components/home/EditorialHome";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return <EditorialHome />;
}
