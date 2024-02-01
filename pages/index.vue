<template>
    <div class="flex flex-col  mx-auto">
        <article class="flex justify-between mt-8 gap-8 flex-col xl:flex-row md:flex-row">
            <Ad title="The Best Platform for Car Rental"
                description="Ease of doing a car rental safely and reliably. Of course at a low price." image="ad1.png" />
            <Ad title="Easy way to rent a car at a low price"
                description="Providing cheap car rental services and safe and comfortable facilities." image="ad2.png" />
        </article>
        <h3 class="mt-5 text-lighter text-lg px-5 py-3">Popular Car</h3>
        <CardList :items="popular" />
        <h3 class="mt-5 text-lighter text-lg px-5 py-3">Recomendation Car</h3>
        <CardList :items="recomended" />
        <Button class="mx-auto my-14">Show more car</Button>
    </div>
</template>

<script setup lang="ts">
import { useCarsStore } from "../stores/cars";

const carsStore = useCarsStore();
const {popularCars: popular, recomendedCars: recomended} = storeToRefs(carsStore)

</script>

<style scoped></style>
