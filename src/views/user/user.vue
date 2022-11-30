<template>
  <div>
    <p class="font-bold cursor-pointer" @click="jumpPage">
      <span class="i-mdi-arrow-left"></span>
      <span>Home</span>
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
