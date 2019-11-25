'use strict'
const path = require('path')
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

const decodeHTMLEntities = text => {
  const entities = [
    ['amp', '&'],
    ['apos', "'"],
    ['#x27', "'"],
    ['#x2F', '/'],
    ['#39', "'"],
    ['#47', '/'],
    ['lt', '<'],
    ['gt', '>'],
    ['nbsp', ' '],
    ['quot', '"']
  ]

  for (let i = 0, max = entities.length; i < max; ++i)
    text = text.replace(
      new RegExp('&' + entities[i][0] + ';', 'g'),
      entities[i][1]
    )

  return text
}

const slugify = string => {
  const a =
    'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
  const b =
    'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnooooooooprrsssssttuuuuuuuuuwxyyzzz------'
  const p = new RegExp(a.split('').join('|'), 'g')

  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

const generateVimeoSlug = title => {
  return `works/${slugify(decodeHTMLEntities(title))}`
}

exports.onCreateNode = async ({
  node,
  actions,
  getNode,
  cache,
  store,
  createNodeId
}) => {
  const { createNodeField, createNode } = actions

  // Sometimes, optional fields tend to get not picked up by the GraphQL
  // interpreter if not a single content uses it. Therefore, we're putting them
  // through `createNodeField` so that the fields still exist and GraphQL won't
  // trip up. An empty string is still required in replacement to `null`.

  switch (node.internal.type) {
    // case 'MarkdownRemark':
    //   const { permalink, layout } = node.frontmatter
    //   const { relativePath } = getNode(node.parent)

    //   let slug = permalink

    //   if (!slug) {
    //     slug = `/${relativePath.replace('.md', '')}/`
    //   }

    //   // Used to generate URL to view this content.
    //   createNodeField({
    //     node,
    //     name: 'slug',
    //     value: slug || ''
    //   })

    //   // Used to determine a page layout.
    //   createNodeField({
    //     node,
    //     name: 'layout',
    //     value: layout || ''
    //   })
    //   break

    case 'Vimeo____video':
      const { title, thumbnail } = node

      // Used to generate URL to view this content.
      createNodeField({
        node,
        name: 'slug',
        value: generateVimeoSlug(title) || ''
      })

      // Used to determine a page layout.
      createNodeField({
        node,
        name: 'layout',
        value: 'work'
      })

      try {
        const nodeName = `coverImage`
        const fileNode = await createRemoteFileNode({
          parentNodeId: node.id,
          url: thumbnail.hd,
          store,
          cache,
          createNode,
          createNodeId
        })
        const fileNodeLink = `${nodeName}___NODE`
        node[fileNodeLink] = fileNode.id
      } catch (e) {
        console.error(
          `Failed creating image ${thumbnail.hd} for node: ${title}`
        )
        console.error(e)
      }

      break
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // const allMarkdown = await graphql(`
  //   {
  //     allMarkdownRemark(limit: 1000) {
  //       edges {
  //         node {
  //           fields {
  //             layout
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  // if (allMarkdown.errors) {
  //   console.error(allMarkdown.errors)
  //   throw new Error(allMarkdown.errors)
  // }

  // allMarkdown.data.allMarkdownRemark.edges.forEach(({ node }) => {
  //   const { slug, layout } = node.fields

  //   createPage({
  //     path: slug,
  //     // This will automatically resolve the template to a corresponding
  //     // `layout` frontmatter in the Markdown.
  //     //
  //     // Feel free to set any `layout` as you'd like in the frontmatter, as
  //     // long as the corresponding template file exists in src/templates.
  //     // If no template is set, it will fall back to the default `page`
  //     // template.
  //     //
  //     // Note that the template has to exist first, or else the build will fail.
  //     component: path.resolve(`./src/templates/${layout || 'page'}.tsx`),
  //     context: {
  //       // Data passed to context is available in page queries as GraphQL variables.
  //       slug
  //     }
  //   })
  // })

  const vimeoVideo = await graphql(`
    {
      allVimeoVideo(limit: 1000) {
        edges {
          node {
            fields {
              layout
              slug
            }
          }
        }
      }
    }
  `)

  if (vimeoVideo.errors) {
    console.error(vimeoVideo.errors)
    throw new Error(vimeoVideo.errors)
  }

  vimeoVideo.data.allVimeoVideo.edges.forEach(({ node }) => {
    const { slug, layout } = node.fields

    createPage({
      path: slug,
      // This will automatically resolve the template to a corresponding
      // `layout` frontmatter in the Markdown.
      //
      // Feel free to set any `layout` as you'd like in the frontmatter, as
      // long as the corresponding template file exists in src/templates.
      // If no template is set, it will fall back to the default `work`
      // template.
      //
      // Note that the template has to exist first, or else the build will fail.
      component: path.resolve(`./src/templates/${layout || 'work'}.tsx`),
      context: {
        // Data passed to context is available in page queries as GraphQL variables.
        slug
      }
    })
  })
}
