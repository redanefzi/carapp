
<template>
    <footer class="flex flex-col text-black-100 mt-5 border-t border-gray-100 mx-auto">
        <div class="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
            <div>
                <img src="/images/logo.png" class="mb-4" />
                <p class="text-balance w-[300px] text-gray-500">
                    Our vision is to provide convenience and help increase your sales business.
                </p>
            </div>
            <div class="grid max-md:grid-cols-2 grid-cols-3 gap-3 xl:min-w-[500px] max-md:flex-col">
                <div class="flex flex-col">
                    <h3 class="font-bold mb-6">About</h3>
                    <div class="flex flex-col gap-3">
                        <a class="text-gray-500" href="/">How it works</a><a class="text-gray-500" href="/">Featured</a><a
                            class="text-gray-500" href="/">Partnership</a><a class="text-gray-500" href="/">Bussiness
                            Relation</a>
                    </div>
                </div>
                <div class="flex flex-col">
                    <h3 class="font-bold mb-6">Company</h3>
                    <div class="flex flex-col gap-3">
                        <a class="text-gray-500" href="/">Events</a><a class="text-gray-500" href="/">Blog</a><a
                            class="text-gray-500" href="/">Podcast</a><a class="text-gray-500" href="/">Invite a friend</a>
                    </div>
                </div>
                <div class="flex flex-col">
                    <h3 class="font-bold mb-6">Socials</h3>
                    <div class="flex flex-col gap-3">
                        <a class="text-gray-500" href="/">Discord</a><a class="text-gray-500" href="/">Instagram</a><a
                            class="text-gray-500" href="/">Twitter</a><a class="text-gray-500" href="/">Facebook</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-between items-center flex-wrap border-t border-gray-100 sm:px-16 px-6 py-10">
            <p>@{{ new Date().getFullYear() }} DM. All Rights Reserved</p>
            <div class="flex gap-6"><a class="text-gray-5000" href="/"> Privacy & Policy </a><a
                    class="text-gray-5000" href="/"> Terms & Conditions </a></div>
        </div>
    </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>