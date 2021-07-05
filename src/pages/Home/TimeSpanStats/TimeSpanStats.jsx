import React, { useState } from 'react'
import { makeStyles, Paper, Tabs, Tab } from '@material-ui/core'
import Chart from '../../../components/Chart/Chart'
import { useDispatch, useSelector } from 'react-redux'
import { getPeriodData, selectAllPeriods } from '../../../features/stock/stockSlice'
import { useEffect } from 'react'

const useStyles = makeStyles(theme => ({
    timespanContainer: {},
    tabnav: {
        [theme.breakpoints.down('sm')]: {
            '& .MuiTabs-flexContainer': {
                overflow: 'scroll'
            }
        }
    },
    chartContainer: {
        height: 500,
        width: "100%"
    }
}))

const TimeSpanStats = () => {

    const dispatch = useDispatch()
    const stockPeriods = useSelector(state => selectAllPeriods(state))

    const classes = useStyles()
    const timespans = [
        { period: 5, precision: "Minutes", range: 1, title: "5 Min" },
        { period: 1, precision: "Hours", range: 5, title: "Hour" },
        { period: 24, precision: "Hours", range: 90, title: "Day" },
        { period: 24 * 7, precision: "Hours", range: 365, title: "Week" },
        { period: 24 * 30, precision: "Hours", range: 730, title: "Month" }
    ]

    const [currTab, SetCurrTab] = useState(0)

    const tabChange = (e, value) => { SetCurrTab(value) }

    useEffect(() => {
        if (currTab !== undefined) {
            const currentTab = timespans[currTab]
            dispatch(getPeriodData({ period: currentTab.period, precision: currentTab.precision, range: currentTab.range }))
        }
    }, [currTab])

    return (
        <div className={classes.timespanContainer}>
            <Paper className={classes.tabnav}>
                <Tabs
                    variant="fullWidth"
                    onChange={tabChange}
                    value={currTab}
                    scrollButtons
                >
                    {
                        timespans.map((t, i) => (
                            <Tab
                                label={t.title}
                                key={t.title}
                                value={i}
                            ></Tab>
                        ))
                    }
                </Tabs>
            </Paper>
            <div className={classes.chartContainer}>
                <Chart data={stockPeriods} ></Chart>
            </div>
        </div>
    )

}


export default TimeSpanStats