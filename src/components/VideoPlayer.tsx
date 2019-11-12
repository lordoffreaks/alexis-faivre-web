import React, { memo } from 'react'
import { Video } from '../models/video'
import { useStyles } from '../hooks/useStyles'
// @ts-ignore
import VimeoPlayer from 'react-player/lib/players/Vimeo'
import Typography from '@material-ui/core/Typography'

type Props = Video

const VideoPlayer: React.FunctionComponent<Props> = memo(({ title, url }) => {
  const classes = useStyles(undefined)
  return (
    <>
      <Typography component="h3">{title}</Typography>
      <div className={classes.videoPlayerWrapper}>
        <VimeoPlayer
          url={url}
          className={classes.videoPlayer}
          width={`100%`}
          height={`100%`}
          controls
          playing
        />
      </div>
    </>
  )
})

export default VideoPlayer
