import BottomBar from 'components/organisms/BottomBar';
import PatientInfo from 'components/molecules/PatientInfo';
import TopBar from 'components/organisms/TopBar';
import React from 'react';
import styled from 'styled-components';
import data from '../data/data'

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 2px;
  width: 100%;
  margin: 60px 0;
  list-style: none;
  color: ${({ theme }) => theme.colors.black};
`;

const Main = () => {
  return (
    <>
      <TopBar />
      <BottomBar />
      <Wrapper>
        {data.map(patient=> {
          return (
            <PatientInfo key={patient.id} {...patient}/>
          )
        })}
      </Wrapper>
    </>
  );
};

export default Main;
