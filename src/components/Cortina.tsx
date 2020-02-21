import React from 'react'

import {
  animated,
  useSprings,
  SpringConfig,
  config as RSConfig
} from 'react-spring'

interface Props {
  rows: number
  barColor: string
  config: SpringConfig
}
const Cortina: React.FunctionComponent<Props> = ({
  children,
  rows = 5,
  barColor = '#000',
  config = {}
}) => {
  const colors = new Array(rows).fill(barColor)

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
          width: '100%',
          backgroundColor,
          left: '0%',
          right: '0%'
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
              top: `${index * (100 / colors.length)}%`,
              height: `${100 / colors.length}%`,
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

export default Cortina
