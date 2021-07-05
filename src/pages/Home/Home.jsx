import { Container, makeStyles} from '@material-ui/core';
import React from 'react';
import CurrentStats from './CurrentStats/CurrentStats';
import TimeSpanStats from './TimeSpanStats/TimeSpanStats'

const useStyles = makeStyles(theme => ({
  statsHead: {
    position: 'relative',
    padding: '40px 0'
  },
  statsHeadContainer: {
    position: 'relative'
  },
  timespanContainer: {
    marginTop: 50
  }
}))

const Home = () => {

  const classes = useStyles()

  return (
    <>
      <div className={classes.statsHead}>
        <Container className={classes.statsHeadContainer} maxWidth="lg">
          <CurrentStats />
        </Container>
      </div >
      <Container className={classes.timespanContainer}>
        <TimeSpanStats />
      </Container>
    </>
  )
}


export default Home;
