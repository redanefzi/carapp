<template>
    <article class="bg-white grow p-6 flex flex-col justify-between">
        <div>
            <h1 class="mb-2"> Nissan GT - R</h1>
            <Rating :value="4" />
        </div>
        <div class="break-words	w-44">
            <!-- {{ props.description }} -->
            NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving
            ground, the "race track".
        </div>

        <div class="flex justify-between items-center">
            <div>
                <span class="text-darker font-bold text-md">$99.00/</span><span class="text-lighter"> day</span>
            </div>
            <Button>Rent Now </Button>
        </div>
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
    price: {
        type: String,
        required: true,
    },
});
</script>

<style lang="scss" scoped></style>