import styled from '@emotion/styled';

import { breakpoints } from '@/styles/variants';

export const Main = styled.main`
  width: 100%;
  max-width: 900px;
`;

export const Aside = styled.aside`
  display: none;
  position: sticky;
  top: 54px;
  width: 100%;
  max-width: 360px;
  height: calc(-54px + 100vh);
  @media screen and (min-width: ${breakpoints.sm}) {
    display: block;
  }
`;
