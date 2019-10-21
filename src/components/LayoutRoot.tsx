import React from 'react'
// @ts-ignore
import { decorator as reduxBurgerMenu } from 'redux-burger-menu'

interface LayoutRootProps {
  className?: string
  isOpen: boolean
}

const LayoutRoot: React.FC<LayoutRootProps> = ({
  children,
  className,
  isOpen
}) => {
  const style = {
    ...(isOpen && { overflow: 'hidden', height: '100vh' })
  }

  return (
    <div className={className} id={`outer-container`} style={style}>
      {children}
    </div>
  )
}

export default reduxBurgerMenu(LayoutRoot)
