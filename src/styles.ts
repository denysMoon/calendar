import emotion from '@emotion/styled';

export const MainWrapperStyled = emotion.div({
  marginTop: '20px',
  height: '90vh',
  width: '100%',
});

export const PageWrapperStyled = emotion.div({
  marginTop: '20px',
  height: '100vh',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '20px',
});

export const TitleStyled = emotion.h1({
  fontWeight: 'bold',
});
