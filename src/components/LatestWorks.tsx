import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import VideoImage from './VideoImage'
import { Video } from '../models/video'
import { useSetActiveVideo } from '../hooks/useSetActiveVideo'
import VideoPlayer from './VideoPlayer'
import { selectedRow } from '../helpers'
import { useStyles } from '../hooks/useStyles'

interface OwnProps {
  items: Video[]
}

type StateProps = {}

type DispatchProps = {}

type Props = OwnProps & StateProps & DispatchProps

const LatestWorks: React.FC<Props> = ({ items }) => {
  const { activeVideo } = useSetActiveVideo()
  const {
    activeVideoIndex,
    activeVideoProps,
    selectedVideoIndex
  } = selectedRow(items, activeVideo)
  const classes = useStyles(undefined)
  return (
    <>
      <Grid container spacing={3}>
        {items.map((props, index) => {
          return (
            <>
              <Grid
                key={props.id}
                item
                xs={12}
                sm={6}
                style={{ paddingTop: 0, paddingBottom: 0 }}
              >
                <VideoImage {...props} />
                {activeVideoIndex === index && (
                  <div className={classes.videoImageTitleArrow}></div>
                )}
              </Grid>
              {selectedVideoIndex !== undefined &&
                selectedVideoIndex === index && (
                  <Grid
                    item
                    xs={12}
                    style={{
                      transition: 'max-width 1500ms',
                      paddingTop: 0,
                      backgroundColor: '#4a4a4a'
                    }}
                  >
                    <Typography component="div" style={{}}>
                      <VideoPlayer {...activeVideoProps} />
                    </Typography>
                  </Grid>
                )}
            </>
          )
        })}
      </Grid>
    </>
  )
}

export default LatestWorks
