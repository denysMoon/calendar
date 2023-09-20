import emotion from '@emotion/styled';

export const HeaderStyled = emotion.header({
  padding: '0 20px',
  height: '70px',
  borderBottom: '1px solid #000',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const NavStyled = emotion.nav({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '10px',
});

export const ButtonsWrapperStyled = emotion.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '10px',
});
