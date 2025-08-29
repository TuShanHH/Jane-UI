<script setup>
const props = defineProps({
    modelValue: String,
    placeholder: String,
});
const emit = defineEmits(["update"]);

const onInput = (e) => {
    emit("update", e.target.value);
};
</script>
<template>
    <input
        class="wl-input"
        :value="props.modelValue"
        :placeholder="props.placeholder"
        @input="onInput"
    />
</template>

<style scoped>
.wl-input {
    width: 14vw;
    height: 2vh;
    border: 1px solid #8d8d8d;
    border-radius: 6px;
}

.wl-input:focus {
    outline: none;
    border: 2px solid #5850ec;
    border-radius: 6px;
}
</style>
