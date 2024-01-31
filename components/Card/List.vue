<template>
    <ul class="rounded-lg  gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pt-5">
        <CardItem v-for="item in items" :key="item.id" />
    </ul>
</template>

<script setup lang="ts">
const props = defineProps({
    items: {
        type: Array as PropType<{ id: string }[]>,
        default: [],
    },
});
</script>

<style lang="scss" scoped></style>