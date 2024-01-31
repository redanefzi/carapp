<template>
    <div class="flex flex-col  mx-auto">
        <article class="flex justify-between mt-8">
            <Ad title="The Best Platform for Car Rental" description="Ease of doing a car rental safely and reliably. Of course at a low price." image="ad1.png"/>
            <Ad title="Easy way to rent a car at a low price" description="Providing cheap car rental services and safe and comfortable facilities." image="ad2.png"/>
        </article>
        <h3 class="mt-5 text-lighter text-lg px-5 py-3">Popular Car</h3>
        <CardList :items="popular" />
        <h3 class="mt-5 text-lighter text-lg px-5 py-3">Recomendation Car</h3>
        <CardList :items="recomended" />
        <Button class="mx-auto my-14">Show more car</Button>
    </div>
</template>

<script setup lang="ts">
const popular: { id: string }[] = [{ id: "1" },{ id: "2" },{ id: "3" },{ id: "4" },]
const recomended: { id: string }[] = [{ id: "1" },{ id: "2" },{ id: "3" },{ id: "4" },{ id: "5" },{ id: "6" },{ id: "7" },{ id: "8" },]
</script>

<style scoped>

</style>
