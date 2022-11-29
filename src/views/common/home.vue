<template>
  <p class="font-bold">
    <span class="i-mdi-arrow-left"></span>
    <a @click="jumpPage">User</a>
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
