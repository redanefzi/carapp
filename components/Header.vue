<template>
    <header class="w-full bg-white p-10 flex mx-auto">
        <div class="flex w-[148px] mr-16">
            <NuxtImg src="/images/logo.png" alt="Logo" class="m-auto" />
        </div>
        <div class="rounded-full border border-[#C3D4E9] py-3 px-5 flex grow">
            <img src="/images/icons/search.svg" alt="Search">
            <input type="text" name="search" placeholder="Search something here"
                class="border-none w-full ml-5 outline-none" 
                v-model="carsStore.searchText"
                >
        </div>
        <div class="p-5 rounded-full border border-[#C3D4E9] ml-8">
            <img src="/images/icons/heart.svg" alt="like search" class="">
        </div>
    </header>
</template>

<script setup lang="ts">
import { useCarsStore } from "../stores/cars";

const carsStore = useCarsStore();

</script>

<style lang="scss" scoped></style>