<template>
    <article class="rounded-md md:w-[327px] max-sm:h-[232px] max-sm:w-[327px] xl:w-[640px] xl:h-[360px] bg-blue-500 p-6 relative">
        <div class=" xl:mr-64">
            <h1 class="text-white font-semibold xl:text-4xl text-balance mb-4">{{ props.title }}</h1>
            <p class="text-white text-balance ">{{ props.description }}</p>
        </div>
        <Button class="mt-5">Rental Car</Button>
        <NuxtImg :src="`/images/cars/${props.image}`" class="absolute -bottom-5 right-16 xl:right-24 w-[196px] xl:w-[406px]" />
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