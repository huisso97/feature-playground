import { ReactNode } from 'react';

import Link from 'next/link';

import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ListCardProps {
  href: string;
  title: string;
  description: ReactNode;
}

const ListCard = ({ href, title, description }: ListCardProps) => {
  return (
    <Card
      className={cn('hover:scale-105 transition-all duration-300 p-5 w-64')}
    >
      <Link href={href} className='flex flex-col gap-4 '>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </Link>
    </Card>
  );
};

export default ListCard;
