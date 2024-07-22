'use client';
import { TextField } from '@/components/text-field';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { useMediaQuery } from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';
import { BadgePlusIcon, UploadCloudIcon } from 'lucide-react';
import * as React from 'react';

export function NewSiteModal() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="rounded-full">
            <BadgePlusIcon className="ml-2 size-4" />
            سایت جدید
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>افزودن سایت جدید</DialogTitle>
            <DialogDescription>
              ایجاد سایت جدید و افزودن به لیست سایت ها.
            </DialogDescription>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className="rounded-full">
          <BadgePlusIcon className="ml-2 size-4" />
          سایت جدید
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>افزودن سایت جدید</DrawerTitle>
          <DrawerDescription>
            ایجاد سایت جدید و افزودن به لیست سایت ها.
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">انصراف</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({ className }: React.ComponentProps<'form'>) {
  return (
    <form className={cn('grid items-start gap-4', className)}>
      <div className="flex h-48 w-full flex-col items-center justify-center gap-4 rounded-md border shadow-sm duration-150 hover:bg-muted/40 active:scale-95">
        <UploadCloudIcon />
        <p className="text-center font-medium text-sm">آپلود عکس از وبسایت</p>
      </div>
      <TextField label="نام وبسایت" />
      <TextField label="دسته بندی" />
      <TextField label="آدرس وبسایت" />
      <Button>افزودن</Button>
    </form>
  );
}
