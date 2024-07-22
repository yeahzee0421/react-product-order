import styled from '@emotion/styled';
import type { ReactNode } from 'react';

import { breakpoints } from '@/styles/variants';

type SplitContainerProps = {
  children: [ReactNode, ReactNode];
};

export const SplitContainer = ({ children }: SplitContainerProps) => {
  return (
    <Wrapper>
      <Main>
        <MainContainer>{children[0]}</MainContainer>
      </Main>
      <Aside>
        <AsideContainer>{children[1]}</AsideContainer>
      </Aside>
    </Wrapper>
  );
};

export const Main = styled.main`
  width: 100%;
  max-width: 900px;
`;

export const MainContainer = styled.div`
  border-left: 1px solid rgb(229, 229, 229);
  height: calc(-54px + 100vh);
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

export const AsideContainer = styled.div`
  width: 100%;
  height: 100%;
  border-left: 1px solid rgb(237, 237, 237);
  border-right: 1px solid rgb(237, 237, 237);
  padding: 16px;
  .order-aside-title {
    adding: 24px 0px 20px;
  }
  .span-title {
    font-size: 18px;
    line-height: 21px;
    color: rgb(34, 34, 34);
    box-sizing: border-box;
    font-weight: 700;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
`;
