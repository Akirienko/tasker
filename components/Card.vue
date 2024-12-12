<script setup>
const props = defineProps({
  task: Object,
  columnId: Number,
});

const editTaskModal = ref(false);
const currTask = ref();

const editTask = (task) => {
  currTask.value = task;

  editTaskModal.value = true;
}

function startDrag(event) {
  event.dataTransfer.setData('task', JSON.stringify(props.task));
  event.dataTransfer.setData('fromColumnId', props.columnId);
}
</script>

<template>
  <div
    class="max-w-sm px-3 py-6 bg-white border border-gray-200 rounded-lg shadow  relative"
    draggable="true"
    @dragstart="startDrag"
  >
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{{ task.title }}</h5>
    <span class="absolute top-2 right-2 opacity-50">{{ task.status }}</span>
    <p class="mb-3 font-normal text-gray-700 ">{{ task.description }}</p>
    <div class="flex items-center justify-between">
      <button @click="editTask(task)" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
        Edit
      </button>
      <div v-if="task.priority !== 'regular'"
           :class="{
             'bg-green-500 text-white': task.priority === 'medium',
             'bg-red-500 text-white': task.priority === 'high'
           }"
           class="px-3 py-1 rounded-lg text-sm font-medium"
      >
        {{ task.priority }}
      </div>
    </div>
  </div>

  <EditTask v-if="editTaskModal" :current-task="currTask" :column-id="columnId" @close-edit-modal="editTaskModal=false" />
</template>


