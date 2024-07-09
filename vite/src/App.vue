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
        <button class="btn btn-blue mb-5">
            Assets
        </button>
        <AssetsTableComponent />
    </div>
</template>

<script setup>
  import AssetsTableComponent from '@/components/tables/AssetsTableComponent.vue'
</script>