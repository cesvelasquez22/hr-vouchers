import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/employees')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/employees"!</div>
}
