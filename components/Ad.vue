<template>
    <article class="rounded-md ms:w-[327px] ms:h-[232px] md:w-[327px] md:h-[232px] xl:w-[640px] xl:h-[360px] bg-blue-500 p-6 relative">
        <div class=" mr-64">
            <h1 class="text-white font-semibold text-4xl text-balance mb-4">{{ props.title }}</h1>
            <p class="text-white text-balance">{{ props.description }}</p>
        </div>
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