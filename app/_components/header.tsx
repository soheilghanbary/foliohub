import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { getUserSession } from '@/server/lib/auth';
import {
  BadgeCheckIcon,
  HomeIcon,
  LayoutGridIcon,
  PieChart,
  SearchIcon,
  SettingsIcon,
} from 'lucide-react';
import Link from 'next/link';
import { LoginModal } from './login-modal';
import { NewSiteModal } from './new-site-modal';

const NavLink = ({ href, icon: Icon, label }: NavLinkProps) => (
  <Link
    href={href}
    className="flex items-center rounded-md px-3 py-2 font-medium text-foreground/75 text-sm duration-150 hover:bg-muted/60 hover:text-foreground"
  >
    <Icon className="ml-2 size-4" />
    {label}
  </Link>
);

const NavLinks = () => {
  return (
    <div className="hidden flex-1 items-center gap-2 md:flex">
      <NavLink href="/" label="خانه" icon={HomeIcon} />
      <NavLink href="/sites" label="سایت ها" icon={LayoutGridIcon} />
      <NavLink href="/sites" label="داشبورد" icon={PieChart} />
      <NavLink href="/settings" label="تنظیمات" icon={SettingsIcon} />
    </div>
  );
};

export async function Header() {
  const user = await getUserSession();
  return (
    <header className="sticky top-0 border-border/50 border-b bg-background/85 p-4 backdrop-blur">
      <nav className="container mx-auto flex items-center justify-between gap-3">
        <Link href={'/'} className="font-black text-primary">
          <h6>فولیوهاب</h6>
        </Link>
        <NavLinks />
        <div className="flex items-center justify-end gap-4">
          <Button className="rounded-full" variant={'outline'} size={'icon'}>
            <SearchIcon className="size-4" />
          </Button>
          <ModeToggle />
          {user ? <NewSiteModal /> : <LoginModal />}
        </div>
      </nav>
    </header>
  );
}
