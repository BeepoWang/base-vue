<template>
  <p class="font-bold cursor-pointer" @click="jumpPage">
    <span class="i-mdi-arrow-left"></span>
    <span>User</span>
  </p>
  <div>home {{ user.userName }}</div>
</template>

<script lang="ts" setup>
import useUserStore from '@/store/modules/user'
import { useRouter } from 'vue-router'

const user = useUserStore()
user.userName = 'ssss'

const router = useRouter()
const jumpPage = () => {
  router.push({
    path: '/user'
  })
}
</script>
