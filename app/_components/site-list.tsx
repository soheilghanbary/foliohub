'use client';
import { Avatar } from '@/components/avatar';
import { LoadingIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useSite } from '@/hooks/use-site';
import type { Site } from '@prisma/client';
import { HeartIcon, Link2Icon } from 'lucide-react';

export function SiteList() {
  const { data: sites, isPending } = useSite().getAll;
  if (isPending)
    return (
      <div className="flex h-60 items-center justify-center fill-primary">
        <LoadingIcon />
      </div>
    );
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {sites?.map((site) => (
        <SiteCard key={site.id} {...site} />
      ))}
    </div>
  );
}

const SiteCard = (site: Site) => (
  <div className="rounded-lg border">
    <img className="rounded-t-lg" alt={site.name} src={site.image} />
    <div className="p-3">
      <h2 className="font-semibold">{site.name}</h2>
      <Separator className="my-2 bg-border/40" />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar
            alt=""
            src={'https://avatars.githubusercontent.com/u/124599?v=4'}
          />
          <p className="font-medium text-foreground/85 text-sm">سهیل قنبری</p>
        </div>
        <div className="flex items-center justify-end gap-2">
          <Button variant={'outline'} size={'icon'}>
            <HeartIcon className="size-4 text-destructive" />
          </Button>
          <Button asChild variant={'outline'} size={'icon'}>
            <a target="_blank" href={site.url} rel="noreferrer">
              <Link2Icon className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  </div>
);
