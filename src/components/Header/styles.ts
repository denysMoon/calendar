import emotion from '@emotion/styled';

export const HeaderStyled = emotion.header({
  height: '60px',
  borderBottom: '1px solid #000',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'green',
});

export const NavStyled = emotion.nav({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '10px',
});
