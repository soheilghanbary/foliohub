import { siteConfig } from '@/config/site';

export default () => (
  <section className="mx-auto max-w-md space-y-2 p-8">
    <h1 className="text-center font-extrabold text-2xl text-foreground">
      {siteConfig.name} 🚀
    </h1>
    <p className="text-center text-foreground/80 text-sm/6">
      {siteConfig.description}
    </p>
  </section>
);
