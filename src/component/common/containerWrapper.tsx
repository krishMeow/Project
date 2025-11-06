import React from "react";
import clsx from "clsx";
import CommonButton from "./Button";

interface ReusableCardProps {
  /** Whether to show the header section */
  showHeader?: boolean;

  /** Main title text */
  title?: string;

  /** Subtitle text */
  subtitle?: string;

  /** Wrapper custom classes */
  className?: string;

  /** Tailwind background color (default white) */
  bgColor?: string;

  /** Tailwind border color (default gray-200) */
  borderColor?: string;

  /** Tailwind text color for header (default gray-800) */
  textColor?: string;

  /** Child components (main content area) */
  children: React.ReactNode;

  /** Optional bottom action button */
  actionButtonText?: string;

  /** Optional bottom button click handler */
  onActionButtonClick?: () => void;

  /** Props for bottom button */
  actionButtonVariant?: "primary" | "secondary" | "ghost";
  actionButtonSize?: "sm" | "md" | "lg";
  actionButtonClassName?: string;
  headerAction?: React.ReactNode;
}

const ContainerWrapper: React.FC<ReusableCardProps> = ({
  showHeader = true,
  title,
  subtitle,
  className,
  bgColor = "bg-white",
  borderColor = "border-gray-200",
  textColor = "text-gray-800",
  children,
  actionButtonText,
  onActionButtonClick,
  actionButtonVariant = "primary",
  actionButtonSize = "md",
  actionButtonClassName,
  headerAction
}) => {
  return (
    <div
      className={clsx(
        "rounded-xl shadow-sm border",
        bgColor,
        borderColor,
        className
      )}
    >
      {showHeader && (
        <div className="px-5 pt-5 pb-2 flex justify-between items-center w-full">
          <div className="w-[60%]">  
          {title && (
            <p className={clsx("text-xl font-semibold", textColor)}>{title}</p>
          )}
          {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
          </div>
          {headerAction && (
            <div className="w-[40%]">
              {headerAction}
            </div>
          )}
        </div>
      )}

      <div className="px-5 py-2">{children}</div>

      {actionButtonText && (
        <div className={`px-5 pb-5 w-full flex justify-center items-center`}>
          <div className={`${actionButtonClassName}`}>

          <CommonButton
            className="w-full"
            onClick={onActionButtonClick}
            variant={actionButtonVariant}
            size={actionButtonSize}
          >
            {actionButtonText}
          </CommonButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContainerWrapper;
