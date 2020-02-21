import React, { memo, useState } from 'react'
import Img from 'gatsby-image'
// @ts-ignore
import VimeoPlayer from 'react-player/lib/players/Vimeo'

import Typography from '@material-ui/core/Typography'
import { Element, scroller } from 'react-scroll'
import { Video } from '../models/video'
import { useStyles } from '../hooks/useStyles'
import useFullscreenStatus from '../hooks/useFullScreenStatus'

type Props = Video & {
  even: boolean
}

const VideoPlayer: React.FunctionComponent<Props> = memo(
  ({ url, coverImage, title, id }) => {
    const classes = useStyles(undefined)

    const maximizableElement = React.useRef(null)
    const { setFullscreen } = useFullscreenStatus(maximizableElement)

    const [showVideo, setShowVideo] = useState(false)

    return (
      <div ref={maximizableElement}>
        <Element name={String(id)}>
          {!showVideo ? (
            <div
              className={classes.videoImageContainer}
              onClick={() => {
                scroller.scrollTo(String(id), {
                  duration: 1500,
                  smooth: true
                })
                setShowVideo(true)
                setFullscreen()
              }}
            >
              {coverImage && <Img fluid={coverImage.childImageSharp.fluid} />}
            </div>
          ) : (
            <div className={classes.videoPlayerWrapper}>
              <VimeoPlayer
                url={url}
                className={classes.videoPlayer}
                width="100%"
                height="100%"
                controls
                light
                playing={showVideo}
              />
            </div>
          )}
          <Typography
            component="p"
            style={{
              textAlign: 'center',
              paddingTop: '1em',
              fontWeight: 'bold',
              textTransform: 'uppercase'
            }}
          >
            {title}
          </Typography>
        </Element>
      </div>
    )
  }
)

export default VideoPlayer
