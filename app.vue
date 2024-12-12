<script setup>
import favicon from "@/assets/image/favicon.png";
import { useTodoStore } from '@/stores/todoStore';

useHead({
  title: 'Best todo list',
  link: [
    { rel: 'icon', type: 'image/x-icon', href: favicon }
  ]
})


const todoStore = useTodoStore();

onMounted(() => {
  todoStore.initializeStore();
});

</script>

<template>
  <section>
    <AppHeader />
    <AppBackground />
    <NuxtPage />
  </section>
</template>