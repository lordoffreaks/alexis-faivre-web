import React, { memo } from 'react'
import { Video } from '../models/video'
import { useStyles } from '../hooks/useStyles'
import { useSetActiveVideo } from '../hooks/useSetActiveVideo'
// @ts-ignore
import VimeoPlayer from 'react-player/lib/players/Vimeo'
import Typography from '@material-ui/core/Typography'

type Props = Video

const VideoPlayer: React.FunctionComponent<Props> = memo(
  ({ id, title, url }) => {
    const classes = useStyles(undefined)
    const { setActiveVideo } = useSetActiveVideo()
    const openVideo = () => setActiveVideo(id)
    const closeVideo = () => setActiveVideo(null)
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
  }
)

export default VideoPlayer
