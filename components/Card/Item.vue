<template>
    <li class="flex flex-col rounded-lg justify-between w-[304px] h-[388px] p-6 bg-white">
        <div class="">
            <div class="">
                <div class="flex justify-between ">
                    <div class="text-darker font-bold mb-1">All New Rush</div>
                    <img src="/images/icons/heart.svg" />
                </div>
                    <div class="text-lighter">SUV</div>
               
            </div>
        </div>
        <NuxtImg src="/images/cars/1.png" class="m-auto" />
        <div class="flex justify-between mb-6 text-lighter">
            <span class="flex items-center gap-2"><img src="/images/icons/gas-station.svg" />
                    70L</span><span class="flex items-center gap-2"><img
                    src="/images/icons/car.svg" />Manual</span><span class="flex items-center gap-2"><img
                    src="/images/icons/users.svg" />6 People</span>
        </div>
        <div class="flex justify-between items-center">
            <div>
                <span class="text-darker font-bold text-md">$99.00/</span><span class="text-lighter"> day</span>
            </div>
            <Button>Rent Now </Button>
        </div>
    </li>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>