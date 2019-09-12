import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = ({ src }) => {
  const data = useStaticQuery(
    graphql`
      query allTheImagesQuery {
        allImageSharp {
          edges {
            node {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
    `
  )

  const TheImageYouWant = data.allImageSharp.edges
    .filter(edge => edge.node.fluid.originalName === src)
    .map(myImage => <Img fluid={myImage.node.fluid} key={myImage.node.fluid} />)

  return <>{TheImageYouWant}</>
}

Image.propTypes = {
  src: PropTypes.string,
}

Image.defaultProps = {
  src: "",
}

export default Image
