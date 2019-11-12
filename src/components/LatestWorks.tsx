import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import VideoImage from './VideoImage'
import { Video } from '../models/video'
import { useSetActiveVideo } from '../hooks/useSetActiveVideo'
import VideoPlayer from './VideoPlayer'
import { showSelectedRow } from '../helpers'

interface OwnProps {
  items: Array<Video>
}

type StateProps = {}

type DispatchProps = {}

type Props = OwnProps & StateProps & DispatchProps

const LatestWorks: React.FC<Props> = ({ items }) => {
  const { activeVideo } = useSetActiveVideo()
  const selectedStyles = { backgroundColor: '#4a4a4a', padding: '3em 1em' }
  let selectedProps: any
  return (
    <>
      <Grid container spacing={3}>
        {items.map((props, index) => {
          const selected = activeVideo === props.id
          const videoProps = {
            ...props,
            selected
          }
          if (selected) {
            selectedProps = videoProps
          }

          const showSelected = showSelectedRow(index, selected, selectedProps)

          return (
            <>
              <Grid key={props.id} item xs={12} sm={6}>
                <VideoImage {...videoProps} />
              </Grid>
              {showSelected && (
                <Grid item xs={12} style={{ transition: 'max-width 1500ms' }}>
                  <Typography
                    component="div"
                    style={selected ? selectedStyles : {}}
                  >
                    <VideoPlayer {...selectedProps} />
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
