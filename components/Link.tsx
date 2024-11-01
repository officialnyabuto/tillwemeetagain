"use client";

import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useCallback } from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  prefetch?: boolean;
}

export default function Link({ href, children, className, prefetch = true }: LinkProps) {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);

  const handleMouseDown = useCallback(() => {
    if (href.startsWith('/')) {
      setIsPending(true);
      router.prefetch(href);
      router.push(href);
    }
  }, [href, router]);

  const handleMouseEnter = useCallback(() => {
    if (prefetch && href.startsWith('/')) {
      router.prefetch(href);
    }
  }, [href, prefetch, router]);

  return (
    <NextLink
      href={href}
      className={`${className} ${isPending ? 'opacity-70' : ''}`}
      onMouseDown={handleMouseDown}
      onMouseEnter={handleMouseEnter}
      prefetch={false} // We handle prefetching manually
    >
      {children}
    </NextLink>
  );
}