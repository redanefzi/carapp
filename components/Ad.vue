<template>
    <article class="rounded-md w-[640px] h-[360px] bg-blue-500 p-6 relative">
        <h1 class="text-white font-semibold text-4xl break-words mb-4">{{ props.title }}</h1>
        <p class="text-white">{{ props.description }}</p>
        <Button class="mt-5">Rental Car</Button>
        <NuxtImg :src="`/images/cars/${props.image}`" width="406px" class="absolute -bottom-5 right-24" />
    </article>
</template>

<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});
</script>

<style lang="scss" scoped></style>