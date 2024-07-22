import { Avatar } from '@/components/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { siteConfig } from '@/config/site';
import { HeartIcon, Link2Icon } from 'lucide-react';

export default () => (
  <section className="space-y-2 p-4">
    <h1 className="text-center font-extrabold text-2xl text-foreground">
      {siteConfig.name} 🚀
    </h1>
    <p className="text-center text-foreground/80 text-sm/6">
      {siteConfig.description}
    </p>
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <SiteCard />
      <SiteCard />
      <SiteCard />
      <SiteCard />
      <SiteCard />
      <SiteCard />
    </div>
  </section>
);

const SiteCard = () => (
  <div className="grid gap-2">
    <img
      className="rounded-lg"
      alt=""
      src="https://cdn.dribbble.com/userupload/15698053/file/original-0e96a2757c7e8889d61de9b26b1ee17c.png?crop=0x0-3201x2401&resize=450x338&vertical=center"
    />
    <div>
      <h2 className="font-bold text-lg">وبسایت شخصی مدرن</h2>
      <Separator className="my-2 bg-border/40" />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar
            src={'https://avatars.githubusercontent.com/u/124599?v=4'}
            alt=""
          />
          <p className="font-medium text-foreground/85 text-sm">سهیل قنبری</p>
        </div>
        <div className="flex items-center justify-end gap-2">
          <Button variant={'outline'}>
            256
            <HeartIcon className="mr-2 size-4 text-destructive" />
          </Button>
          <Button asChild variant={'outline'} size={'icon'}>
            <a
              target="_blank"
              href="https://soheilghanbary.ir"
              rel="noreferrer"
            >
              <Link2Icon className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  </div>
);
