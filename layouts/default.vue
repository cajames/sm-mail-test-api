<template>
  <div class="font-sans min-h-screen tracking-normal leading-normal py-8 container mx-auto markdown-body" ref="content">
    <nuxt/>
  </div>
</template>

<script>
import Prism from "prismjs";

export default {
  mounted() {
    this.highlightCode();
  },
  methods: {
    highlightCode() {
      this.$nextTick(() => {
        if (process.client) {
          const rendered = this.$refs.content;
          // Add language-markup class to all code blocks
          Array.from(rendered.querySelectorAll("code")).map(element => {
            if (element.className.indexOf("language-") < 0) {
              element.classList.add("language-markup");
            }
          });
          Prism.highlightAllUnder(rendered);
        }
      });
    }
  }
};
</script>

<style>
.markdown-body table {
  display: table;
}
</style>
