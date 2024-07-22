import { siteConfig } from '@/config/site';
import { SiteList } from './_components/site-list';

export default () => (
  <section className="p-4">
    <h1 className="text-center font-extrabold text-2xl/relaxed text-foreground">
      {siteConfig.name} 🚀
    </h1>
    <p className="mb-8 text-center text-foreground/80 text-sm/6">
      {siteConfig.description}
    </p>
    <SiteList />
  </section>
);
