import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { BUTTONS, ROUTES, TITLES } from '../../constants';
import { PageWrapperStyled, TitleStyled } from '../../styles';
import { SmoothWrapper } from '../../components/common/SmoothWrapper';

export const PageNotFound: React.FC = () => {
  const navigate = useNavigate();
  const clickHandler = () => navigate(ROUTES[0].path);

  return (
    <SmoothWrapper>
      <PageWrapperStyled>
        <TitleStyled>{TITLES.PAGE_NOT_FOUND}</TitleStyled>
        <Button onClick={clickHandler}>{BUTTONS.GO_TO_MAIN}</Button>
      </PageWrapperStyled>
    </SmoothWrapper>
  );
};
