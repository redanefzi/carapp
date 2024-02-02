<template>
    <li class="flex flex-col rounded-lg justify-between w-[304px] h-[388px] p-6 bg-white">
        <div class="">
            <div class="">
                <div class="flex justify-between ">
                    <div class="text-darker font-bold mb-1">{{ car.title }}</div>
                    <img :src="`/images/icons/${car.liked ? 'liked.svg' : 'heart.svg'}`" class="cursor-pointer"
                        @click="() => { toggleLike(car.id) }" />
                </div>
                <div class="text-lighter uppercase">{{ car.category }}</div>
            </div>
        </div>
        <NuxtImg :src="`/images/cars/${+car.id % 2 + 1}.png`" class="my-auto"
            :class="{ 'transform -scale-x-100': +car.id % 2 == 1 }" />
        <div class="flex justify-between mb-6 text-lighter">
            <span class="flex items-center gap-2"><img src="/images/icons/gas-station.svg" />
                70L</span><span class="flex items-center gap-2"><img src="/images/icons/car.svg" />Manual</span><span
                class="flex items-center gap-2"><img src="/images/icons/users.svg" />6 People</span>
        </div>
        <div class="flex justify-between items-center">
            <div>
                <span class="text-darker font-bold text-md">${{ car.price }}/</span><span class="text-lighter"> day</span>
            </div>
            <NuxtLink :to="`/${car.id}`">
                <Button>Rent Now </Button>
            </NuxtLink>
        </div>
    </li>
</template>

<script setup lang="ts">
import type { Car } from '~/types';
import { useCarsStore } from "../../stores/cars";

const carsStore = useCarsStore();

const toggleLike = (id: string) => {
    carsStore.toggleLike(id)
}

const props = defineProps({
    car: {
        type: Object as PropType<Car>,
        required: true,
    },
});
</script>

<style lang="scss" scoped></style>