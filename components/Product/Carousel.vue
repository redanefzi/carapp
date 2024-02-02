<template>
    <div class="flex flex-col w-[492px] max-sm:w-[327px]">
        <article class="rounded-md h-[360px] bg-blue-500 p-6 relative max-sm:h-[232px]">
            <h1 class="text-white font-semibold text-lg xl:text-4xl break-words mb-4">{{ props.title }}</h1>
            <p class="text-white">{{ props.description }}</p>
            <NuxtImg :src="`/images/cars/${props.image}`" width="406px"
                class="absolute -bottom-16 right-12 transform -scale-x-100 max-sm:w-[190px] max-sm:-bottom-7 max-sm:right-16" />
        </article>
        <div class="flex justify-between mt-6">
            <div
                class="p-[6px] w-[148px] h-[124px] border-primary rounded-md border-2 bg-[url('/images/icons/bg.svg')] max-sm:w-[96px] max-sm:h-[64px]">
                <div class="bg-primary px-3 flex h-full">
                    <NuxtImg src="/images/cars/ad2.png" class="m-auto transform -scale-x-100 max-sm:w-[190px] w-[406px]" />
                </div>
            </div>
            <NuxtImg src="/images/cars/int1.png" width="148px" height="124px" alt="Image 2"
                class="rounded-md max-sm:w-[96px] max-sm:h-[64px]" />
            <NuxtImg src="/images/cars/int2.png" width="148px" height="124px" alt="Image 3"
                class="rounded-md max-sm:w-[96px] max-sm:h-[64px]" />
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