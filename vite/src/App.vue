<style>
  .btn {
    @apply font-bold py-2 px-4 rounded;
  }
  .btn-blue {
    @apply bg-blue-500 text-white;
  }
  .btn-blue:hover {
    @apply bg-blue-700;
  }
</style>

<template>
    <div style="margin: 10px auto; width: 1200px">
        <main-navigation-menu></main-navigation-menu>
        <p>Assets</p>
        <assets-table-component></assets-table-component>
    </div>
</template>

<script setup>
  import MainNavigationMenu from '@/components/navigation/MainNavigationMenu.vue'
  import AssetsTableComponent from '@/components/tables/AssetsTableComponent.vue'
</script>