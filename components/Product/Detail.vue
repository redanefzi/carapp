<template>
    <article class="bg-white grow p-6 flex flex-col justify-between">
        <div>
            <h1 class="mb-2"> Nissan GT - R</h1>
            <Rating :value="4" class="mb-8" />
        
        <div class="text-balance w-[700px] text-gray-500 max-sm:w-[280px]">
            <!-- {{ props.description }} -->
            NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving
            ground, the "race track".
        </div>
    </div>
        <div class="flex justify-between items-center">
            <div>
                <span class="text-darker font-bold text-2xl">$99.00/</span><span class="text-lighter"> day</span>
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