<script setup>
import { useTodoStore } from '@/stores/todoStore';
import { generateRandomId } from "@/functions/index";

const props = defineProps({
  column: {
    type: Object,
    default: [],
  }
});

const todoStore = useTodoStore();
const taskModal = ref(false);
const hoveredColumnId = ref(0);

function handleDragOver(event, columnId) {
  event.preventDefault();

  if (columnId === hoveredColumnId.value) {
    return;
  }

  hoveredColumnId.value = columnId;

}

function handleDrop(event) {
  const taskData = event.dataTransfer.getData('task');
  const fromColumnId = event.dataTransfer.getData('fromColumnId');

  let task = JSON.parse(taskData);

  todoStore.moveTask(task, fromColumnId, props.column.id);

  hoveredColumnId.value = '';
}

function handleDragLeave(event, columnId) {
  const rect = event.currentTarget.getBoundingClientRect();

  const isOutside = (
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom
  );

  if (isOutside) {
    hoveredColumnId.value = '';
  }
}

</script>

<template>
  <div
    class="bg-[#e9f1ff] rounded-lg shadow-md p-4 w-80"
    @dragover="handleDragOver($event, column.id)"
    @drop="handleDrop"
    @dragleave="handleDragLeave($event, column.id)"
  >
    <h2 class="font-bold mb-4">{{ column.name }}</h2>
    <div class="space-y-2">
      <Card
        v-for="task in column.tasks"
        :key="task"
        :task="task"
        :columnId="column.id"

      />
      <div
        v-if="hoveredColumnId === column.id"
        class="h-12 bg-blue-100 border-2 border-dashed border-blue-400 rounded"
      ></div>
    </div>
    <button
      class="mt-5 bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
      @click="taskModal = true"
    >
      Add a task
    </button>
  </div>


  <AddTask v-if="taskModal" :columnId="column.id" @close-addtask-modal="taskModal=false" />
</template>


