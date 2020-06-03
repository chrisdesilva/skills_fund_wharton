exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  createRedirect({
    fromPath: "https://wharton.netlify.app/*",
    toPath: "https://wharton.skills.fund/",
    isPermanent: true,
    force: true,
  })
  createRedirect({
    fromPath: "/go",
    toPath:
      "/?utm_source=school&utm_medium=printedskfbrochure&utm_campaign=studentbrochure",
  })
  createRedirect({ fromPath: "/accepted", toPath: "/" })
}
