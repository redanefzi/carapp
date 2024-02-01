<template>
    <ul class="rounded-lg  gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 pt-5">
        <CardItem v-for="item in items" :key="item.id" :car="item" />
    </ul>
</template>

<script setup lang="ts">
import type { Car } from '~/types';
defineProps({
    items: {
        type: Array as PropType<Car[]>,
        default: [],
    },
});
</script>

<style lang="scss" scoped></style>