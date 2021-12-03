import styled from "styled-components";

export const Wrapper = styled.div`
display: grid;
grid-template-columns: 1fr 4fr 4fr 3fr 3fr;
align-items: center;
justify-content: center;
width: 100%;
height: 45px;
background-color: ${({ theme }) => theme.colors.blue3};
color: white;
text-align: center;

div {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
`;