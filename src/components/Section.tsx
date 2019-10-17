import React from 'react'
// import 'intersection-observer' // optional polyfill
import Observer from '@researchgate/react-intersection-observer'
import { Element } from 'react-scroll'
import { NavigationItem } from '../models/navigation'
import { useSetNavigationItem } from '../hooks/useSetNavigationItem'

type Props = {
  name: NavigationItem
}

const Section: React.FunctionComponent<Props> = ({ name, children }) => {
  const setNavigationItem = useSetNavigationItem()
  const handleIntersection = (event: IntersectionObserverEntry) => {
    if (event.isIntersecting) {
      setNavigationItem(event.target.id as NavigationItem)
    }
  }

  const options = {
    onChange: handleIntersection,
    root: '#scrolling-container',
    rootMargin: '0% 0% -25%'
  }
  return (
    <Observer {...options}>
      <Element name={name} id={name} style={{ marginBottom: '400px' }}>
        {children}
      </Element>
    </Observer>
  )
}

export default Section
