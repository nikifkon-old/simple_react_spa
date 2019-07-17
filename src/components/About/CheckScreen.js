import React, { Fragment, useContext } from 'react'
import styled from 'styled-components'
import { Grid, Table, TableBody, TableCell, TableRow } from '@material-ui/core'
import { Label } from '../../styles'

import { AppContext } from '../Reducer/'
import Navigation from './Navigation'

const CheckScreenStyled = styled(Grid)`
`
// User checks details
const CheckScreen = () => {
    const { state, dispatch } = useContext(AppContext)

    const createData = (name, value) => {
      return { name, value };
    }
    // Check Screen Data for Table
    const rows = [
      createData('Nickname', state.nickname),
      createData('Email', state.email),
      createData('Telephone', state.tel),
      createData('Full Name', state.fullName),
      createData('Gender', state.gender),
      createData('Address', state.address),
      createData('Post Index', state.postIndex),
      createData('Credit Card', state.creditCard),
    ];


    return (
        <Fragment>
          <CheckScreenStyled>
            <Label color="primary" fontSize="1.5rem">Check your details below</Label>
            <Table>
              <TableBody>
                {
                  rows.map(row => (
                    <TableRow key={row.name}>
                      <TableCell>
                        {row.name}
                      </TableCell>
                      <TableCell>
                        {row.value}
                      </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Navigation />
          </CheckScreenStyled>
        </Fragment>
    )
}

export default CheckScreen
