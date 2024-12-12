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

function handleDrop(event) {
  const taskData = event.dataTransfer.getData('task');
  const fromColumnId = event.dataTransfer.getData('fromColumnId');

  let task = JSON.parse(taskData);
  console.log('event.dataTransfer.getData', event.dataTransfer.getData);

  console.log('col.task', task);
  console.log('col.fromColumnId', fromColumnId);
  console.log('col.props.column.id', props.column.id);



  todoStore.moveTask(task, fromColumnId, props.column.id);
}
</script>

<template>
  <div
    class="bg-[#e9f1ff] rounded-lg shadow-md p-4 w-80"
    @dragover.prevent
    @drop="handleDrop"
  >
    <h2 class="font-bold mb-4">{{ column.name }}</h2>
    <div class="space-y-2">
      <Card
        v-for="task in column.tasks"
        :key="task"
        :task="task"
        :columnId="column.id"
      />
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


