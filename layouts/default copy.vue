<template>
  <div class="grid items-start lg:flex">
    <Sidebar />
    <div class="w-full p-8">
      <Header />
      <slot />
    </div>
  </div>
</template>