<template>
    <div class="flex flex-col mx-auto mt-8">
        <div class="flex gap-8">
            <ProductCarousel title="Sports car with the best design and acceleration" description="Safety and comfort while driving a futuristic and elegant sports car" image="ad2.png" />
           <ProductDetail title="Nissan GT - R" description="" price="80.00"/>
        </div>
        <h3 class="mt-5 text-lighter text-lg px-5 py-3">Recomendation Car</h3>
        <CardList :items="recomended" />
        <Button class="mx-auto my-14">Show more car</Button>
    </div>
</template>

<script setup lang="ts">
import { useCarsStore } from "../../stores/cars";

const carsStore = useCarsStore();
const recomended = computed(() => carsStore.getFilteredRecomendedCars());
</script>

<style scoped></style>
