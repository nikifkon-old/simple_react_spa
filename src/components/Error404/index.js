import React, { Fragment } from 'react'

import styled from 'styled-components'
import { Grid } from '@material-ui/core'
import { Label } from '../../styles'

const Error404Container = styled(Grid)`
  background: #fff
  height: 100vh
`
const Error404 = () => {
    return (
        <Fragment>
          <Error404Container container 
          alignItems="center" 
          justify="center">
            <Label fontSize="6rem" color="primary">
              404<br/>Oops!
            </Label> 
          </Error404Container>
        </Fragment>
    )
}

export default Error404
