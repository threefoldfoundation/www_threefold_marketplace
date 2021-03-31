<template>
  <section class="py-12 px-4 text-center">
    <div class="w-full max-w-2xl mx-auto">
      <h2 class="text-4xl leading-tight font-semibold font-heading">
        {{ cta.title }}
      </h2>
      <div
        v-html="cta.content"
        class="mt-6 mb-8 text-gray-700 leading-relaxed"
      ></div>
      <a
        v-if="cta.button"
        target="_blank"
        class="bg-blue-900 text-sm learn-button hover:bg-blue-800 text-gray-100 px-12 py-2 mr-5 rounded shadow rounded-full"
        :href="cta.link"
        >{{ cta.button }}</a
      >
    </div>
  </section>
</template>

<script>
export default {
  props: ["cta"],
};
</script>
