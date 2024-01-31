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
const popular: { id: string }[] = [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" },]
const recomended: { id: string }[] = [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }, { id: "6" }, { id: "7" }, { id: "8" },]
</script>

<style scoped></style>
