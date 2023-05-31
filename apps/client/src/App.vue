<template>
    <div
        id="todoApp"
        :data-theme="themeColor"
        class="container flex flex-col text-shade-500"
    >
        <div class="flex align-right"></div>
        <div class="flex justify-center mb-4">
            <div class="text-6xl title grow text-shade-500">Todos</div>
            <ThemePicker class="text-6xl" v-model="themeColor"></ThemePicker>
        </div>
        <div>
            <div>
                <input
                    required
                    id="todoInput"
                    @keyup.enter="addTodo()"
                    type="text"
                    v-model="todo"
                    placeholder="What do you want to do?"
                    class="placeholder:text-shade-300 border-shade-500 bg-shade-100 focus:outline-none focus:shadow-outline border py-2 px-4 block w-full leading-5 appearance-none placeholder-gray-500 text-gray-900 placeholder-opacity-25"
                />
                <div class="formelement mt-4 gap-4 flex">
                    <button
                        class="bg-shade-500 text-shade-100 rounded-full px-4 tag"
                    >
                        Private
                    </button>
                    <button
                        class="bg-shade-500 text-shade-100 rounded-full px-4 tag"
                    >
                        Sport
                    </button>
                    <button
                        class="bg-shade-500 text-shade-100 rounded-full px-4 tag"
                    >
                        Work
                    </button>
                    <button
                        class="bg-shade-500 text-shade-100 rounded-full px-4 tag"
                    >
                        Grocery
                    </button>
                </div>

                <div class="formelement justify-center mt-4">
                    <textarea
                        placeholder="Enter additional info here..."
                        rows="5"
                        cols="33"
                        class="placeholder:text-shade-300 border-shade-500 bg-shade-100 focus:outline-none focus:shadow-outline border py-2 px-4 block w-full leading-5 appearance-none text-gray-900 placeholder-opacity-25"
                    ></textarea>
                </div>
            </div>
        </div>

        <div class="tabs-container flex flex-col justify-center mt-4 text-xl">
            <div class="tabs gap-4 flex content-start">
                <div
                    class="tab text-shade-500"
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
import ThemePicker from './ThemePicker.vue'
const createTodo = useCreateTodo()
const deleteTodo = useDeleteTodo()

const todo = ref('')
const themeColor = ref('wedgewood')
const filter = ref<boolean | undefined>(false)
const { data: todos } = useTodos(filter)
const addTodo = () => {
    createTodo.mutate({ title: todo.value, completed: false })
    todo.value = ''
}
</script>

<style>
#todoInput:required:invalid ~ .formelement {
    display: none;
}
#todoInput:hover > .formelement {
    display: flex;
}
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
</style>
