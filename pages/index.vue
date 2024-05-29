<template>
  <div class="home" v-if="data">
    <h1>{{ data.title }}</h1>
  </div>
</template>

<script setup>

import { client } from "@/utils/sanity/client";

// DATA
const data = ref(null);
const getContent = async () => {

  const CONTENT_QUERY = `*[_type == "page"] {
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
  }[0]
  `
  data.value = await client.fetch(CONTENT_QUERY);
  return content;
}

onMounted(() => { getContent(); })

</script>

<style scoped>

.home {
  display: flex;
  justify-content: center;
}

</style>