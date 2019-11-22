import React from 'react'

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
  children,
  barColor = '#000',
  config = {}
}) => {
  const colors = new Array(2).fill(barColor)

  const springConfig = config || RSConfig.default
  const springs = useSprings(
    colors.length,
    colors.map(backgroundColor => {
      return {
        config: {
          ...springConfig
        },
        width: '0%',
        // backgroundColor: 'rgba(0, 0, 0, 0)',
        left: '-100%',
        right: '-100%',
        from: {
          backgroundColor,
          width: '100%',
          left: '-50%',
          right: '-50%'
        }
      }
    })
  )

  return (
    <div style={{ position: 'relative', width: '100%' }}>
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
          />
        )
      })}
      {children}
    </div>
  )
}

export default CortinaVertical
