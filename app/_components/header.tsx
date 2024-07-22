import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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

export function Header() {
  return (
    <header className="sticky top-0 border-border/50 border-b bg-background/75 p-2 backdrop-blur-sm">
      <nav className="container mx-auto flex items-center justify-between gap-4 p-0">
        <Link href={'/'}>
          <h6 className="font-black">فولیوهاب</h6>
        </Link>
        <NavLinks />
        <ModeToggle />
        <Button>وارد شوید</Button>
      </nav>
    </header>
  );
}
