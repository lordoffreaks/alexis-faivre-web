import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import VideoImage from './VideoImage'
import { Video } from '../models/video'
import { useSetActiveVideo } from '../hooks/useSetActiveVideo'

interface OwnProps {
  items: Array<Video>
}

type StateProps = {}

type DispatchProps = {}

type Props = OwnProps & StateProps & DispatchProps

const LatestWorks: React.FC<Props> = ({ items }) => {
  const { activeVideo } = useSetActiveVideo()
  return (
    <>
      <Grid container spacing={3}>
        {items.map(props => {
          const selected = activeVideo === props.id
          const videoProps = {
            ...props,
            selected
          }
          return (
            <Grid
              key={props.id}
              item
              xs={12}
              sm={selected ? 12 : 6}
              style={{ transition: 'max-width 1500ms' }}
            >
              <Typography component="div">
                <VideoImage {...videoProps} />
              </Typography>
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

export default LatestWorks
