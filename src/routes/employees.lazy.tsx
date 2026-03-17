import { createLazyFileRoute } from '@tanstack/react-router';
import Button from '~/components/ui/Button';
import PageLayout from '~/layouts/PageLayout';

import PageFirst from '~icons/mdi/chevron-double-left';
import PageLast from '~icons/mdi/chevron-double-right';
import ArrowLeft from '~icons/mdi/chevron-left';
import ArrowRight from '~icons/mdi/chevron-right';

export const Route = createLazyFileRoute('/employees')({
  component: RouteComponent,
});

function RouteComponent() {
  const pageSizeOptions = [10, 25, 50, 100];
  return (
    <PageLayout title="Employees">
      <div className="p-2">
        <h3>Employees</h3>
      </div>

      <div className="max-h-96 overflow-x-auto relative">
        <div className="flex flex-col">
          <table className="min-w-full divide-y-2 divide-gray-200">
            <thead className="sticky top-0 bg-white ltr:text-left rtl:text-right">
              <tr className="*:font-medium *:text-gray-900">
                <th className="px-3 py-2 whitespace-nowrap">Name</th>
                <th className="px-3 py-2 whitespace-nowrap">DoB</th>
                <th className="px-3 py-2 whitespace-nowrap">Role</th>
                <th className="px-3 py-2 whitespace-nowrap">Salary</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              <tr className="*:text-gray-900 *:first:font-medium">
                <td className="px-3 py-2 whitespace-nowrap">
                  Nandor the Relentless
                </td>
                <td className="px-3 py-2 whitespace-nowrap">04/06/1262</td>
                <td className="px-3 py-2 whitespace-nowrap">Vampire Warrior</td>
                <td className="px-3 py-2 whitespace-nowrap">$0</td>
              </tr>

              <tr className="*:text-gray-900 *:first:font-medium">
                <td className="px-3 py-2 whitespace-nowrap">
                  Laszlo Cravensworth
                </td>
                <td className="px-3 py-2 whitespace-nowrap">19/10/1678</td>
                <td className="px-3 py-2 whitespace-nowrap">
                  Vampire Gentleman
                </td>
                <td className="px-3 py-2 whitespace-nowrap">$0</td>
              </tr>

              <tr className="*:text-gray-900 *:first:font-medium">
                <td className="px-3 py-2 whitespace-nowrap">Nadja</td>
                <td className="px-3 py-2 whitespace-nowrap">15/03/1593</td>
                <td className="px-3 py-2 whitespace-nowrap">
                  Vampire Seductress
                </td>
                <td className="px-3 py-2 whitespace-nowrap">$0</td>
              </tr>

              <tr className="*:text-gray-900 *:first:font-medium">
                <td className="px-3 py-2 whitespace-nowrap">Colin Robinson</td>
                <td className="px-3 py-2 whitespace-nowrap">01/09/1971</td>
                <td className="px-3 py-2 whitespace-nowrap">Energy Vampire</td>
                <td className="px-3 py-2 whitespace-nowrap">$53,000</td>
              </tr>

              <tr className="*:text-gray-900 *:first:font-medium">
                <td className="px-3 py-2 whitespace-nowrap">
                  Guillermo de la Cruz
                </td>
                <td className="px-3 py-2 whitespace-nowrap">18/11/1991</td>
                <td className="px-3 py-2 whitespace-nowrap">
                  Familiar/Vampire Hunter
                </td>
                <td className="px-3 py-2 whitespace-nowrap">$0</td>
              </tr>
            </tbody>
          </table>
          <div className="sticky bottom-0 bg-white dark:bg-gray-700">
            <div className="relative flex items-center w-full justify-end gap-2 p-2 text-muted">
              <div className="mr-4">
                <label htmlFor="paginator">Items per page</label>
                <select name="paginator" id="paginator">
                  {pageSizeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-1 text-center">
                <p>Showing $from-$to of $totalCount results </p>
              </div>
              <div>
                <Button
                  type="button"
                  size="sm"
                  className="bg-transparent hover:bg-transparent text-secondary dark:text-muted p-2"
                  icon={<PageFirst className="w-5 h-5" />}
                  disabled
                ></Button>
                <Button
                  type="button"
                  size="sm"
                  className="bg-transparent hover:bg-transparent text-secondary dark:text-muted p-2"
                  icon={<ArrowLeft className="w-5 h-5" />}
                ></Button>
                <Button
                  type="button"
                  size="sm"
                  className="bg-transparent hover:bg-transparent text-secondary dark:text-muted p-2"
                  icon={<ArrowRight className="w-5 h-5" />}
                ></Button>
                <Button
                  type="button"
                  size="sm"
                  className="bg-transparent hover:bg-transparent text-secondary dark:text-muted p-2"
                  icon={<PageLast className="w-5 h-5" />}
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
