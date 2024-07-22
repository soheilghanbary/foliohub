import { BackButton } from '@/app/_components/back-button';
import { UserUpload } from '@/app/_components/user-upload';

const getUser = async () => {
  const res = await fetch('http://localhost:3000/api/user');
  return await res.json();
};

export default async () => {
  const user = await getUser();
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
