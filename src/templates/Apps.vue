<template>
  <Layout :hideHeader="true" :disableScroll="true">
    <div class="container sm:pxi-0 mx-auto min-h-screen overflow-x-hidden">
      <section
        class="post-content container mx-auto relative font-serif text-gray-700"
      >
        <div
          class="post-content-text text-xl"
          v-html="$page.apps.content"
        ></div>
      </section>
    </div>
  </Layout>
</template>

<page-query>
  query($id: ID!) {
    apps(id: $id) {
        id
        tag
        content
      }
    }
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.apps.name,
    };
  },
};
</script>
