export enum NavigationItem {
  home = 'home',
  direction = 'direction',
  edition = 'edition',
  aboutMe = 'aboutMe',
  contact = 'contact'
}

type NavigationItemExtension = {
  type: NavigationItem
  label: string
  color: string
}

const generate = (
  type: NavigationItem,
  label: string,
  color: string
): NavigationItemExtension => {
  return {
    type,
    label,
    color
  }
}

type NavigationItemExtensions = {
  [key in NavigationItem]: NavigationItemExtension
}

// Order of this Array reflects order in the UI
export const navigationItemExtensions: NavigationItemExtensions = {
  [NavigationItem.home]: generate(NavigationItem.home, 'HOME', '#FFF'),
  [NavigationItem.edition]: generate(NavigationItem.edition, 'EDITION', '#AAA'),
  [NavigationItem.direction]: generate(
    NavigationItem.direction,
    'DIRECTION',
    '#000'
  ),
  [NavigationItem.aboutMe]: generate(
    NavigationItem.aboutMe,
    'ABOUT ME',
    '#333'
  ),
  [NavigationItem.contact]: generate(NavigationItem.contact, 'CONTACT', '#777')
}
