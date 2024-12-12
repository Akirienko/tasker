<script setup>
const emit = defineEmits(['close-modal']);
const props = defineProps(['customClass']);

function handleBackgroundClick() {
  emit('close-modal');
}
</script>

<template>
  <div class="fixed inset-0 z-20 flex justify-center items-center" >
    <div class="bg-black opacity-30 w-full h-full absolute" @click="handleBackgroundClick"></div>
    <div
      class="bg-white rounded-lg p-4 max-h-full overflow-auto text-black z-10 scroll-bar min-w-80 lg:min-w-[420px] relative"
      :class="customClass"
      >

      <slot name="content"></slot>

    </div>
  </div>
</template>

<style scoped>

.scroll-bar::-webkit-scrollbar {
  display: none;
}

.scroll-bar {
  scrollbar-width: none;
}
</style>
