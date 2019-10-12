import React from 'react'

interface LayoutRootProps {
  className?: string
}

const LayoutRoot: React.FC<LayoutRootProps> = ({ children, className }) => (
  <div className={className} id={`outer-container`}>
    {children}
  </div>
)

export default LayoutRoot
