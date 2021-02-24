<template>
  <Layout :hideHeader="true" :disableScroll="true">
    <TagFilterHeader
      :tags="appsTag"
      selected="all"
      v-if="$page.topics.edges.length > 1"
    />

    <ShowcaseProducts
      :main="$page.markdownPage.productsMain"
      :products="$page.markdownPage.apps"
      v-if="$page.markdownPage.apps && $page.markdownPage.apps.length > 0"
    />

    <CallToAction v-if="$page.markdownPage.cta" :cta="$page.markdownPage.cta" />
  </Layout>
</template>

<page-query>
  query {
    markdownPage(id: "applications") {
        id
        path
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
        apps{
         id
         title
         image
       }
    }
  topics: allAppsTag{
    edges{
      node{
        id
        title
        path        
      }
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
      title: "Apps",
    };
  },
  computed: {
    appsTag() {
      var res = [{ title: "All", path: "/apps" }];
      this.$page.topics.edges.forEach((edge) =>
        res.push({ title: edge.node.title, path: edge.node.path })
      );
      return res;
    },
  },
};
</script>