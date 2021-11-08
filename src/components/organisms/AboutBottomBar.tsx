import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.grey4};
`

const AboutBottomBar = () => {
  return (
    <Wrapper>
      x
    </Wrapper>
  )
}

export default AboutBottomBar
