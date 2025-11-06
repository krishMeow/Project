import { type ReactNode } from "react";

type CardMetric = {
  id: string;
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: ReactNode | string;
  accent?: string; // tailwind color class e.g. text-green-500
  // Optional fully custom body for the card
  content?: ReactNode;
};

type CardWrapperProps = {
  items: CardMetric[];
  action?: ReactNode;
  className?: string;
};

export default function CardWrapper({ items, action, className }: CardWrapperProps) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ${className ?? ""}`}>
      {items.map((metric) => (
        <div
          key={metric.id}
          className="rounded-xl bg-white shadow-sm border border-gray-200 p-5 min-h-[110px]"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-1">
              <p className="text-xs font-semibold text-gray-500">{metric.title}</p>
              {metric.content ? (
                <div>{metric.content}</div>
              ) : (
                <>
                  <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                  {metric.subtitle ? (
                    <p className="text-[11px] text-gray-500">{metric.subtitle}</p>
                  ) : null}
                </>
              )}
            </div>
            {metric.icon ? (
              <div className={`ml-3 shrink-0 ${metric.accent ?? "text-emerald-500"}`}>
                  {typeof metric.icon === "string" ? (
                  <img src={metric.icon} alt="icon" className="w-5 h-5" />
                ) : (
                  metric.icon
                )}
              </div>
            ) : null}
          </div>
        </div>
      ))}
      {action ? <div className="col-span-1 sm:col-span-2 lg:col-span-4">{action}</div> : null}
    </div>
  );
}


