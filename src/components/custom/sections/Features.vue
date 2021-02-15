<template>
  <section class="py-12 px-4">
    <h2 class="text-4xl text-center mb-12 font-semibold font-heading">
      {{ main.title }}
    </h2>
    <div class="flex flex-wrap -mx-4 mb-6">
      <div
        v-for="feature in features"
        :key="feature.id"
        class="lg:w-1/2 px-4 mb-6 text-center"
      >
        <g-image
          class="w-10 h-10 mx-auto"
          v-if="feature.svg"
          :src="feature.svg.src"
          :alt="feature.svg"
        ></g-image>
        <h3 class="text-xl my-3 font-semibold font-heading">
          {{ feature.title }}
        </h3>
        <div
          v-html="feature.content"
          class="text-sm text-gray-700 leading-relaxed"
        ></div>
      </div>
    </div>
    <div class="text-center" v-if="main.btn">
      <g-link
        class="inline-block bg-blue-900 text-md learn-button hover:bg-blue-800 text-gray-100 px-8 py-2 mr-5 my-2 rounded shadow rounded-full"
        :to="main.link"
        >{{ main.btn }}</g-link
      >
      <div v-html="main.content" class="text-sm text-gray-700 mt-5"></div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["main", "features"],
};
</script>