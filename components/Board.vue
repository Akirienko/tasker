<script setup>
import { useTodoStore } from '@/stores/todoStore';

const todoStore = useTodoStore();

</script>

<template>
  <div class="w-screen min-h-screen">
    <div class="overflow-hidden w-fit">
      <div class="flex gap-4 p-4 w-full items-start flex-nowrap overflow-x-scroll">
        <Column
          v-for="column in todoStore.columns"
          :key="column.id"
          :column="column"
        />
      </div>
    </div>
  </div>
</template>

