"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, Box, Heart, Phone, Menu, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/services", icon: Heart, label: "Services" },
  { href: "/products", icon: Box, label: "Products" },
  { href: "/contact", icon: Phone, label: "Contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="text-xl font-semibold">
            Till We Meet Again
          </Link>

          <nav className="hidden sm:flex items-center space-x-1">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  pathname === href
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {label}
              </Link>
            ))}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-accent"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden p-2 rounded-full hover:bg-accent"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, y: 0 },
          closed: { opacity: 0, y: "100%" },
        }}
        transition={{ duration: 0.2 }}
        className={cn(
          "fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-xl",
          "border-t flex justify-around items-center py-4 px-6 sm:hidden",
          isOpen ? "block" : "hidden"
        )}
      >
        {links.map(({ href, icon: Icon, label }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex flex-col items-center space-y-1",
              pathname === href
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            )}
            onClick={() => setIsOpen(false)}
          >
            <Icon size={20} />
            <span className="text-xs">{label}</span>
          </Link>
        ))}
      </motion.nav>
    </header>
  );
}