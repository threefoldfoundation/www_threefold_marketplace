<template>
  <section class="py-8 px-4">
    <div class="flex flex-wrap items-center -mx-4 bg-gray-200 rounded shadow">
      <div class="w-full lg:w-4/6 px-4 mb-2 lg:mb-0 text-center lg:text-left">
        <h2 class="text-xl font-semibold font-heading">
          {{ signup.title }}
        </h2>
      </div>
      <div class="w-full lg:w-2/6 px-4 text-center my-4 lg:text-right">
        <g-link
          class="bg-blue-900 text-sm learn-button hover:bg-blue-800 text-gray-100 px-12 py-2 mr-5 rounded shadow rounded-full"
          :to="signup.link1"
          >{{ signup.button1 }}</g-link
        ><g-link
          class="text-gray-900 bg-transparent hover:underline"
          :to="signup.link2"
          >{{ signup.button2 }}</g-link
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["signup"],
};
</script>