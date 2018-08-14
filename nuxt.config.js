module.exports = {
    /*
  ** Headers of the page
  */
    head: {
        title: "SiteMinder Email API",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            {
                hid: "description",
                meta: "description",
                content: "SiteMinder Email API"
            }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "favicon.png" }]
    },
    /*
  ** Global CSS
  */
    css: [
        "~/assets/tailwind.css",
        "github-markdown-css/github-markdown.css",
        "~/assets/prism.css"
    ],

    modules: ["@nuxtjs/markdownit"],
    /*
  ** Add axios globally
  */
    build: {
        vendor: ["axios"]
    }
};
