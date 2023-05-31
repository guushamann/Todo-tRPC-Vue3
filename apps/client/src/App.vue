<template>
    <div class="container flex flex-col text-gray-500">
        <div id="themepicker">
            <input type="radio" id="yellow" name="colors" checked />
            <label for="yellow" />
            <input type="radio" id="orange" name="colors" />
            <label for="orange" />
            <input type="radio" id="pink" name="colors" />
            <label for="pink" />
            <input type="radio" id="red" name="colors" />
            <label for="red" />
            <input type="radio" id="purple" name="colors" />
            <label for="purple" />
            <input type="radio" id="blue" name="colors" />
            <label for="blue" />
            <input type="radio" id="green" name="colors" />
            <label for="green" />
        </div>
        <div class="flex justify-center">
            <div class="text-6xl title">Todos</div>
        </div>

        <div class="flex justify-center mt-4">
            <input
                @keyup.enter="addTodo()"
                type="text"
                v-model="todo"
                placeholder="What do you want to do?"
                class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 py-2 px-4 block w-full leading-5 appearance-none placeholder-gray-500 text-gray-900 placeholder-opacity-25"
            />
        </div>
        <div class="tabs-container flex flex-col justify-center mt-4 text-xl">
            <div class="tabs gap-4 flex content-start">
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
    createTodo.mutate({ title: todo.value, completed: false })
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
[type='radio'] {
    display: none;
}
label {
    display: inline-block;
    width: 30px;
    height: 30px;
    margin: 10px;
    border-radius: 50%;
    box-shadow: 0 0 0 2px #f9f9f9, 0 0 0 3px #ddd;
    cursor: pointer;
}
[type='radio']:checked + label {
    box-shadow: 0 0 0 2px #f9f9f9, 0 0 0 3px var(--colorMain);
}
#yellow + label {
    background: #ffd94e;
}
#orange + label {
    background: #f2921b;
}
#pink + label {
    background: #ffa1ad;
}
#red + label {
    background: #a4303f;
}
#purple + label {
    background: #8c6796;
}
#blue + label {
    background: #4ebcff;
}
#green + label {
    background: #afc97e;
}
body:has(#yellow:checked),
#yellow:checked + label {
    --colorMain: #ffd94e;
    --colorLight: #ffe37e;
    --colorAccent: #ffedae;
}
body:has(#orange:checked),
#orange:checked + label {
    --colorMain: #f2921b;
    --colorLight: #f5af59;
    --colorAccent: #f9cd97;
}
body:has(#pink:checked),
#pink:checked + label {
    --colorMain: #ffa1ad;
    --colorLight: #ffc3ca;
    --colorAccent: #ffdce1;
}
body:has(#red:checked),
#red:checked + label {
    --colorMain: #a4303f;
    --colorLight: #c57b84;
    --colorAccent: #d5a0a7;
}
body:has(#purple:checked),
#purple:checked + label {
    --colorMain: #8c6796;
    --colorLight: #ab90b2;
    --colorAccent: #d5c7d8;
}
body:has(#blue:checked),
#blue:checked + label {
    --colorMain: #4ebcff;
    --colorLight: #93daff;
    --colorAccent: #ceecff;
}
body:has(#green:checked),
#green:checked + label {
    --colorMain: #afc97e;
    --colorLight: #c4d7a1;
    --colorAccent: #d3e1b8;
}
</style>
