import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Grid, Table, TableBody, TableCell, TableRow } from '@material-ui/core'
import { Label } from '../../styles'

import Navigation from './Navigation'

const CheckScreenStyled = styled(Grid)`
`
// User checks details
const CheckScreen = ({ decrementFormProgress, data, formProgress, applyForm }) => {

    const createData = (name, value) => {
      return { name, value };
    }
    // Check Screen Data for Table
    const rows = [
      createData('Nickname', data.nickname),
      createData('Email', data.email),
      createData('Telephone', data.tel),
      createData('Full Name', data.fullName),
      createData('Gender', data.gender),
      createData('Address', data.address),
      createData('Post Index', data.postIndex),
      createData('Credit Card', data.creditCard),
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
            <Navigation 
              decrementFormProgress={decrementFormProgress} 
              formProgress={formProgress}
              applyForm={applyForm}
            />
          </CheckScreenStyled>
        </Fragment>
    )
}

export default CheckScreen
