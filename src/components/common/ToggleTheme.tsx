import Button from '../ui/Button';

import SunIcon from '~icons/tabler/sun';

interface Props {
  theme: 'dark' | 'light';
}

function ToggleTheme({ theme }: Props) {
  function toggleTheme() {
    if (theme === 'dark') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }

  return (
    <Button
      className="bg-transparent hover:bg-transparent"
      type="button"
      icon={<SunIcon className="w-4 h-4" />}
      onClick={toggleTheme}
    />
  );
}

export default ToggleTheme;
