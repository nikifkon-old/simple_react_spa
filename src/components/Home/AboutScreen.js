import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Grid } from '@material-ui/core';

import People from '../../assets/people.svg'
import Score from '../../assets/score.svg'
import { Label } from '../../styles'

const AboutScreenContainer = styled(Grid)`
    background: #fff
    min-height: 100vh
`
const PeopleImg = styled.img`
    height: 80vh
`
const ScoreImg = styled.img`
    width: 50vh
`
const AboutScreen = () => {
    return (
        <Fragment>
            <AboutScreenContainer container direction="row" alignItems="center" justify="space-around">
                <PeopleImg src={People}/>
                <Grid item xs={12} sm={12} md={6} lg={6} container direction="column" alignItems="center">
                    <Label color="#888">Your trainer</Label>
                    <Label fontSize="2rem" color="primary">Daniel Redcliff</Label>
                    <Label >Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</Label>
                    <ScoreImg src={Score}/>
                </Grid>
            </AboutScreenContainer>
        </Fragment>
    )
}

export default AboutScreen
