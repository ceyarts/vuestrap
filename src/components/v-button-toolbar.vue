<template>
  <div class="btn-toolbar" role="toolbar">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.btn-toolbar {
  & > :not(:last-child) {
    margin-right: 8px;
  }
}
</style>
