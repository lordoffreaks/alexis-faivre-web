import React from 'react'

interface LayoutMainProps {
  className?: string
}

const LayoutMain: React.FC<LayoutMainProps> = ({ children, className }) => <div className={className}>{children}</div>

export default LayoutMain
