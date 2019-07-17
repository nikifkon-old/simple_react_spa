import React, { Fragment } from 'react'
import { Dialog, 
    DialogTitle,  
    DialogActions,
    Button } from '@material-ui/core'
import styled from 'styled-components'

const EmailDialog = styled(Dialog)`
  width: 100%  
`
const FirstScreen = ({email, open, setDialogOpen}) => {
    const handleClose = (subscribe) => {
        setDialogOpen(!open)
        console.log(subscribe)
    }

    return (
        <Fragment>
            <EmailDialog
              open={open}
              onClose={handleClose}
            >
            <DialogTitle id="alert-dialog-title">Do you want to receive our newsletter on your email: {email}?</DialogTitle>
            <DialogActions>
              <Button onClick={() => handleClose(false)} color="primary">
                No
              </Button>
              <Button onClick={() => handleClose(true)} color="primary" autoFocus>
                Yes
              </Button>
            </DialogActions>
            </EmailDialog>
        </Fragment>
    )
}

export default FirstScreen