import React from 'react'
import clsx from 'clsx'
import { scroller } from 'react-scroll'
import { navigationItemExtensions, NavigationItem } from '../models/navigation'
import { useSetNavigationItem } from '../hooks/useSetNavigationItem'
import { useCloseBurgerMenu } from '../hooks/useCloseBurgerMenu'
import { useStyles } from '../hooks/useStyles'

const NavMenu: React.FunctionComponent<{}> = () => {
  const classes = useStyles(undefined)
  const { closeBurgerMenu } = useCloseBurgerMenu()
  const { navigationItem, setNavigationItem } = useSetNavigationItem()
  const handleListItemClick = (type: NavigationItem) => (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    closeBurgerMenu()
    e && e.preventDefault()
    setNavigationItem(type)

    scroller.scrollTo(type, {
      duration: 1500,
      // delay: 100,
      smooth: true
      // containerId: 'ContainerElementID',
      // offset: 50, // Scrolls to element + 50 pixels down the page
    })
  }

  return (
    <ul className={classes.navMenu}>
      {Object.values(navigationItemExtensions).map(({ type, label }) => {
        return (
          <li
            key={type}
            // selected={navigationItem === type}
            className={classes.navMenuItem}
          >
            <span
              onClick={handleListItemClick(type)}
              className={clsx(classes.navMenuText, {
                [classes.navMenuTextSelected]: navigationItem === type
              })}
            >
              {label}
            </span>
          </li>
        )
      })}
    </ul>
  )
}

export default NavMenu
