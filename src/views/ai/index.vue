<template>
  <div class="ai-container">
    <iframe src="/ai/" frameborder="0" />
  </div>
</template>

<script>
export default {
  name: 'AI'
}
</script>

<style scoped>
.ai-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}
iframe {
  width: 100%;
  height: 100%;
  border: none;
}
</style>
