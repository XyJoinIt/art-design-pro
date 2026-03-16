<!-- 工作台页面 -->
<template>
  <div>
    <CardList></CardList>
    <SalesOverview />
    <ElRow :gutter="20">
      <ElCol :sm="24" :md="24" :lg="24">
        <Dynamic />
      </ElCol>
    </ElRow>
  </div>
</template>

<script setup lang="ts">
  import CardList from './modules/card-list.vue'
  import SalesOverview from './modules/sales-overview.vue'
  import Dynamic from './modules/dynamic-stats.vue'
  defineOptions({ name: 'Console' })
</script>
