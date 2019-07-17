import React, { Fragment, useContext } from 'react'
import styled from 'styled-components'
import { IconButton } from '@material-ui/core'
import Next from '../../assets/arrow-right.svg'
import Prev from '../../assets/arrow-left.svg'
import Done from '../../assets/done.svg'
import { AppContext } from '../Reducer/'

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
const Navigation = () => {
  const { state, dispatch } = useContext(AppContext)

  const goBack = () => {
      dispatch({
        type: "HandleNavigate",
        payload: state.formProgress - 1
      })
    }
  const ApplyDetail = () => {
    dispatch({
      type: "Apply"
    })
  }
  return (
    <Fragment>
      <NavigationContainer>

      {
        state.formProgress > 0 ? (
          <PrevButton onClick={goBack}>
            <img src={Prev} alt="next"/>
          </PrevButton>
        ) : null
      }
      {
        state.formProgress === 2 ? (
          <NextButton onClick={ApplyDetail}>
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