import { FluidObject } from 'gatsby-image'

export interface Video {
  id: number
  title: string
  url: string
  slug: string
  tags: Array<{
    name: string
    tag: string
  }>
  coverImage: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
}
