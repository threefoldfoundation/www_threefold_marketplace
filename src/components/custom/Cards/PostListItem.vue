<template>
  <div
    class="flex flex-post px-0 sm:px-4 mb-8"
    v-bind:class="{ 'no-border': !border }"
  >
    <g-link :to="path" class="post-card-image-link">
      <g-image
        :src="img(record.image)"
        :alt="record.title"
        class="post-card-image"
      ></g-image>
    </g-link>
  </div>
</template>

<script>
export default {
  props: {
    record: {},
    showtags: false,
    pathPrefix: "",
    border: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    path() {
      if (this.pathPrefix) return this.pathPrefix + "/" + this.record.id;
      return this.record.path;
    },

    memberships() {
      var res = [];
      var memberships = this.record.memberships;
      if (!memberships) {
        return [];
      }
      memberships.forEach(function (membership) {
        if (["foundation", "tech", "marketplace"].includes(membership.title)) {
          res.push(membership);
        }
      });
      return res;
    },
  },
  methods: {
    displaytags() {
      return this.showtags;
    },
    img(image) {
      if (!image) return "";
      if (image.src) return image.src;
      return image;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
.post-card-excerpt {
  font-family: "Roboto", sans-serif;
  line-height: 1.2;
}

.post-card-image {
  max-width: 100%;
  /* height: auto; */
}
</style>
