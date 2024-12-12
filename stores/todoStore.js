import { defineStore } from 'pinia';
import { onMounted } from 'vue';


export const useTodoStore = defineStore('todo', {

  state: () => ({

    columns: [],
    // columns: [
    //   {
    //     id: 1,
    //     key: 'todo',
    //     name: 'TODO',
    //     tasks: [
    //       {
    //         id: 'qwd123dw1',
    //         title: 'first task',
    //         description: 'test task',
    //         priority: 'high',
    //         responsible: 'Antony',
    //         status: 'todo'
    //       },
    //     ],
    //   },
    //   {
    //     id: 2,
    //     key: 'In progress',
    //     name: 'In progress',
    //     tasks: [],
    //   },
    //   {
    //     id: 3,
    //     key: 'In review',
    //     name: 'In review',
    //     tasks: [],
    //   },
    //   {
    //     id: 4,
    //     key: 'done',
    //     name: 'Done',
    //     tasks: [],
    //   },
    // ],
  }),
  actions: {
    initializeStore() {
        const savedData = localStorage.getItem('todoStore');
        if (savedData) {
          this.columns = JSON.parse(savedData);
        } else {
          this.columns = [
            {
              id: 1,
              key: 'todo',
              name: 'TODO',
              tasks: [
                {
                  id: 'qwd123dw1',
                  title: 'first task',
                  description: 'test task',
                  priority: 'high',
                  responsible: 'Antony',
                  status: 'todo',
                },
              ],
            },
            {
              id: 2,
              key: 'progress',
              name: 'In progress',
              tasks: [],
            },
            {
              id: 3,
              key: 'review',
              name: 'In review',
              tasks: [],
            },
            {
              id: 4,
              key: 'done',
              name: 'Done',
              tasks: [],
            },
          ];
          this.saveToLocalStorage();
        }
    },

    saveToLocalStorage() {
      localStorage.setItem('todoStore', JSON.stringify(this.columns));
    },

    addTask(columnId, task) {
      const column = this.columns.find(col => col.id === columnId);
      const newTask = {
        ...task,
        status: column.key
      }

      column.tasks.push(newTask);

      this.saveToLocalStorage();
    },
    editTask(columnId, editedTask) {
      const column = this.columns.find(col => col.id === columnId);

      if (column) {
        const taskIndex = column.tasks.findIndex(task => task.id === editedTask.id);
        column.tasks[taskIndex] = editedTask;
      }

      this.saveToLocalStorage();
    },
    moveTask(task, fromColumnId, toColumnId) {
      const fromColumn = this.columns.find(col => col.id === Number(fromColumnId));
      const toColumn = this.columns.find(col => col.id === Number(toColumnId));

      if (fromColumn && toColumn) {
        fromColumn.tasks = fromColumn.tasks.filter(t => t.id !== task.id);
        task.status = toColumn.key;
        toColumn.tasks.push(task);
      }

      this.saveToLocalStorage();
    },
  },
});