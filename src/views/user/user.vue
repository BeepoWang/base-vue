<template>
  <div>
    <p class="font-bold">
      <span class="i-mdi-arrow-left"></span>
      <a @click="jumpPage">Home</a>
    </p>
    <p>User</p>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const jumpPage = () => {
  router.push({
    path: '/home'
  })
}
</script>
