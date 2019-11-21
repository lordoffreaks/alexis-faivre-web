import React, { useState } from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { useTrail, animated } from 'react-spring'

type Trail = {
  opacity?: any
  x: any
  height: any
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

  const [toggle] = useState(true)
  const trails = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 'auto' : 0,
    from: { opacity: 0, x: 20, height: 0 }
  })

  return (
    <Grid container>
      {trails.map(({ x, height, ...rest }: Trail, index: number) => {
        const Comp = items[index]
        return (
          <Grid item xs={12} md={6}>
            <animated.div
              key={index}
              className="trails-text"
              style={{
                ...rest,
                transform: x.interpolate((x: any) => {
                  return `translate3d(0,${x}px,0)`
                })
              }}
            >
              <animated.div style={{ height }}>
                <Comp />
              </animated.div>
            </animated.div>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default SectionHome
