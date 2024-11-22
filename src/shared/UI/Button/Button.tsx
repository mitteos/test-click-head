"use client";

import styles from "./Button.module.scss";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  variant?: "accent" | "remove" | "goToCart";
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
  variant = "accent",
}) => {
  return (
    <button
      className={[
        styles.container,
        variant ? styles[variant] : "",
        className,
      ].join(" ")}
      onClick={onClick}>
      {children}
    </button>
  );
};
