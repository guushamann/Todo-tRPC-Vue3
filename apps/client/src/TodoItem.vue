<template>
    <div
        class="todoitem flex justify-between content-start border shadow-lg my-4 pl-4 py-4"
    >
        <div class="text-3xl">{{ props.title }}</div>
        <button
            v-if="!props.hasCompleted"
            class="mr-2 px-2 cross text-3xl"
            @click="$emit('delete')"
        >
            ✕
        </button>
    </div>
</template>
<script setup lang="ts">
const props = defineProps(['title', 'hasCompleted'])
</script>
