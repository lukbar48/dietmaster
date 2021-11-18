import styled from "styled-components";



export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  width: 100%;
  height: 100px;
  padding: 20px 20px 20px 5px;
  background-color: ${({ theme }) => theme.colors.grey4};
  color: ${({ theme }) => theme.colors.white};

  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const CalculationsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 2fr;
  gap: 10px;
`;

export const Calc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 0.8rem;
  }
`;
