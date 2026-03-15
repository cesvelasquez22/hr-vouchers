import { createFileRoute } from '@tanstack/react-router';
import PageLayout from '~/layouts/PageLayout';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <PageLayout title="Home">
      <div className="p-2">
        <h3>Welcome Home!</h3>
      </div>
    </PageLayout>
  );
}
