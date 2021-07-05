import { Avatar, Chip, CircularProgress, Divider, LinearProgress, makeStyles, Typography } from '@material-ui/core'
import { VerticalAlignBottom, VerticalAlignTop, VpnKey } from '@material-ui/icons'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getQuoteInfo, selectQuoteInfo, selectQuoteStatus } from '../../../features/quote/quoteSlice'

const useStyles = makeStyles(theme => ({
    current: {
        display: 'flex',
        flexDirection: 'column',

        '& h4, h2': {
            fontWeight: 'bold'
        }
    },
    description: {
        display: 'flex',
        alignItems: 'center'
    },
    infoWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    title: {
        display: 'flex',
        flexDirection: 'column'
    },
    info: {
        padding: "0 20px",
        display: "flex",
        flexDirection: 'column',
        justifyContent: "space-evenly",

        '& .MuiChip-root': {
            marginBottom: 5
        },

        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
            width: "100%"
        }
    }
}))

const CurrentWeather = () => {

    const dispatch = useDispatch()
    const quote = useSelector(state => selectQuoteInfo(state))
    const status = useSelector(state => selectQuoteStatus(state))

    useEffect(() => {
        dispatch(getQuoteInfo())
        console.log(quote)
    }, [])

    const classes = useStyles()

    return (
        status==="loading" ? <LinearProgress/>  :
            <div className={classes.current}>
                <div className={classes.infoWrapper}>
                    <div className={classes.title}>
                        <Typography variant="h4">{quote.symbol}</Typography>
                        <Typography variant="subtitle2" style={{ marginTop: 20 }}>{quote["latest trading day"]}</Typography>
                    </div>
                    <div className={classes.info}>
                        <Chip icon={<VpnKey />} label={`$${parseInt(quote.open).toFixed(2)}`} />
                        <Chip icon={<VerticalAlignTop />} label={`$${parseInt(quote.high).toFixed(2)}`} />
                        <Chip icon={<VerticalAlignBottom />} label={`$${parseInt(quote.low).toFixed(2)}`} />
                    </div>
                </div>
                <Divider style={{ margin: '20px 0' }} />
                <div className={classes.description}>
                    <Typography variant="h2">${parseInt(quote.price).toFixed(2)}</Typography>
                    <Divider orientation="vertical" flexItem variant="middle" style={{ margin: '16px' }} ></Divider>
                    <Typography variant="subtitle1">Previous Close ${parseInt(quote["previous close"]).toFixed(2)}</Typography>
                </div>
            </div>
    )
}

export default CurrentWeather