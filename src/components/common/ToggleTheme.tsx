import { useTheme } from '~/hooks/useTheme';
import Button from '../ui/Button';

import MoonIcon from '~icons/tabler/moon';
import SunIcon from '~icons/tabler/sun';

function ToggleTheme() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      className="bg-transparent hover:bg-transparent"
      type="button"
      aria-label="Toggle theme"
      icon={
        theme === 'dark' ? (
          <SunIcon className="w-4 h-4 text-muted" />
        ) : (
          <MoonIcon className="w-4 h-4 text-muted" />
        )
      }
    />
  );
}

export default ToggleTheme;
