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
 * Раздел 6.4 ТЗ: "если фото ещё нет, использовать нейтральные блоки-заглушки
 * с указанным соотношением сторон, а не случайные стоки".
 */
export function ImagePlaceholder({ ratio, label, className = "" }: ImagePlaceholderProps) {
  return (
    <div
      className={`image-placeholder rounded-card relative w-full ${className}`}
      style={{ paddingBottom: ratioToPadding[ratio] }}
      role="img"
      aria-label={label}
    >
      <span className="absolute inset-0 flex items-center justify-center px-4 text-center">
        {label} · {ratio}
      </span>
    </div>
  );
}
