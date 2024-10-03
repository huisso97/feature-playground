'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { NavItem } from '@/types/nav';

interface MainNavProps {
  items?: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname();
  return (
    <div className='flex gap-6 md:gap-10'>
      <Link href='/' className='flex items-center space-x-2'>
        <span className='inline-block font-bold'>{siteConfig.name}</span>
      </Link>
      {items?.length ? (
        <nav className='flex gap-6'>
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    'flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground/60',
                    item.disabled && 'cursor-not-allowed opacity-80',
                    pathname.includes(item.href) && 'text-foreground',
                  )}
                >
                  {item.title}
                </Link>
              ),
          )}
        </nav>
      ) : null}
    </div>
  );
}
