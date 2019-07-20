import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { GoogleMap, withGoogleMap, withScriptjs } from "react-google-maps"
import styled from 'styled-components'
import { Grid, Button } from '@material-ui/core'
import { Label } from '../../styles'

const AboutContainer = styled(Grid)`
  min-height: 100vh
  padding: 1rem
`
const MapContainer = styled.div`
  width: 100%
  height: 80vh
`
const MapElement = styled.div`
  height: 100%
  width: 100%
`
const MapLoadingElement = styled.div`
  height: 100%
  width: 100
`

const AboutGoogleMap = withScriptjs(withGoogleMap(props => 
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
  </GoogleMap>
))


const About = () => {
    const API_MAP_URL = "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAT3INLURhcUCNxm7i__S_uTnUf-pLQfpY"

    return (
        <Fragment>
          <AboutContainer 
            container 
            direction="column"
            alignItems="center"
          >
            <AboutGoogleMap isMarkerShown={false}
              googleMapURL={API_MAP_URL}
              loadingElement={<MapLoadingElement />}
              containerElement={<MapContainer />}
              mapElement={<MapElement />} />
              
            <Label>You Can Join Us</Label>
            <Link to="/about/joinus"><Button variant="contained">Join</Button></Link>
          </AboutContainer>
        </Fragment>
    )
}

export default About
