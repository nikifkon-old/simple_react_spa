import React, { Fragment } from 'react'
import { Paper, Grid } from '@material-ui/core';
import styled from 'styled-components'

import Item1 from '../../assets/item1.png'
import { Label } from '../../styles';

const ItemGrid = styled(Grid)`
    background: #fff
`
const ItemCard = () => {
    return (
        <Fragment>
            <Paper>
                <ItemGrid container direction="column" alignItems="center">
                    <img src={Item1} width={150}/>
                    <Label>Lorem ipsum</Label>
                    <Label fontWeight="bold">Lorem ipsum dolor sit amet, consectetuer adipiscing elit enean commodo</Label>
                </ItemGrid>
            </Paper>
        </Fragment>
    )
}

export default ItemCard
