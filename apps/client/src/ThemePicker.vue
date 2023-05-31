<template>
    <div id="themepicker">
        <input
            type="radio"
            id="red"
            value="apple-blossom"
            @input="
                $emit(
                    'update:modelValue',
                    ($event.target as HTMLInputElement).value
                )
            "
            name="colors"
        />
        <label for="red" />
        <input
            type="radio"
            id="purple"
            value="cold-purple"
            @input="
                $emit(
                    'update:modelValue',
                    ($event.target as HTMLInputElement).value
                )
            "
            name="colors"
        />
        <label for="purple" />
        <input
            checked
            type="radio"
            id="blue"
            name="colors"
            value="wedgewood"
            @input="
                $emit(
                    'update:modelValue',
                    ($event.target as HTMLInputElement).value
                )
            "
        />
        <label for="blue" />
    </div>
</template>
<script setup lang="ts">
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>
<style scoped>
[type='radio'] {
    display: none;
}
label {
    display: inline-block;
    width: 30px;
    height: 30px;
    margin: 10px;
    border-radius: 50%;

    cursor: pointer;
}
[type='radio']:checked + label {
    border-width: 2px;
    border-color: var(--shade-100);
}

#red + label {
    background: #a4303f;
}
#purple + label {
    background: #786c8b;
}
#blue + label {
    background: #438e96;
}
#green + label {
    background: #afc97e;
}
[type='radio']:not(:checked) + label {
    display: none;
}
#themepicker:hover > label {
    display: inline-block;
}
</style>
