"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "add", href: "/admin/add", icon: "/admin_assets/add_icon.png" },
  { name: "list", href: "/admin/list", icon: "/admin_assets/order_icon.png" },
  { name: "orders", href: "/admin/orders", icon: "/admin_assets/order_icon.png" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[18%] p-4 pl-10 min-h-screen  border-gray-300">
      <Image src="/logo1.png" alt="logo" width={150} height={150} />
      <div className="flex flex-col  gap-4 pt-4  text-[15px]">
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
              {/* <Image
                src={item.icon}
                alt={`${item.name} icon`}
                width={15}
                height={15}
              /> */}
              <Image
                src={item.icon}
                alt={`${item.name} icon`}
                width={12}
                height={12}
                style={{ width: "12px", height: "12px" }}
              />
              <p className="hidden md:block capitalize">{item.name}</p>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
