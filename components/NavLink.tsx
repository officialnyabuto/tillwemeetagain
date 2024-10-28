"use client";

export default function NavLink({ 
  href, 
  children 
}: { 
  href: string; 
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="block py-2 px-4 md:p-0 text-gray-300 hover:text-green-400 transition-colors"
    >
      {children}
    </a>
  );
}