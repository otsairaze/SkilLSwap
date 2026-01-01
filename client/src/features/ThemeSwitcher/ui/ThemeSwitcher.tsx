import { MoonIcon } from 'lucide-react';
import { Label } from '@/shared/ui/label';
import { useThemeStore } from '@/shared/store/useThemeStore';
import { Switch } from '@/shared/ui/switch';

export const ThemeSwitcher = () => {
  const { isDark, setDark } = useThemeStore();
  return (
    <div className={'flex items-center justify-center gap-2'}>
      <Label htmlFor={'dark-mode'}>
        <MoonIcon />
      </Label>
      <Switch checked={isDark} onCheckedChange={setDark} id={'dark-mode'} />
    </div>
  );
};
