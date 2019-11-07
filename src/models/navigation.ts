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

type NavigationItemExtensions = {
  [key in NavigationItem]?: NavigationItemExtension
}

// Order of this Array reflects order in the UI
export const navigationItemExtensions: NavigationItemExtensions = {
  [NavigationItem.home]: generate(NavigationItem.home, 'HOME'),
  [NavigationItem.direction]: generate(NavigationItem.direction, 'DIRECTION'),
  [NavigationItem.edition]: generate(NavigationItem.edition, 'EDITION'),
  // [NavigationItem.aboutMe]: generate(NavigationItem.aboutMe, 'ABOUT ME'),
  [NavigationItem.contact]: generate(NavigationItem.contact, 'CONTACT')
}
