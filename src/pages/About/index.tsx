import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { BUTTONS, ROUTES, TITLES } from '../../constants';
import { PageWrapperStyled, TitleStyled } from '../../styles';
import { SmoothWrapper } from '../../components/common/SmoothWrapper';

export const About: React.FC = () => {
  const navigate = useNavigate();
  const clickHandler = () => navigate(ROUTES[0].path);

  return (
    <SmoothWrapper>
      <PageWrapperStyled>
        <TitleStyled>{TITLES.ABOUT}</TitleStyled>
        <Button onClick={clickHandler}>{BUTTONS.GO_TO_MAIN}</Button>
      </PageWrapperStyled>
    </SmoothWrapper>
  );
};
