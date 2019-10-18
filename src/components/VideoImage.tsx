import React from 'react'
import Img, { FluidObject } from 'gatsby-image'
import playIcon from '../svg/play.svg'
import Typography from '@material-ui/core/Typography'

type Props = {
  coverImage: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
  url: string
  title: string
}

const VideoImage: React.FunctionComponent<Props> = ({
  coverImage,
  url,
  title
}) => {
  return (
    <>
      <div
        style={{ position: 'relative', cursor: 'pointer' }}
        onClick={e => console.log(e, url)}
      >
        <img
          style={{
            zIndex: 1,
            margin: 'auto',
            position: 'absolute',
            top: '0',
            bottom: '0' /* vertical center */,
            left: '0',
            right: '0' /* horizontal center */
          }}
          src={playIcon}
        />
        <Img fluid={coverImage.childImageSharp.fluid} />
      </div>
      <Typography
        component="h3"
        style={{ textAlign: 'center', padding: '.5em 0' }}
      >
        {title}
      </Typography>
    </>
  )
}

export default VideoImage
