import type { ReactNode } from "react";
import { editorialFont } from "@/lib/editorialFont";
import styles from "./EditorialPage.module.css";

export function EditorialPage({ children }: { children: ReactNode }) {
  return <div className={`${editorialFont.variable} ${styles.page}`}>{children}</div>;
}
