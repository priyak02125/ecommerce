"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "add", href: "/add", icon: "/admin_assets/add_icon.png" },
  { name: "list", href: "/list", icon: "/admin_assets/order_icon.png" },
  { name: "orders", href: "/orders", icon: "/admin_assets/order_icon.png" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[18%] min-h-screen border border-gray-300">
      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`
                flex items-center gap-3 px-3 py-2 rounded-lg border
                ${isActive ? "active" : "border-gray-300"}
              `}
            >
              <Image
                src={item.icon}
                alt={`${item.name} icon`}
                width={15}
                height={15}
              />
              <p className="hidden md:block capitalize">{item.name}</p>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
