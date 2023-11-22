<template>
    <!-- bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')] -->
    <section
        class="bg-white h-full dark:bg-gray-900 flex flex-row justify-center items-center">
        <div class="py-8 px-4 mx-auto max-w-screen-xl flex flex-col items-center justify-center lg:py-16 z-10 relative">
            <a href="#"
                class="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-blue-700 bg-white dark:bg-white rounded-full  ">
                <span class="text-xs bg-blue-400 rounded-full text-white px-4 py-1.5 me-3">New</span> <span
                    class="text-sm font-medium text-blue-500">Coming Soon !</span>
                <svg class="w-2.5 h-2.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 9 4-4-4-4" />
                </svg>
            </a>
            <h1
                class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Something Great is coming !</h1>
            <img class="h-[50vh] " src="@/assets/delivery-address-pana.svg" alt="">
           
        </div>
        <div
            class="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-400 w-full h-full absolute top-0 left-0 z-0">
        </div>
    </section>
</template>
<script lang="ts" setup>

</script>
