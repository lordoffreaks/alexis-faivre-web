import React from 'react'

import { navigationItemExtensions } from '../models/navigation'

const SectionOne: React.FunctionComponent<{}> = () => {
  return (
    <>
      {navigationItemExtensions.map(({ type, label }) => (
        <div className="section" id={type} key={type}>
          Hello you are in section {label}
        </div>
      ))}
    </>
  )
}

export default SectionOne
