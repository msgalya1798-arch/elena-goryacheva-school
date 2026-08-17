interface ImagePlaceholderProps {
  ratio: "4:5" | "3:2" | "1:1" | "16:9" | "3:4";
  label: string;
  className?: string;
}

const ratioToPadding: Record<ImagePlaceholderProps["ratio"], string> = {
  "4:5": "125%",
  "3:2": "66.6%",
  "1:1": "100%",
  "16:9": "56.25%",
  "3:4": "133.3%",
};

/**
 * Нейтральный блок-заглушка вместо фото с указанным соотношением сторон.
 * ТЗ v3.0, раздел 13: техническую подпись формата ("3:2", "1:1"…) пользователю не показывать —
 * содержательный alt/label остаётся в aria-label и видимом тексте.
 */
export function ImagePlaceholder({ ratio, label, className = "" }: ImagePlaceholderProps) {
  return (
    <div
      className={`image-placeholder rounded-card relative w-full ${className}`}
      style={{ paddingBottom: ratioToPadding[ratio] }}
      role="img"
      aria-label={label}
    >
      <span className="absolute inset-0 flex items-center justify-center px-4 text-center">{label}</span>
    </div>
  );
}
