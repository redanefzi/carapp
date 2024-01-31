
<template>
    <footer class="flex flex-col text-black-100 mt-5 border-t border-gray-100">
        <div class="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
            <div class="footer__links">
                <div class="footer__link">
                    <h3 class="font-bold">About</h3><a class="text-gray-500" href="/">How it works</a><a
                        class="text-gray-500" href="/">Featured</a><a class="text-gray-500" href="/">Partnership</a><a
                        class="text-gray-500" href="/">Bussiness Relation</a>
                </div>
                <div class="footer__link">
                    <h3 class="font-bold">Company</h3><a class="text-gray-500" href="/">Events</a><a class="text-gray-500"
                        href="/">Blog</a><a class="text-gray-500" href="/">Podcast</a><a class="text-gray-500"
                        href="/">Invite a friend</a>
                </div>
                <div class="footer__link">
                    <h3 class="font-bold">Socials</h3><a class="text-gray-500" href="/">Discord</a><a class="text-gray-500"
                        href="/">Instagram</a><a class="text-gray-500" href="/">Twitter</a><a class="text-gray-500"
                        href="/">Facebook</a>
                </div>
            </div>
        </div>
        <div class="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
            <p>{{ new Date().getFullYear() }} DM. All Rights Reserved</p>
            <div class="footer__copyrights-link"><a class="text-gray-5000" href="/"> Privacy Policy </a><a
                    class="text-gray-5000" href="/"> Terms of Use </a></div>
        </div>
    </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>