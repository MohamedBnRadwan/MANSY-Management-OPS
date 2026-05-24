import type { IconName } from "@/content/site";
import { iconMap } from "@/content/site";

type IconListProps = {
  items: {
    title: string;
    text?: string;
    icon?: IconName;
  }[];
};

export function IconList({ items }: IconListProps) {
  return (
    <div className="icon-list">
      {items.map((item, index) => {
        const Icon = iconMap[item.icon ?? "target"];

        return (
          <div
            className="icon-list__item"
            data-aos="fade-up"
            data-aos-delay={String(Math.min(index * 80, 320))}
            key={item.title}
          >
            <span aria-hidden="true">
              <Icon size={24} strokeWidth={1.8} />
            </span>
            <div>
              <p className="icon-list__kicker">{String(index + 1).padStart(2, "0")}</p>
              <h3>{item.title}</h3>
              {item.text ? <p>{item.text}</p> : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
