import React from 'react'
import { fallDown as Menu } from 'react-burger-menu'
// @ts-ignore
import { decorator as reduxBurgerMenu } from 'redux-burger-menu'
import { burgerStyles, centered } from '../hooks/useStyles'
import NavMenu from './NavMenu'

const { topHeight, iconHeight, iconsWidth, iconsColor } = burgerStyles

const styles = {
  bmBurgerButton: {
    ...centered,
    // position: 'fixed',
    top: topHeight,
    width: iconsWidth,
    height: iconHeight
  },
  bmBurgerBars: {
    height: '12%',
    background: iconsColor
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    ...centered,
    top: topHeight,
    height: iconHeight,
    width: iconsWidth
  },
  bmCross: {
    background: iconsColor,
    height: iconHeight
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#fff',
    padding: '3.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    textAlign: 'center'
  },
  bmItem: {
    ...centered,
    display: 'block',
    width: '90%',
    backgroundColor: 'transparent',
    outline: 0
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.1)'
  }
}

type Props = {
  isOpen: boolean
  onStateChange: (newState: any) => void
}

const BurgerMenu: React.FunctionComponent<Props> = ({
  onStateChange,
  isOpen
}) => {
  return (
    <Menu
      isOpen={isOpen}
      onStateChange={onStateChange}
      width="100%"
      id="burger-menu"
      pageWrapId={'page-wrap'}
      outerContainerId={'outer-container'}
      styles={styles}
    >
      <main id="page-wrap">
        <NavMenu />
      </main>
    </Menu>
  )
}

export default reduxBurgerMenu(BurgerMenu)
