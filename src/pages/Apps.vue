<template>
  <Layout :hideHeader="true" :disableScroll="true">
    <!-- <TagFilterHeader
      :tags="memberships"
      selected="all"
      v-if="$page.memberships.edges.length > 1"
    /> -->
    <Header
      :title="$page.markdownPage.header_title"
      :image="$page.markdownPage.header_image"
      :altImg="$page.markdownPage.header_altImg"
      :excerpt="$page.markdownPage.header_excerpt"
      :button="$page.markdownPage.button"
      :link="$page.markdownPage.link"
    />

    <ShowcaseProducts
      :main="$page.markdownPage.productsMain"
      :products="$page.markdownPage.productData"
      v-if="
        $page.markdownPage.productData &&
        $page.markdownPage.productData.length > 0
      "
    />

    <CallToAction v-if="$page.markdownPage.cta" :cta="$page.markdownPage.cta" />
  </Layout>
</template>

<page-query>
  query {
    markdownPage(id: "applications") {
        id
        path
        header_title
        header_image
        header_excerpt
        header_altImg
        button
        link
        comparisonMain{
          id
          title
          description
          button
          link
        }
        comparisonSecs{
          id
          app_id
          img
          title
          content
        }
        cta{
          id
          title
          content
          button
          link
        }
        productsMain{
          id
          title
          subtitle
          #image
        }
        productData{
         id
         title
         image
       }
    }
}

</page-query>

<script>
import CallToAction from "~/components/custom/sections/CallToAction.vue";
import ShowcaseProducts from "~/components/marketing/sections/cta-sections/ShowcaseProducts.vue";
import TagFilterHeader from "~/components/custom/TagFilterHeader.vue";

export default {
  components: {
    CallToAction,
    ShowcaseProducts,
    TagFilterHeader,
  },
  metaInfo() {
    return {
      title: this.$page.markdownPage.title,
    };
  },
  // mounted() {
  //   console.log(this.$page.markdownPage.apps);
  // },
};
</script>