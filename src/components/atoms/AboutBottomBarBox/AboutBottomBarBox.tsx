import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.grey3};
`;

const AboutBottomBarBox = ({ children }: { children: string | number }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default AboutBottomBarBox;
