import { Link } from '@tanstack/react-router';
import ToggleTheme from './common/ToggleTheme';
import Button from './ui/Button';

function Header() {
  return (
    <header className="sticky top-0 z-40 flex-none mx-auto w-full">
      <nav className="bg-white dark:bg-gray-700 shadow dark:shadow-none p-2 mt-0 w-full">
        <div className="container mx-auto flex flex-wrap items-center">
          <div className="flex w-full md:w-1/2 justify-center md:justify-start text-muted font-extrabold">
            <Link to="/">
              <span className="text-2xl">
                <i className="em em-grinning"></i> HR Systems 🚀
              </span>
            </Link>
          </div>
          <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
            <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
              <li className="mr-3">
                <Button
                  variant="link"
                  to="/employees"
                  className="text-muted inline-block py-2 px-4"
                >
                  Employees
                </Button>
              </li>
              <li className="mr-3">
                <Button
                  variant="link"
                  to="/vouchers"
                  className="text-muted inline-block py-2 px-4"
                >
                  Vouchers
                </Button>
              </li>
              <li className="mr-3">
                <Button
                  variant="link"
                  to="/demo"
                  className="text-muted inline-block py-2 px-4"
                >
                  Demo
                </Button>
              </li>
              <li>
                <ToggleTheme />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
