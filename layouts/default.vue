<script setup lang="ts">
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
     <HeaderDash />
      <div class="min-w-0 w-full flex-1 overflow-x-auto p-4 lg:p-6">
        <slot />
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>

<style scoped>

</style>
