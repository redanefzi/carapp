<template>
    <div class="flex">
        <img v-for="i in Array.from({ length: props.value })" src="/images/icons/star.svg" alt="">
        <img v-for="i in Array.from({ length: 5 - props.value })" src="/images/icons/empty_star.svg" alt="">
        <p class="ml-2">440+ Reviewer</p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    value: {
        type: Number,
        required: true,
    },
});
</script>

<style lang="scss" scoped></style>