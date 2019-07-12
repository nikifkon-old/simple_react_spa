import React, { Fragment } from 'react'
import { Dialog, 
    DialogTitle, 
    DialogContent, 
    DialogActions, 
    DialogContentText,
    Button } from '@material-ui/core'

const FirstScreen = ({email, open, setDialogOpen}) => {
    const handleClose = (subscribe) => {
        setDialogOpen(!open)
        console.log(subscribe)
    }

    return (
        <Fragment>
            <Dialog
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
            </Dialog>
        </Fragment>
    )
}

export default FirstScreen