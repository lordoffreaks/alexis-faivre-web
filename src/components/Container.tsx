import * as React from 'react'

import Grid from '@material-ui/core/Grid'

interface ContainerProps {
  className?: string
}

const Container: React.FC<ContainerProps> = ({ children, className }) => (
  <Grid container spacing={3} className={className}>
    {children}
  </Grid>
)

export default Container
