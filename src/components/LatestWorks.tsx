import React from 'react'
import Grid from '@material-ui/core/Grid'
import VideoPlayer from './VideoPlayer'
import { Video } from '../models/video'

interface OwnProps {
  items: Video[]
}

type StateProps = {}

type DispatchProps = {}

type Props = OwnProps & StateProps & DispatchProps

const LatestWorks: React.FC<Props> = ({ items }) => {
  return (
    <Grid container>
      {items.map((props, index) => {
        return (
          <Grid item xs={12} md={6} key={props.id} style={{ padding: '1em' }}>
            <VideoPlayer {...props} even={index % 2 === 0} />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default LatestWorks
