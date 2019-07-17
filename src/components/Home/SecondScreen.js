import React, { Fragment, useEffect } from 'react'
import { Grid } from '@material-ui/core';
import styled from 'styled-components'
import { Label } from '../../styles';
import ItemCard from './ItemCard';

const SecondScreenContainer = styled(Grid)`
    background: #eee
    min-height: 100vh
    padding: 1rem
`
const ItemsContainer = styled(Grid)`
    background: #eee
`
const SecondScreen = () => {
//     const handleScroll = (event) => {            

//         let element = document.getElementById('SecondScreen')
//         console.log(window.scrollY)
//         // console.log(window)
//         console.log(element.scrollHeight)
//         console.log(element.scrollTop)
//         console.log(element.offsetHeight)
//         if( window.scrollY > 0 & window.scrollY <= element.scrollHeight ){
//             console.log('------------------------')
//         }
//     }


//     useEffect(() => {
//         document.addEventListener('scroll', handleScroll)

//         return function cleanup() {
//             document.removeEventListener('scroll', handleScroll)}
//     })

    return (
        <Fragment>
            <SecondScreenContainer id="SecondScreen" container direction="row" alignItems="center" justify="center">
                <Grid item >
                    <Label fontSize="2rem" >
                        The first 3 Video are FREE
                    </Label>
                    <Label color="primary">Your investition is only your time</Label>
                </Grid>
                <ItemsContainer item lg={12} md={12} sm={12} xs={12} container justify="space-evenly" alignItems="center" spacing={1}>
                    <Grid item lg={4} md={4} sm={12}><ItemCard /></Grid>
                    <Grid item lg={4} md={4} sm={12}><ItemCard /></Grid>
                    <Grid item lg={4} md={4} sm={12}><ItemCard /></Grid>
                </ItemsContainer>
            </SecondScreenContainer>
        </Fragment>
    )
}

export default SecondScreen
