<template>
  <div class="py-10 mb-10">
    <div class="w-full text-center">
      <p v-if="main !== null" class="text-sm tracking-widest text-gray-700">
        {{ main.subtitle }}
      </p>
      <h1
        v-if="main !== null"
        class="text-4xl leading-tight font-semibold py-4 font-heading"
      >
        {{ main.title }}
      </h1>
    </div>

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-4">
      <div
        v-for="(product, idx) in products"
        :key="idx"
        class="p-2 sm:p-0 text-center cursor-pointer"
      >
        <div class="px-2 py-2">
          <g-image :src="img(product.image)" />
          <!-- <div class="font-bold text-xl mb-2">{{ product.title }}</div> -->
          <p v-html="product.content" class="text-gray-700 text-base"></p>
        </div>
      </div>
    </div>

    <div class="mt-8 w-full text-center" v-if="main.button || main.button2">
      <a
        v-if="main.link.includes('http')"
        target="_blank"
        :href="main.link"
        class="inline-block uppercase bg-blue-900 text-sm learn-button hover:bg-blue-800 text-gray-100 px-8 py-2 mr-5 my-2 rounded shadow rounded-full"
        >{{ main.button }}</a
      >
      <g-link
        v-else
        :to="main.link"
        class="inline-block uppercase bg-blue-900 text-sm learn-button hover:bg-blue-800 text-gray-100 px-8 py-2 mr-5 my-2 rounded shadow rounded-full"
        >{{ main.button }}</g-link
      >
      <a
        v-if="main.link2.includes('http')"
        target="_blank"
        :href="main.link2"
        class="inline-block uppercase bg-blue-900 text-sm learn-button hover:bg-blue-800 text-gray-100 px-8 py-2 mr-5 my-2 rounded shadow rounded-full"
        >{{ main.button2 }}</a
      >
      <g-link
        v-else
        :to="main.link2"
        class="inline-block uppercase bg-blue-900 text-sm learn-button hover:bg-blue-800 text-gray-100 px-8 py-2 mr-5 my-2 rounded shadow rounded-full"
        >{{ main.button2 }}</g-link
      >
    </div>
  </div>
</template>


<script>
export default {
  props: ["products", "main"],
  methods: {
    img(image) {
      if (!image) return "";
      if (image.src) return image.src;
      return image;
    },
  },
  mounted() {
    console.log(this.main);
  },
};
</script>

<style scoped>
.bannerFondo {
  height: 400px;
}

img {
  cursor: default;
}
</style>
