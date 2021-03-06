const path = require("path")

exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    // Transform the new node here and create a new node or
    // create a new node field.

    if(node.internal.type == "MarkdownRemark"){
        const slug = path.basename(node.fileAbsolutePath);

        createNodeField({
            node,
            name: "slug",
            value: slug
        })
    }


  }