import { buildPageMetadata } from "@/lib/metadata";
import { EditorialHome } from "@/components/home/EditorialHome";

export const dynamic = "force-dynamic";

export const metadata = buildPageMetadata("/");

export default function HomePage() {
  return <EditorialHome />;
}
