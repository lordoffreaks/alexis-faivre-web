import React from 'react'
// @ts-ignore
import { decorator as reduxBurgerMenu } from 'redux-burger-menu'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import { theme } from '../hooks/useStyles'

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
    <ThemeProvider theme={theme}>
      <div className={className} id="outer-container" style={style}>
        {children}
      </div>
    </ThemeProvider>
  )
}

export default reduxBurgerMenu(LayoutRoot)
