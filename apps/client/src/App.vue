<template>
    <div class="flex flex-col text-gray-500">
        <div class="flex justify-center"><div class="text-6xl">Todos</div></div>
        <div class="flex justify-center mt-4">
            <input
                @keyup.enter="addTodo()"
                type="text"
                v-model="todo"
                placeholder="What do you want to do?"
                class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full leading-5 appearance-none placeholder-gray-500 text-gray-900 placeholder-opacity-25"
            />
        </div>
        <div
            class="tabs-container flex flex-col justify-center mt-4 border-gray-300 border rounded-lg p-4"
        >
            <div class="tabs mx-40 gap-4 flex content-start">
                <div
                    class="tab"
                    :class="{ active: filter === false }"
                    @click="filter = false"
                    data-tab="tab-2"
                >
                    Pending
                </div>
                <div
                    class="tab"
                    :class="{ active: filter }"
                    @click="filter = true"
                    data-tab="tab-3"
                >
                    Completed
                </div>
                <div
                    class="tab"
                    :class="{ active: filter === undefined }"
                    @click="filter = undefined"
                    data-tab="tab-1"
                >
                    All
                </div>
            </div>
            <TodoItem
                v-for="(todo, index) in todos"
                :hasCompleted="todo.completed"
                @delete="deleteTodo.mutate(todo.id)"
                :title="todo.title"
                :key="index"
            />
        </div>
    </div>

    <!-- <button @click="refetch()">test</button>
    <input type="text" v-model="name" placeholder="name" />
    <h1>{{ message }}</h1> -->
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTodos, useCreateTodo, useDeleteTodo } from './Queries'
import TodoItem from './TodoItem.vue'
const createTodo = useCreateTodo()
const deleteTodo = useDeleteTodo()

const todo = ref('')
const filter = ref<boolean | undefined>(false)
const { data: todos } = useTodos(filter)
const addTodo = () => {
    createTodo.mutate(todo.value)
    todo.value = ''
}
</script>

<style>
.tabs-container .tabs .tab {
    &.active {
        @apply font-bold;
        @apply underline;
    }
    &:hover {
        @apply underline;
        cursor: pointer;
    }
}
/* .tabs-container .tab-content {
    @apply hidden;
    &.active {
        @apply block;
    }
} */
</style>
