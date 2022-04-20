<template>
  <div>
    <slot />
    <footer class="bg-gray-200 text-center lg:text-left">
      <div
        class="text-gray-700 text-center p-4"
        style="background-color: rgba(0, 0, 0, 0.2)"
      >
        © 2022 Copyright:
        <a class="text-gray-800" href="https://tailwind-elements.com/"
          >Niklas Wortmann</a
        >
      </div>
    </footer>
  </div>
</template>
