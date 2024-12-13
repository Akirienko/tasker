<script setup>
import { useTodoStore } from '@/stores/todoStore';

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