import { AppBar, Container, makeStyles, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({
    toolbar: {
        display: 'inline-grid',
    }
}))

export const Header = ({title}) => {

    const classes = useStyles()

    return (
        <AppBar color="primary" position="static">
            <Toolbar >
                <Container className={classes.toolbar} maxWidth="lg">
                    <Typography variant="h4">{title}</Typography>
                </Container>
            </Toolbar>
        </AppBar>
    )
}