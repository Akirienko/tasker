<script setup>
import favicon from "@/assets/image/favicon.png";

useHead({
  title: 'Best todo list',
  link: [
    { rel: 'icon', type: 'image/x-icon', href: favicon }
  ]
})

</script>

<template>
  <NuxtPage />
</template>