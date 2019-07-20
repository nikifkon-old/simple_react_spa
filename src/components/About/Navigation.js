import React, { Fragment } from 'react'
import styled from 'styled-components'
import { IconButton } from '@material-ui/core'
import Next from '../../assets/arrow-right.svg'
import Prev from '../../assets/arrow-left.svg'
import Done from '../../assets/done.svg'

const NavigationContainer = styled.div`
  display: flex
  width: 100%
`
const NextButton = styled(IconButton)`
  margin-left: auto !important
`
const PrevButton = styled(IconButton)`
  margin-right: auto !important
`
// Form navigation
const Navigation = ({ decrementFormProgress, formProgress, applyForm }) => {
  return (
    <Fragment>
      <NavigationContainer>
      {
        formProgress > 0 ? (
          <PrevButton onClick={decrementFormProgress}>
            <img src={Prev} alt="next"/>
          </PrevButton>
        ) : null
      }
      {
        formProgress === 2 ? (
          <NextButton onClick={applyForm}>
            <img src={Done} alt="done"/>
          </NextButton>
        ) : (
          <NextButton type="submit">
            <img src={Next} alt="next"/>
          </NextButton>
        )
      }
      </NavigationContainer>
    </Fragment>
  )}

export default Navigation