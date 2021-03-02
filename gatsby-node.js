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
        allShopifyCollection (sort: { fields: [title] }) {
          edges {
            node {
              handle
              shopifyId
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
    const collections = result.data.allShopifyCollection.edges || []
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

    collections.forEach(({ node }) => {
      const path = `/shop/collections/${node.handle}`;
      createPage({
        path,
        component: require.resolve(`./src/templates/collection.js`),
        context: {
          collectionId: node.shopifyId,
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
  