<template>
  <div class="grid items-start lg:flex">
    <Sidebar />
    <div class="w-full p-8">
      <HeaderTest />
      <slot />
    </div>
  </div>
</template>