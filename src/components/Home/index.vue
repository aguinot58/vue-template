<template>
    <div class="px-4 py-5 my-5 text-center">
      <h1 class="display-5 fw-bold">Home</h1>
      <p class="lead mb-4">{{ example }}</p>
    </div>
</template>
  
<script setup>

    import useCounterStore from '@/stores/exampleStore'
    const store = useCounterStore();

    const example = store.example
  
</script>

<style scoped>

</style>