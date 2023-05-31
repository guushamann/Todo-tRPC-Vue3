<template>
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
</template>
<script setup lang="ts"></script>
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
[type='radio']:not(:checked) + label {
    display: none;
}
#themepicker:hover > label {
    display: inline-block;
}
</style>
<style>
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
