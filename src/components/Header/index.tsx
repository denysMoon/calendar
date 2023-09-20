import { Button } from 'react-bootstrap';
import { useMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useSaveImage } from '../../hooks/useSaveImage';
import { BUTTONS, ROUTES } from '../../constants';
import { RootState } from '../../store/types';
import { useAppDispatch } from '../../store/dispatch';
import { CustomLink } from '../CustomLink';
import { HeaderStyled, NavStyled } from './styles';
import { fetchHolidays } from '../../store/holidays/holidays.slice';
import { useMount } from '../../hooks/useMount';

export const Header: React.FC = () => {
  const match = !!useMatch(ROUTES[0].path);
  const { isLoading, handleSaveAsImage } = useSaveImage();
  const holidays = useSelector((state: RootState) => state.holidaysReducer);
  const dispatch = useAppDispatch();

  console.log(holidays);

  useMount(() => {
    // Temp hardcoded country code
    dispatch(fetchHolidays('UA'));
  });

  return (
    <HeaderStyled>
      <NavStyled>
        {ROUTES.map((route) => {
          return (
            <CustomLink key={route.path} to={route.path}>
              {route.name}
            </CustomLink>
          );
        })}
      </NavStyled>
      {match && (
        <Button disabled={isLoading} onClick={handleSaveAsImage}>
          {BUTTONS.SAVE_CALENDAR_AS_IMAGE}
        </Button>
      )}
    </HeaderStyled>
  );
};
