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
}

const generate = (
  type: NavigationItem,
  label: string
): NavigationItemExtension => {
  return {
    type,
    label
  }
}

// Order of this Array reflects order in the UI
export const navigationItemExtensions: Array<NavigationItemExtension> = [
  generate(NavigationItem.home, 'HOME'),
  generate(NavigationItem.direction, 'DIRECTION'),
  generate(NavigationItem.edition, 'EDITION'),
  generate(NavigationItem.aboutMe, 'ABOUT ME'),
  generate(NavigationItem.contact, 'CONTACT')
]
