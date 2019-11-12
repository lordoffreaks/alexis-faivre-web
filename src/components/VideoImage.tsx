import React, { memo } from 'react'
import Img from 'gatsby-image'
import Typography from '@material-ui/core/Typography'
import playIcon from '../svg/play.svg'
import { Video } from '../models/video'
import { useStyles } from '../hooks/useStyles'
import { useSetActiveVideo } from '../hooks/useSetActiveVideo'

type Props = Video & { selected: boolean }

const VideoImage: React.FunctionComponent<Props> = memo(
  ({ coverImage, id, title }) => {
    const classes = useStyles(undefined)
    const { setActiveVideo } = useSetActiveVideo()
    const openVideo = () => setActiveVideo(id)
    const closeVideo = () => setActiveVideo(null)
    return (
      <>
        <div className={classes.videoImageContainer} onClick={openVideo}>
          <img className={classes.videoImageItem} src={playIcon} />
          {coverImage && <Img fluid={coverImage.childImageSharp.fluid} />}
        </div>
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
