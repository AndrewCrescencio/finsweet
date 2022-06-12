<template>
  <div id="teste" class="teste"></div>
</template>
<script>
export default {
  created() {
    return this.$router.push({ path: '/home' })
  },
}
</script>
