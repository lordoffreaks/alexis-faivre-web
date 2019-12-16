import React from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { useTrail, animated } from 'react-spring'
import { useStyles } from '../hooks/useStyles'

import CortinaVertical from './CortinaVertical'

type Trail = {
  opacity?: any
  xy: any
  height?: any
}

const Name: React.FunctionComponent<{}> = () => {
  return (
    <Typography variant="h2" style={{ fontSize: '1.75em' }}>
      HELLO MY NAME IS{' '}
      <Typography
        variant="h1"
        style={{
          marginTop: '.25em',
          lineHeight: '.7em'
        }}
      >
        ALEXIS{' '}
        <span
          style={{
            display: 'block',
            color: 'rgb(104, 166, 147)',
            lineHeight: 1
          }}
        >
          FAIVRE
        </span>
      </Typography>
    </Typography>
  )
}

const Bio: React.FunctionComponent<{}> = () => {
  return (
    <Typography component="p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. aenean molestie
      mauris velit, in aliquet neque elementum nec. etiam sit amet mauris non
      tellus laoreet porttitor. integer quis placerat erat, nec faucibus dui.
    </Typography>
  )
}

const SectionHome: React.FunctionComponent<{}> = () => {
  const items = [Name, Bio]
  const config = { mass: 5, tension: 2000, friction: 1000 }

  const trails = useTrail(items.length, {
    config,
    opacity: 1,
    xy: [0, 0],
    height: '0',
    from: { opacity: 0, xy: [200, 200], height: '100%' }
  })

  const classes = useStyles(undefined)

  return (
    <>
      <CortinaVertical
        barColor="#000"
        config={{ friction: 200, mass: 5, tension: 500 }}
      />
      <Grid container className={classes.fullHeight} alignContent="center">
        {trails.map(
          ({ xy, height, opacity, ...rest }: Trail, index: number) => {
            const Comp = items[index]
            return (
              <Grid item xs={12} md={6} key={index}>
                <animated.div
                  key={index}
                  className="trails-text"
                  style={{
                    ...rest,
                    opacity,
                    transform: xy.interpolate((_: any, y: any) => {
                      // const realX = index % 2 === 0 ? x : -x
                      const realY = index % 2 === 0 ? y : -y
                      return `translate3d(0,${realY}px,0)`
                    })
                  }}
                >
                  <animated.div style={{ height }}>
                    <Comp />
                  </animated.div>
                </animated.div>
              </Grid>
            )
          }
        )}
      </Grid>
    </>
  )
}

export default SectionHome
