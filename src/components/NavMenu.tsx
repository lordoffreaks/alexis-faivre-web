import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { navigationItemExtensions, NavigationItem } from '../models/navigation'
import { scroller } from 'react-scroll'
import { useSetNavigationItem } from '../hooks/useSetNavigationItem'
import { useCloseBurgerMenu } from '../hooks/useCloseBurgerMenu'

const NavMenu: React.FunctionComponent<{}> = () => {
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
    <List>
      {Object.values(navigationItemExtensions).map(({ type, label }) => {
        return (
          <ListItem
            key={type}
            button
            selected={navigationItem === type}
            onClick={handleListItemClick(type)}
          >
            <ListItemText primary={label} />
          </ListItem>
        )
      })}
    </List>
  )
}

export default NavMenu
