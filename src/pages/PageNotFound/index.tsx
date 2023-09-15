import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { PageNotFoundWrapperStyled, TitleStyled } from './styles';

export const PageNotFound: React.FC = () => {
  const navigate = useNavigate();
  const clickHandler = () => navigate(ROUTES[0].path);

  return (
    <PageNotFoundWrapperStyled>
      <TitleStyled>Page Not Found</TitleStyled>
      <Button onClick={clickHandler}>Go to Main</Button>
    </PageNotFoundWrapperStyled>
  );
};
