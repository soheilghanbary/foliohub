import { Avatar } from '@/components/avatar';
import { ModeToggle } from '@/components/mode-toggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { getUserSession } from '@/server/lib/auth';
import { ChartPieIcon, SettingsIcon } from 'lucide-react';
import Link from 'next/link';
import { LoginModal } from './login-modal';

const NavLinks = () => {
  return (
    <div className="flex flex-1 items-center">
      <Link
        href={'/'}
        className="rounded-md px-4 py-2 font-medium text-foreground/75 text-sm duration-150 hover:bg-muted/40"
      >
        صفحه اصلی
      </Link>
      <Link
        href={'/sites'}
        className="rounded-md px-4 py-2 font-medium text-foreground/75 text-sm duration-150 hover:bg-muted/40"
      >
        سایت ها
      </Link>
      <Link
        href={'/about'}
        className="rounded-md px-4 py-2 text-foreground/75 hover:bg-muted/40"
      >
        درباره فولیوهاب
      </Link>
    </div>
  );
};

export async function Header() {
  const user = await getUserSession();
  return (
    <header className="sticky top-0 border-border/50 border-b bg-background/75 p-2 backdrop-blur-sm">
      <nav className="container mx-auto flex items-center justify-between gap-4 p-0">
        <Link href={'/'}>
          <h6 className="font-black">فولیوهاب</h6>
        </Link>
        <NavLinks />
        <ModeToggle />
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar src={user.image!} alt={user.name!} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href={'/dashboard'}>
                  <ChartPieIcon className="ml-2 size-4" />
                  داشبورد
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={'/settings'}>
                  <SettingsIcon className="ml-2 size-4" />
                  تنظیمات
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <LoginModal />
        )}
      </nav>
    </header>
  );
}
