<template>
  <div class="home" v-if="data">
    <h1>{{ data.title }}</h1>
  </div>
</template>

<script setup>

const query = groq`*[_type == "page"] {
  ...,
  sections[] {
    _type,
    _type == "heroBlock" => {
      heroBlock {
        ...
      }
    },
    _type == "textBlock" => {
      textBlock {
        ...
      }
    },
    _type == "ctaBlock" => {
      ctaBlock {
        ...
      }
    },
    _type == "imageCarousel" => {
      ...
    }
  }
}[0]`;

const { data } = await useSanityQuery(query);

</script>

<style scoped>

.home {
  display: flex;
  justify-content: center;
}

</style>