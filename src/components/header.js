import ThemePagination from "./themePagination";
import Switch from './switch';

import Flex from './styles/Flex.styled';

const Header = () => {
  return (
    <Flex justify="end">
      <ThemePagination />
      <Switch />
    </Flex>
  );
};

export default Header;