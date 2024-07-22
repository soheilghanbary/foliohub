import { BackButton } from '@/app/_components/back-button';
import { UserUpload } from '@/app/_components/user-upload';
import { getUserSession } from '@/server/lib/auth';

export default async () => {
  const user = await getUserSession();
  return (
    <section className="mx-auto max-w-md p-4">
      <header className="mb-4 flex items-center gap-4">
        <BackButton />
        <h1 className="font-bold text-foreground text-xl">
          ویرایش حساب کاربری
        </h1>
      </header>
      <UserUpload initialPath={user?.image!} />
    </section>
  );
};
