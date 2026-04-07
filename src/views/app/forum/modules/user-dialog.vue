<template>
  <ElDialog
    :title="dialogTitle"
    :model-value="visible"
    @update:model-value="handleCancel"
    width="860px"
    align-center
    class="menu-dialog"
    @closed="handleClosed"
  >
    <ArtForm
      ref="formRef"
      v-model="form"
      :items="formItems"
      :rules="rules"
      :span="width > 640 ? 12 : 24"
      :gutter="20"
      label-width="100px"
      :show-reset="false"
      :show-submit="false"
    >
    </ArtForm>

    <template #footer>
      <span class="dialog-footer">
        <ElButton @click="handleCancel">取 消</ElButton>
        <ElButton type="primary" @click="handleSubmit" :loading="loading">确 定</ElButton>
      </span>
    </template>
  </ElDialog>
</template>

<script setup lang="ts">
  import type { FormRules } from 'element-plus'
  import type { FormItem } from '@/components/core/forms/art-form/index.vue'
  import ArtForm from '@/components/core/forms/art-form/index.vue'
  import { useWindowSize } from '@vueuse/core'
  import { fetchAddUser, fetchEditUser } from '@/api/system'
  const { width } = useWindowSize()

  const loading = ref(false)

  interface Props {
    visible: boolean
    editData?: Api.SystemManage.UserListItem | any
    type?: string
  }

  interface Emits {
    (e: 'update:visible', value: boolean): void
    (e: 'submit', data: Api.SystemManage.UserListItem): void
  }

  const props = withDefaults(defineProps<Props>(), {
    visible: false,
    type: 'menu'
  })

  const emit = defineEmits<Emits>()

  const formRef = ref()
  const isEdit = ref(false)

  const form = reactive<Api.SystemManage.UserListItem>({
    account: '',
    phone: '',
    name: '',
    email: '',
    status: 10,
    password: ''
  })

  const rules = reactive<FormRules>({
    account: [
      { required: true, message: '请输入用户名', trigger: 'blur' },
      { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
    ],
    name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
    phone: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
    password: [
      { required: !isEdit.value, message: '请输入密码', trigger: 'blur' },
      { min: 6, max: 20, message: '密码长度在 6 到 20 个字符', trigger: 'blur' }
    ]
  })

  /**
   * 表单项配置
   */
  const formItems = computed<FormItem[]>(() => {
    const arr = [
      { label: '用户名', key: 'account', type: 'input', props: { placeholder: '请输入用户名' } },
      { label: '姓名', key: 'name', type: 'input', props: { placeholder: '请输入姓名' } },
      { label: '手机号', key: 'phone', type: 'input', props: { placeholder: '请输入手机号' } },
      { label: '邮箱', key: 'email', type: 'input', props: { placeholder: '请输入邮箱' } },
      {
        label: '状态',
        key: 'status',
        type: 'select',
        props: { placeholder: '请选择状态', options: statusOptions.value }
      },
      {
        label: '密码',
        key: 'password',
        type: 'input',
        hidden: isEdit.value,
        props: { placeholder: '请输入密码', type: 'password', showPassword: true }
      }
    ]
    return arr
  })

  /**
   * 状态选项
   */
  const statusOptions = computed(() => {
    return [
      { label: '正常', value: 10 },
      { label: '停用', value: 20 }
    ]
  })

  /**
   * 对话框标题
   */
  const dialogTitle = computed(() => {
    return isEdit.value ? `编辑用户` : `新建用户`
  })

  /**
   * 重置表单数据
   */
  const resetForm = (): void => {
    formRef.value?.reset()
    form.status = 10
    form.password = ''
  }

  /**
   * 加载表单数据（编辑模式）
   */
  const loadFormData = (): void => {
    if (!props.editData) return
    if (props.type === 'edit') {
      isEdit.value = true
    }
    console.log(props.editData)
    const row = props.editData
    form.id = row.id || 0
    form.account = row.account || ''
    form.name = row.name || ''
    form.status = row.status || 10
    form.email = row.email || ''
    form.phone = row.phone || ''
  }

  /**
   * 提交表单
   */
  const handleSubmit = async (): Promise<void> => {
    if (!formRef.value) return
    await formRef.value.validate()
    loading.value = true
    try {
      if (isEdit.value) {
        await fetchEditUser({ ...form })
      } else {
        await fetchAddUser({ ...form })
      }
      emit('submit', { ...form })
      ElMessage.success(`${isEdit.value ? '编辑' : '新增'}成功`)
      handleClosed()
    } finally {
      loading.value = false
    }
  }

  /**
   * 取消操作
   */
  const handleCancel = (): void => {
    emit('update:visible', false)
  }

  /**
   * 对话框关闭后的回调
   */
  const handleClosed = (): void => {
    resetForm()
    isEdit.value = false
  }

  /**
   * 监听对话框显示状态
   */
  watch(
    () => props.visible,
    (newVal) => {
      if (newVal) {
        nextTick(() => {
          if (props.editData) {
            loadFormData()
          }
        })
      }
    }
  )
</script>
