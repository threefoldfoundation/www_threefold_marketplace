<template>
  <Layout :hideHeader="true" :disableScroll="true">
    <Header
      :title="$page.markdownPage.header_title"
      :image="$page.markdownPage.header_image"
      :altImg="$page.markdownPage.header_altImg"
      :excerpt="$page.markdownPage.header_excerpt"
      :button="$page.markdownPage.button"
      :link="$page.markdownPage.link"
    />

    <Comparison
      v-if="
        $page.markdownPage.comparisonSecs &&
        $page.markdownPage.comparisonSecs.length > 0
      "
      :main="$page.markdownPage.comparisonMain"
      :sections="$page.markdownPage.comparisonSecs"
    />

    <!-- <NewCard
      v-for="card in $page.markdownPage.cards"
      :key="card.id"
      :card="card"
    /> -->

    <Comparison
      v-if="
        $page.markdownPage.comparisonSecs &&
        $page.markdownPage.comparisonSecs.length > 0
      "
      :main="$page.markdownPage.comparisonMain2"
      :sections="$page.markdownPage.comparisonSecs2"
    />

    <!-- <SolutionsHeader
      v-if="$page.markdownPage.header"
      :header="$page.markdownPage.header"
    /> -->

    <ShowcaseProductsAbout
      :main="$page.markdownPage.productsMain"
      :products="$page.markdownPage.productData"
      v-if="
        $page.markdownPage.productData &&
        $page.markdownPage.productData.length > 0
      "
    />

    <!-- <NewCard 
      v-for="card in $page.markdownPage.cards2"
      :key="card.id"
      :card="card"
    /> -->

    <!-- <CallToAction 
      v-if="$page.markdownPage.cta" 
      :cta="$page.markdownPage.cta" 
    /> -->

    <!-- <logoShowcase
      v-if="$page.markdownPage.logos.length > 0"
      :logos="$page.markdownPage.logos"
    /> -->

    <!-- <InTheNews
      v-if="$page.markdownPage.inTheNews"
      :news="$page.markdownPage.inTheNews"
    /> -->

    <SignUp
      v-if="$page.markdownPage.signup"
      :signup="$page.markdownPage.signup"
    />

    <CallToAction
      class="mt-10"
      v-if="$page.markdownPage.cta2"
      :cta="$page.markdownPage.cta2"
    />

    <g-image
      v-if="$page.markdownPage.solution_image"
      :src="$page.markdownPage.solution_image.src"
    />
  </Layout>
</template>

<page-query>
  query {
    markdownPage(id: "home") {
        id
        path
        metaTitle
        metaDesc
        metaImg
        header_title
        header_image
        header_excerpt
        header_altImg
        button
        link
        solution_image
        header{
         title
         subtitle
         content
         btn1
         link1
         btn2
         link2
        }
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
        comparisonMain2{
          id
          title
          description
          button
          link
        }
        comparisonSecs2{
          id
        # img
          title
          content
        }
        productsMain{
          id
          title
          subtitle
          button
          link 
          button2
          link2
        #  image
        }
       productData{
         id
         title
         image
       }
        cards{
          id
          title
          image
          button
          link
          order
          content
        }
        cards2{
          id
          title
          image
          button
          link
          order
          content
        }
        cta{
          id
          title
          content
          button
          link
        }
        cta2{
          id
          title
          content
          button
          link
        }
        logos{
          id
          image
          url
        }
        inTheNews {
          id
          excerpt
          partners {
            path
            logo
          }
        }
        signup{
          id
          title
          button1
          link1
          button2
          link2
        }
    }  
  }

</page-query>

<script>
import Header from "~/components/marketing/sections/cta-sections/Header.vue";
import SolutionsHeader from "~/components/custom/sections/header/HeaderSection.vue";
import Comparison from "~/components/custom/sections/Comparison.vue";
import ShowcaseProductsAbout from "~/components/marketing/sections/cta-sections/ShowcaseProductsAbout.vue";
import NewCard from "~/components/marketing/sections/cta-sections/NewCard.vue";
import CallToAction from "~/components/custom/sections/CallToAction.vue";
import logoShowcase from "~/components/marketing/sections/cta-sections/logoShowcase.vue";
import InTheNews from "~/components/marketing/sections/logo-clouds/off_white_grid.vue";
import SignUp from "~/components/custom/sections/SignUp.vue";

export default {
  components: {
    Header,
    SolutionsHeader,
    Comparison,
    NewCard,
    ShowcaseProductsAbout,
    CallToAction,
    logoShowcase,
    InTheNews,
    SignUp,
  },
  computed: {
    getImg() {
      let image = "";
      if (process.isClient) {
        image = `${window.location.origin}${this.img}`;
      }
      return image;
    },
    img() {
      if (!this.$page.markdownPage.metaImg) return "";
      if (this.$page.markdownPage.metaImg.src)
        return this.$page.markdownPage.metaImg.src;
      return this.$page.markdownPage.metaImg;
    },
  },
  metaInfo() {
    return {
      title: "",
      titleTemplate: this.$page.markdownPage.metaTitle,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.markdownPage.metaDesc,
        },
        {
          key: "og:title",
          property: "og:title",
          content: this.$page.markdownPage.metaTitle,
        },
        {
          key: "og:description",
          property: "og:description",
          content: this.$page.markdownPage.metaDesc,
        },
        {
          key: "og:image",
          property: "og:image",
          content: this.getImg,
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: this.$page.markdownPage.metaDesc,
        },
        {
          key: "twitter:image",
          property: "twitter:image",
          content: this.getImg,
        },
        {
          key: "twitter:title",
          property: "twitter:title",
          content: this.$page.markdownPage.metaTitle,
        },
      ],
    };
  },
};
</script>