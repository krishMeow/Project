import { type ButtonHTMLAttributes, type ReactNode } from "react";

type CommonButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
};

const variantClass: Record<NonNullable<CommonButtonProps["variant"]>, string> = {
  primary:
    "!bg-[#5fa5de] hover:!bg-[#4f97d6] text-white",
  secondary:
    "!bg-[#f0f7ff] text-gray-700 border-gray hover:!bg-[#5f13b0] hover:!text-white ",
  ghost: "!bg-transparent hover:!bg-blue-50 text-blue-700",
};

const sizeClass: Record<NonNullable<CommonButtonProps["size"]>, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-2.5 text-base",
};

export default function CommonButton({
  children,
  className,
  variant = "primary",
  size = "md",
  ...rest
}: CommonButtonProps) {
  return (
    <button
      className={`rounded-lg font-medium border-0 hover:border-transparent focus:border-transparent outline-none focus:outline-none focus-visible:outline-none ring-0 focus:ring-0 focus:ring-offset-0 shadow-none focus:shadow-none hover:shadow-none [&:hover]:outline-none [&:focus]:outline-none [&:focus-visible]:outline-none ${variantClass[variant]} ${sizeClass[size]} ${className ?? ""}`}
      {...rest}
    >
      {children}
    </button>
  );
}


