import React, { useState } from 'react'

import {
  animated,
  useSprings,
  SpringConfig,
  config as RSConfig
} from 'react-spring'

type Props = {
  barColor: string
  config: SpringConfig
}

const CortinaVertical: React.FunctionComponent<Props> = ({
  barColor = '#000',
  config = {}
}) => {
  const colors = new Array(2).fill(barColor)

  const [show, setShow] = useState(true)

  const springConfig = config || RSConfig.default
  const springs = useSprings(
    colors.length,
    colors.map(backgroundColor => {
      return {
        config: {
          ...springConfig
        },
        onRest: () => setShow(false),
        width: '0%',
        // backgroundColor: 'rgba(0, 0, 0, 0)',
        left: 0,
        right: 0,
        from: {
          backgroundColor,
          width: '50%',
          left: '0%',
          right: '0%'
        }
      }
    })
  )

  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        top: 0,
        left: 0,
        height: '100vh',
        backgroundColor: 'transparent',
        zIndex: 3,
        display: show ? 'block' : 'none'
      }}
    >
      {springs.map(({ backgroundColor, width, ...rest }, index) => {
        const isEven = index % 2 === 0
        return (
          <animated.div
            style={{
              backgroundColor,
              width,
              top: 0,
              height: `100vh`,
              ...(isEven ? { left: rest.left } : { right: rest.right }),
              position: 'absolute'
            }}
            key={index}
          />
        )
      })}
    </div>
  )
}

export default CortinaVertical
