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

// Order of this Array reflects order in the UI
export const navigationItemExtensions: Array<NavigationItemExtension> = [
  generate(NavigationItem.home, 'HOME', '#FFF'),
  generate(NavigationItem.direction, 'DIRECTION', '#000'),
  generate(NavigationItem.edition, 'EDITION', '#AAA'),
  generate(NavigationItem.aboutMe, 'ABOUT ME', '#333'),
  generate(NavigationItem.contact, 'CONTACT', '#777')
]
