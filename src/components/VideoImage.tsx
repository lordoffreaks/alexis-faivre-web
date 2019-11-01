import React, { memo } from 'react'
import Img from 'gatsby-image'
import Typography from '@material-ui/core/Typography'
import playIcon from '../svg/play.svg'
import { Video } from '../models/video'
import { useStyles } from '../hooks/useStyles'
import { useSetActiveVideo } from '../hooks/useSetActiveVideo'
// @ts-ignore
import VimeoPlayer from 'react-player/lib/players/Vimeo'

type Props = Video & { selected: boolean }

const VideoImage: React.FunctionComponent<Props> = memo(
  ({ coverImage, id, title, url, selected }) => {
    const classes = useStyles(undefined)
    const { setActiveVideo } = useSetActiveVideo()
    const openVideo = () => setActiveVideo(id)
    const closeVideo = () => setActiveVideo(null)
    return (
      <>
        {selected ? (
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
        ) : (
          <div className={classes.videoImageContainer} onClick={openVideo}>
            <img className={classes.videoImageItem} src={playIcon} />
            {coverImage && <Img fluid={coverImage.childImageSharp.fluid} />}
          </div>
        )}
        <Typography
          component="h3"
          className={classes.videoImageTitle}
          onClick={closeVideo}
        >
          {title}
        </Typography>
      </>
    )
  }
)

export default VideoImage
