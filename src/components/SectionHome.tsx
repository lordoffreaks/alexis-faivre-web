import React from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { useTrail, animated } from 'react-spring'
import { useStyles } from '../hooks/useStyles'

// @ts-ignore
import ShowMoreText from 'react-show-more-text'

import CortinaVertical from './CortinaVertical'

interface Trail {
  opacity?: any
  xy: any
  height?: any
}

const Name: React.FunctionComponent<{ classes: any }> = () => {
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

const Bio: React.FunctionComponent<{ classes: any }> = ({ classes }) => {
  return (
    <ShowMoreText>
      <Typography component="p" className={classes.sectionHome}>
        From a very young age I was enchanted by the sensation that occurs when
        gluing two shots and adding music to it, it has always seemed incredibly
        magical to me.
      </Typography>
      <Typography component="p" className={classes.sectionHome}>
        That magic has bewitched me for more than 25 years planning and editing
        Advertising Campaigns, video clips, Films, International TV Series for
        Advertising Agencies, Production Companies or Film and Advertising
        Directors. Due to my obsession with seeing new works,{' '}
        <a
          target="_blank"
          rel="noopener"
          href="https://www.axisaudiovisualresearch.com/"
          title="Axis audiovisual research website"
        >
          Axisaudiovisualresearch
        </a>{' '}
        creates a company dedicated to the search for new and impressive
        audiovisual references, both Photos and Videos at an international
        level, with the aim of visually supporting Creatives and Directors from
        around the world in specific projects.
      </Typography>
      <Typography component="p" className={classes.sectionHome}>
        Without neglecting editing, I have decided to make the leap to the
        direction in a more continuous way, always supported by the{' '}
        <a
          target="_blank"
          rel="noopener"
          href="https://www.axisaudiovisualresearch.com/"
          title="Axis audiovisual research website"
        >
          Axisaudiovisualresearch
        </a>{' '}
        family (designers, editors, thecnical 3d, writers.) Ready to face any
        challenge that may arise in any country and language. . Here you can see
        some jobs as Director and a Selection of jobs as editor.
      </Typography>
      <Typography component="p" className={classes.sectionHome}>
        Receive a cordial and affectionate greeting.
      </Typography>
    </ShowMoreText>
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
                    <Comp classes={classes} />
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
