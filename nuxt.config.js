module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "starter",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", meta: "description", content: "SM Test Mail API" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "favicon.ico" }]
  },
  /*
  ** Global CSS
  */
  css: ["~/assets/tailwind.css", "~/assets/prism.css"],

  modules: ["@nuxtjs/markdownit"],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ["axios"]
  }
};
