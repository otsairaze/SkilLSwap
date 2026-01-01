import { getNavigationList } from '../model/selectors/getNavigationList';
import { NavigationItem } from './NavigationItem';

export const NavigationList = () => {
  const list = getNavigationList();

  return (
    <ul className={'flex items-center gap-[15px]'}>
      {list.map((item) => (
        <NavigationItem title={item.title} icon={item.icon} key={item.title} />
      ))}
    </ul>
  );
};
