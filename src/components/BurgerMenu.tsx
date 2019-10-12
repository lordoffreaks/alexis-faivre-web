import React from 'react'
import { fallDown as Menu } from 'react-burger-menu'
import NavMenu from './NavMenu'

const topHeight = '12px'
const burgerIconHeight = '30px'
const burgerIconsWidth = '36px'
const burgerIconsColor = '#bdc3c7'

const centered = {
  left: '50%',
  transform: 'translateX(-50%)'
}

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    top: topHeight,
    width: burgerIconsWidth,
    height: burgerIconHeight,
    ...centered
  },
  bmBurgerBars: {
    height: '12%',
    background: burgerIconsColor
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    top: topHeight,
    height: burgerIconHeight,
    width: burgerIconsWidth,
    ...centered
  },
  bmCross: {
    background: burgerIconsColor,
    height: burgerIconHeight
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#fff',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.1)'
  }
}

const BurgerMenu: React.FunctionComponent<{}> = ({}) => {
  return (
    <Menu
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

export default BurgerMenu
