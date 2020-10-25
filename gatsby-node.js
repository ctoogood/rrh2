//  Code to generate pages from posts fetched from Sanity
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    // Fetch the data
    const result = await graphql(`
      {
        allShopifyProduct {
          edges {
            node {
              shopifyId
              handle
            }
          }
        }  
        allSanityPost {
          edges {
            node {
              slug {
                current
              }
            }
          }
        }
      }
    `)
    if (result.errors) {
      throw result.errors
    }
    // Get all the posts in an array
    const products = result.data.allShopifyProduct.edges || []
    const posts = result.data.allSanityPost.edges || []
    const postsPerPage = 9
    const numPages = Math.ceil(posts.length / postsPerPage)
  
    products.forEach(({ node }) => {
      const path = `/shop/${node.handle}`;
      createPage({
        path,
        component: require.resolve(`./src/templates/productDetail.js`),
        context: {
          productId: node.shopifyId,
        },
      });
    });
  
    posts.forEach((edge, index) => {
      const path = `/blog/${edge.node.slug.current}`
      createPage({
        path,
        component: require.resolve("./src/templates/post.js"),
        context: { slug: edge.node.slug.current },
      })
    })
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog` : `/blog/${i + 1}`,
        component: require.resolve("./src/templates/blogList.js"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })
  }
  
//   exports.onCreateWebpackConfig = ({ stage, actions }) => {
//     if (stage.startsWith("develop")) {
//       actions.setWebpackConfig({
//         resolve: {
//           alias: {
//             "react-dom": "@hot-loader/react-dom",
//           },
//         },
//       })
//     }
//   }
  