<template>
  <section class="mt-24 mb-20 py-6 px-4 text-center"> 
    <h2
      v-if="main.title"
      class="text-4xl mb-2 leading-tight font-semibold font-heading"
    >
      {{ main.title }}
    </h2>
    <p v-if="main.description" class="text-gray-600">{{ main.description }}</p>
    <div class="flex flex-wrap items-center mx-8 mt-12 mb-10">
      <div
        class="lg:w-1/3 px-6 mb-2"
        v-for="(section, index) in sections"
        :key="index"
      >
        <g-link
          v-if="section.app_id"
          :to="appPath(section.app_id)"
          class="post-card-image-link"
        >
          <g-image
            class="mx-auto mb-8"
            :src="img(section.img)"
            :alt="section.title"
          />
        </g-link>
        <h3 class="text-2xl mb-4 font-semibold font-heading">
          <!-- <span
            class="inline-flex items-center justify-center h-12 w-12 mr-2 border rounded-full"
            >{{ index + 1 }}</span
          > -->
          <span>{{ section.title }}</span>
        </h3>
        <div class="text-gray-700" v-html="section.content"></div>
      </div>
    </div>
    <div>
      <g-link
        v-if="main.button"
        class="bg-blue-900 text-sm learn-button hover:bg-blue-800 text-gray-100 px-12 py-2 mr-5 rounded shadow rounded-full"
        :to="main.link"
        >{{ main.button }}</g-link
      >
    </div>
  </section>
</template>

<script>
export default {
  props: ["main", "sections"],
  methods: {
    img(image) {
      if (!image) return "";
      if (image.src) return image.src;
      return image;
    },
    appPath(id) {
      return "apps" + "/" + id;
    },
  },
};
</script>