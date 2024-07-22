import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { getUserSession } from '@/server/lib/auth';
import {
  BadgeCheckIcon,
  HomeIcon,
  LayoutGridIcon,
  type LucideIcon,
  SearchIcon,
  SettingsIcon,
  User2Icon,
  UserIcon,
} from 'lucide-react';
import Link from 'next/link';
import { LoginModal } from './login-modal';

type NavLinkProps = {
  href: string;
  icon: LucideIcon;
  label: string;
};

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
    <div className="flex flex-1 items-center gap-2">
      <NavLink href="/" label="خانه" icon={HomeIcon} />
      <NavLink href="/sites" label="سایت ها" icon={LayoutGridIcon} />
      <NavLink href="/about" label="درباره فولیوهاب" icon={BadgeCheckIcon} />
      <NavLink href="/settings" label="تنظیمات" icon={SettingsIcon} />
    </div>
  );
};

export async function Header() {
  const user = await getUserSession();
  return (
    <header className="sticky top-0 border-border/50 border-b bg-background/75 p-2 backdrop-blur-sm">
      <nav className="container mx-auto flex items-center justify-between gap-3">
        <Link href={'/'}>
          <h6 className="font-black">فولیوهاب</h6>
        </Link>
        <NavLinks />
        <Button className="rounded-full" variant={'outline'} size={'icon'}>
          <SearchIcon className="size-4" />
        </Button>
        <ModeToggle />
        {user ? (
          <Button
            asChild
            variant={'outline'}
            size={'icon'}
            className="rounded-full"
          >
            <Link href={'/dashboard'}>
              <User2Icon className="size-4" />
            </Link>
          </Button>
        ) : (
          <LoginModal />
        )}
      </nav>
    </header>
  );
}
