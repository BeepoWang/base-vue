<template>
  <div>home {{ user.userName }}</div>
</template>

<script lang="ts" setup>
import useUserStore from '@/store/modules/user'
import { sessionStorage } from '@/utils/storage'

const user = useUserStore()

user.userName = 'ssss'

sessionStorage.setItem(`${user.userName}`, 1231231)
</script>
