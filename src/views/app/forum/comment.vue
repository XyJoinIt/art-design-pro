<template>
  <div class="user-page art-full-height">
    <!-- 搜索栏 -->
    <UserSearch v-model="searchForm" @search="handleSearch" @reset="resetSearchParams"></UserSearch>
    <ElCard class="art-table-card" shadow="never">
      <!-- 表格 -->
      <ArtTable
        tableLayout="auto"
        :loading="loading"
        :data="data"
        :columns="columns"
        :pagination="pagination"
        @selection-change="handleSelectionChange"
        @pagination:size-change="handleSizeChange"
        @pagination:current-change="handleCurrentChange"
      >
      </ArtTable>

      <!-- 用户弹窗 -->
      <UserDialog
        v-model:visible="dialogVisible"
        :type="dialogType"
        :edit-data="currentCommentData"
        @submit="handleDialogSubmit"
      />
    </ElCard>
  </div>
</template>

<script setup lang="ts">
  import ArtButtonTable from '@/components/core/forms/art-button-table/index.vue'
  import { useTable } from '@/hooks/core/useTable'
  import { fetchCommentPage } from '@/api/app'
  import UserSearch from './modules/user-search.vue'
  import UserDialog from './modules/user-dialog.vue'
  import { ElAvatar, ElMessageBox } from 'element-plus'
  import { DialogType } from '@/types'
  defineOptions({ name: 'User' })

  type CommentListItem = Api.App.Comment.CommentItem

  // 弹窗相关
  const dialogType = ref<DialogType>('add')
  const dialogVisible = ref(false)
  const currentCommentData = ref<Partial<CommentListItem>>({})

  // 选中行
  const selectedRows = ref<CommentListItem[]>([])

  // 搜索表单
  const searchForm = ref({
    customerId: undefined,
    userId: undefined
  })

  const {
    columns,
    data,
    loading,
    pagination,
    getData,
    searchParams,
    resetSearchParams,
    handleSizeChange,
    handleCurrentChange,
    refreshData
  } = useTable({
    // 核心配置
    core: {
      apiFn: fetchCommentPage,
      apiParams: {
        current: 1,
        size: 20,
        ...searchForm.value
      },
      columnsFactory: () => [
        { prop: 'id', width: 180, label: '用户ID' }, // 用户ID
        {
          prop: 'userAvatar',
          label: '头像',
          formatter: (row) => {
            return h(ElAvatar, {
              src:
                row.userAvatar === ''
                  ? 'src/assets/images/avatar/avatar.webp'
                  : import.meta.env.VITE_IMG_URL + row.userAvatar,
              style: { width: '40px', height: '40px' }
            })
          }
        },
        { prop: 'userName', label: '用户昵称' },
        { prop: 'content', label: '评论内容' },
        { prop: 'createdTime', label: '评论日期' },
        {
          prop: 'operation',
          label: '操作',
          width: 120,
          fixed: 'right', // 固定列
          formatter: (row) =>
            h('div', [
              h(ArtButtonTable, {
                type: 'edit',
                onClick: () => showDialog('edit', row)
              }),
              h(ArtButtonTable, {
                type: 'delete',
                onClick: () => deleteUser(row)
              })
            ])
        }
      ]
    },
    performance: {
      debounceTime: 500 // 搜索防抖
    },
    // 数据处理
    transform: {}
  })

  /**
   * 搜索处理
   * @param params 参数
   */
  const handleSearch = (params: Record<string, any>) => {
    console.log(params)
    // 搜索参数赋值
    Object.assign(searchParams, params)
    getData()
  }

  /**
   * 显示用户弹窗
   */
  const showDialog = (type: DialogType, row?: CommentListItem): void => {
    currentCommentData.value = row || {}
    dialogType.value = type
    nextTick(() => {
      dialogVisible.value = true
    })
  }

  /**
   * 删除用户
   */
  const deleteUser = (row: CommentListItem): void => {
    console.log('删除评论:', row)
    ElMessageBox.confirm(`确定要注销该评论吗？`, '注销评论', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'error'
    }).then(async () => {
      //await fetchDeleteUser({ id: row.id as number })
      ElMessage.success('注销成功')
      // 刷新表格数据
      refreshData()
    })
  }

  /**
   * 处理弹窗提交事件
   */
  const handleDialogSubmit = async () => {
    try {
      dialogVisible.value = false
      currentCommentData.value = {}
      // 刷新表格数据
      refreshData()
    } catch (error) {
      console.error('提交失败:', error)
    }
  }

  /**
   * 处理表格行选择变化
   */
  const handleSelectionChange = (selection: CommentListItem[]): void => {
    selectedRows.value = selection
    console.log('选中行数据:', selectedRows.value)
  }
</script>
