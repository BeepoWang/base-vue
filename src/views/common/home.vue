<template>
  <div>home {{ user.userName }}</div>
</template>

<script lang="ts" setup>
import useUserStore from '@/store/modules/user'

const user = useUserStore()

user.userName = 'ssss'
</script>
