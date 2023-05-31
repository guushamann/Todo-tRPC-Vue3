<template>
    <div
        class="text-shade-500 border-shade-500 bg-shade-200 todoitem flex justify-between content-start border shadow my-4 pl-4 py-4"
    >
        <div class="text-3xl">{{ props.title }}</div>
        <button
            v-if="!props.hasCompleted"
            class="text-shade-500 border-shade-500 mr-2 px-2 cross text-3xl"
            @click="$emit('delete')"
        >
            ✕
        </button>
    </div>
</template>
<script setup lang="ts">
const props = defineProps(['title', 'hasCompleted'])
</script>
<style>
.shadow {
    box-shadow: 2px 2px 5px 1px var(--colorMain);
}
</style>
