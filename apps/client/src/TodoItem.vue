<template>
    <div
        class="flex content-start my-4 mx-40 bg-grey-200 border rounded-lg p-4 shadow-sm"
    >
        <div class="text-2xl">
            <button
                v-if="!props.hasCompleted"
                class="text-red-900 mr-2 px-2 rounded-lg border shadow-sm hover:shadow-lg"
                @click="$emit('delete')"
            >
                ✕
            </button>
            {{ props.title }}
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps(['title', 'hasCompleted'])
</script>
