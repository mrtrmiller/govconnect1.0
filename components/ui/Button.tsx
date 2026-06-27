import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  disabled?: boolean;
};

export default function Button({
  children,
  variant = "primary",
  onClick,
  disabled = false,
}: ButtonProps) {
  const className =
    variant === "primary"
      ? "primaryButton"
      : "secondaryButton";

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}