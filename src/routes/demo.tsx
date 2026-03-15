import { createFileRoute } from '@tanstack/react-router';
import Button from '~/components/ui/Button';
import PageLayout from '~/layouts/PageLayout';

import HomeIcon from '~icons/mdi/home';

export const Route = createFileRoute('/demo')({
  component: DemoRoute,
});

function DemoRoute() {
  return (
    <PageLayout title="Demo">
      <section className="card shadow-none mb-4">
        <h3 className="text-default">Filled</h3>
        <div className="flex flex-col flex-1 gap-4">
          <div className="flex items-center justify-start gap-4">
            <span className="mr-4 w-1/6">Primary</span>
            <Button className="" size="sm">
              Small
            </Button>
            <Button
              className=""
              variant="primary"
              icon={<HomeIcon className="w-4 h-4" />}
            >
              Default
            </Button>
            <Button className="" size="lg">
              Large
            </Button>
          </div>
          <div className="flex items-center justify-start gap-4">
            <span className="mr-4 w-1/6">Secondary</span>
            <Button className="" variant="secondary" size="sm">
              Small
            </Button>
            <Button
              className=""
              variant="secondary"
              icon={<HomeIcon className="w-4 h-4" />}
            >
              Default
            </Button>
            <Button className="" variant="secondary" size="lg">
              Large
            </Button>
          </div>
          <div className="flex items-center justify-start gap-4">
            <span className="mr-4 w-1/6">Accent</span>
            <Button className="" variant="accent" size="sm">
              Small
            </Button>
            <Button
              className=""
              variant="accent"
              icon={<HomeIcon className="w-4 h-4" />}
            >
              Default
            </Button>
            <Button className="" variant="accent" size="lg">
              Large
            </Button>
          </div>
          <div className="flex items-center justify-start gap-4">
            <span className="mr-4 w-1/6">Info</span>
            <Button className="" variant="info" size="sm">
              Small
            </Button>
            <Button
              className=""
              variant="info"
              icon={<HomeIcon className="w-4 h-4" />}
            >
              Default
            </Button>
            <Button className="" variant="info" size="lg">
              Large
            </Button>
          </div>
        </div>
      </section>
      <section className="card shadow-none">
        <h3 className="text-default">Text</h3>
        <div className="flex flex-col flex-1 gap-4">
          <div className="flex items-center justify-start gap-4">
            <span className="mr-4 w-1/6">Link</span>
            <Button className="" type="link" size="sm" to="/demo">
              Small
            </Button>
            <Button
              className=""
              type="link"
              to="/demo"
              icon={<HomeIcon className="w-4 h-4" />}
            >
              Default
            </Button>
            <Button className="" type="link" size="lg" to="/demo">
              Large
            </Button>
          </div>
          <div className="flex items-center justify-start gap-4">
            <span className="mr-4 w-1/6">Primary</span>
            <Button
              className="bg-transparent hover:bg-transparent text-primary hover:text-primary/80"
              type="button"
              size="sm"
            >
              Small
            </Button>
            <Button
              className="bg-transparent hover:bg-transparent text-primary hover:text-primary/80"
              type="button"
              icon={<HomeIcon className="w-4 h-4" />}
            >
              Default
            </Button>
            <Button
              className="bg-transparent hover:bg-transparent text-primary hover:text-primary/80"
              type="button"
              size="lg"
            >
              Large
            </Button>
          </div>
          <div className="flex items-center justify-start gap-4">
            <span className="mr-4 w-1/6">Secondary</span>
            <Button
              className="bg-transparent hover:bg-transparent text-secondary hover:text-secondary/80"
              type="button"
              size="sm"
            >
              Small
            </Button>
            <Button
              className="bg-transparent hover:bg-transparent text-secondary hover:text-secondary/80"
              type="button"
              icon={<HomeIcon className="w-4 h-4" />}
            >
              Default
            </Button>
            <Button
              className="bg-transparent hover:bg-transparent text-secondary hover:text-secondary/80"
              type="button"
              size="lg"
            >
              Large
            </Button>
          </div>
          <div className="flex items-center justify-start gap-4">
            <span className="mr-4 w-1/6">Accent</span>
            <Button
              className="bg-transparent hover:bg-transparent text-accent hover:text-accent/80"
              type="button"
              size="sm"
            >
              Small
            </Button>
            <Button
              className="bg-transparent hover:bg-transparent text-accent hover:text-accent/80"
              type="button"
              icon={<HomeIcon className="w-4 h-4" />}
            >
              Default
            </Button>
            <Button
              className="bg-transparent hover:bg-transparent text-accent hover:text-accent/80"
              type="button"
              size="lg"
            >
              Large
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
