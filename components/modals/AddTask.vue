<script setup>
import { useTodoStore } from '@/stores/todoStore';
import { generateRandomId } from "@/functions/index";


const props = defineProps({
  columnId: Number
});

const emit = defineEmits(['close-addtask-modal']);

function handleCloseModal() {
  emit('close-addtask-modal');
}

const todoStore = useTodoStore();
const priority = ref('regular')
const newTask = ref();
const taskName = ref();
const taskDescription = ref();


function setPriority(value) {
  priority.value = value;
}

const addTask = () =>{

  if (!taskName.value) {
    alert("Please fill task name");
    return;
  }

  const newTask = {
    id: generateRandomId(7),
    title: taskName.value,
    description: taskDescription.value,
    priority: priority.value,
  };

  todoStore.addTask(props.columnId, newTask);

  taskName.value = '';
  taskDescription.value = '';
  priority.value = 'regular';

  handleCloseModal();

}
</script>

<template>
  <ModalComponent>
    <template v-slot:content>
      <div class="absolute right-2 top-2 cursor-pointer z-10" @click="handleCloseModal">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 24 24">
          <path fill="#979597" d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>
        </svg>
      </div>
      <h2 class="text-xl text-center mb-5 font-bold"> Let's add a new task!</h2>

      <div class="mb-4">
        <label for="taskName" class="block text-gray-700 font-medium mb-1">
          Task Name
        </label>
        <input
          id="taskName"
          v-model="taskName"
          type="text"
          placeholder="Enter task name"
          class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      <div class="mb-4">
        <label for="taskDescription" class="block text-gray-700 font-medium mb-1">
          Task Description
        </label>
        <textarea
          id="taskDescription"
          v-model="taskDescription"
          placeholder="Enter task description"
          class="w-full border min-h-[120px] border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300 resize-none"
        ></textarea>
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 font-medium mb-1">Priority</label>
        <div class="flex gap-4">
          <button
            :class="{
              'bg-blue-500 text-white': priority === 'regular',
              'bg-gray-200 text-gray-700': priority !== 'regular'
            }"
            class="py-2 px-4 rounded-lg border"
            @click="setPriority('regular')"
          >
            Regular
          </button>
          <button
            :class="{
              'bg-green-500 text-white': priority === 'medium',
              'bg-gray-200 text-gray-700': priority !== 'medium'
            }"
            class="py-2 px-4 rounded-lg border"
            @click="setPriority('medium')"
          >
            Medium
          </button>
          <button
            :class="{
              'bg-red-500 text-white': priority === 'high',
              'bg-gray-200 text-gray-700': priority !== 'high'
            }"
            class="py-2 px-4 rounded-lg border"
            @click="setPriority('high')"
          >
            High
          </button>
        </div>
      </div>

      <div class="flex justify-end mt-7">
        <button
          @click="addTask"
          class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg"
        >
          Add Task
        </button>
      </div>
    </template>
  </ModalComponent>
</template>

<style lang="scss" scoped>

</style>