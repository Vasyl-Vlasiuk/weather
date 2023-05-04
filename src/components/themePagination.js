import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../redux/actions';

import styled from "styled-components";

const Pagination = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 7px;
`;
const Scheme = styled.li`
	display: inline-block;
	width: 40px;
	height: 8px;
	border: 1px solid rgba(0, 0, 0, 0.25);
	background: ${({ theme, index }) => theme.scheme[index].primary};
	cursor: pointer;
  transition: all 0.15s linear;

	&.active {
    height: 15px;
  }

  &:hover {
    height: 20px;
  }
`

const ThemePagination = () => {
  const { themeIndex } = useSelector(state => state.theme);

  const dispatch = useDispatch();
 
  const changeScheme = (i) => {
    dispatch(changeTheme(i));
  }

  return (
    <Pagination>
      {([...Array(6)]).map((_, i) => (
        <Scheme
          key={i}
          index={i}
          className={i === themeIndex ? 'active' : ''}
          onClick={() => changeScheme(i)}
        />
      ))}
    </Pagination>
  );
};

export default ThemePagination;