import React from 'react'
// @ts-ignore
import { decorator as reduxBurgerMenu } from 'redux-burger-menu'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import { createMuiTheme } from '@material-ui/core'

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

  const monserrat = 'Montserrat, sans-serif'
  const raleway = 'Raleway, sans-serif'

  const theme = createMuiTheme({
    typography: {
      fontFamily: raleway,
      h1: {
        fontFamily: monserrat
      },
      h2: {
        fontFamily: monserrat,
        fontSize: '1.75em'
      },
      h3: {
        fontFamily: monserrat
      },
      h4: {
        fontFamily: monserrat
      },
      h5: {
        fontFamily: monserrat
      },
      h6: {
        fontFamily: monserrat
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <div className={className} id={`outer-container`} style={style}>
        {children}
      </div>
    </ThemeProvider>
  )
}

export default reduxBurgerMenu(LayoutRoot)
