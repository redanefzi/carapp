<template>
    <div class="flex flex-col">
        <article class="rounded-md w-[492px] h-[360px] bg-blue-500 p-6 relative">
            <h1 class="text-white font-semibold text-4xl break-words mb-4">{{ props.title }}</h1>
            <p class="text-white">{{ props.description }}</p>
            <NuxtImg :src="`/images/cars/${props.image}`" width="406px"
                class="absolute -bottom-16 right-12 transform -scale-x-100" />
        </article>
        <div class="flex justify-between mt-6">
            <div class="p-[6px] w-[148px] h-[124px] border-primary rounded-md border-2 bg-[url('/images/icons/bg.svg')]">
                <div class="bg-primary px-3 flex h-full">
                    <NuxtImg src="/images/cars/ad2.png" width="406px" class="m-auto transform -scale-x-100" />
                </div>
                <!-- <NuxtImg src="/images/cars/int1.png" width="148px" height="124px" alt="Image 1" class="rounded-md" /> -->
            </div>
            <NuxtImg src="/images/cars/int1.png" width="148px" height="124px" alt="Image 2" class="rounded-md" />
            <NuxtImg src="/images/cars/int2.png" width="148px" height="124px" alt="Image 3" class="rounded-md" />
        </div>
    </div>
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

<style scoped></style>