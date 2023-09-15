import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { PageWrapperStyled, TitleStyled } from '../../styles';

export const About: React.FC = () => {
  const navigate = useNavigate();
  const clickHandler = () => navigate(ROUTES[0].path);

  return (
    <PageWrapperStyled>
      <TitleStyled>About</TitleStyled>
      <Button onClick={clickHandler}>Go to Main</Button>
    </PageWrapperStyled>
  );
};
