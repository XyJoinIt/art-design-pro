export enum GenderEnum {
  /** 男 */
  Male = 10,
  /** 女 */
  Female = 20,
  /** 未知 */
  Unknown = 30
}

export enum SystemStatusEnum {
  /** 正常 */
  Normal = 10,
  /** 停用 */
  Disabled = 20
}

/// <summary>
/// 状态枚举
/// </summary>
export enum StatusEnum {
  /// <summary>
  /// 启用
  /// </summary>
  Enable = 10,
  /// <summary>
  /// 禁用
  /// </summary>
  Disable = 20
}

/// <summary>
/// 好友状态枚举
/// </summary>
export enum FriendStatusEnum {
  /// <summary>
  /// 正常
  /// </summary>
  Normal = 10,

  /// <summary>
  /// 拉黑
  /// </summary>
  Blocked = 30
}

/// <summary>
/// 好友申请状态枚举
/// </summary>
export enum FriendApplyStatusEnum {
  /// <summary>
  /// 待处理
  /// </summary>
  Pending = 10,
  /// <summary>
  /// 已同意
  /// </summary>
  Accepted = 20,
  /// <summary>
  /// 已拒绝
  /// </summary>
  Rejected = 30
}

/// <summary>
/// 菜单类型
/// </summary>
export enum MenuTypeEnum {
  /// <summary>
  /// 目录
  /// </summary>
  Directory = 10,
  /// <summary>
  /// 菜单
  /// </summary>
  Menu = 20,
  /// <summary>
  /// 按钮
  /// </summary>
  Button = 30
}

/// <summary>
/// 登录方式枚举
/// </summary>
export enum LoginTypeEnum {
  /// <summary>
  /// 账户密码登录
  /// </summary>
  AccountPassword = 10,
  /// <summary>
  /// 手机号登录
  /// </summary>
  PhonePassword = 20
}

/// <summary>
/// 内容可见度枚举
/// </summary>
export enum ForumShareVisibleEnum {
  /// <summary>
  /// 公开
  /// </summary>
  Public = 10,

  /// <summary>
  /// 仅关注可见
  /// </summary>
  FriendOnly = 20,

  /// <summary>
  /// 私密
  /// </summary>
  Private = 30
}

/// <summary>
/// 论坛分享内容查询类型枚举
/// </summary>
export enum ForumShareQueryTypeEnum {
  /// <summary>
  /// 全部
  /// </summary>
  All = 10,

  /// <summary>
  /// 关注
  /// </summary>
  Follow = 20,

  /// <summary>
  /// 热门
  /// </summary>
  Hot = 30
}

/// <summary>
///  论坛评论目标类型枚举
/// </summary>
export enum ForumCommentTargetEnum {
  /// <summary>
  /// 分享内容
  /// </summary>
  Share = 10,

  /// <summary>
  /// 评论
  /// </summary>
  Comment = 20
}

/// <summary>
/// 审核状态枚举
/// </summary>
export enum AuditStatusEnum {
  /// <summary>
  /// 待审核
  /// </summary>
  Pending = 10,

  /// <summary>
  /// 审核通过
  /// </summary>
  Approved = 20,

  /// <summary>
  /// 审核拒绝
  /// </summary>
  Rejected = 30
}

/// <summary>
/// 聊天类型枚举
/// </summary>
export enum ChatTypeEnum {
  /// <summary>单聊</summary>
  Single = 1,
  /// <summary>群聊</summary>
  Group = 2
}

/// <summary>
/// 消息类型枚举
/// </summary>
export enum MessageTypeEnum {
  /// <summary>文本消息</summary>
  Text = 1,
  /// <summary>图片</summary>
  Image = 2,
  /// <summary>语音</summary>
  Voice = 3,
  /// <summary>文件</summary>
  File = 4,
  /// <summary>表情</summary>
  Emoji = 5
}

// 群成员角色枚举
export enum GroupMemberRoleEnum {
  /// <summary>群主</summary>
  Owner = 1,
  /// <summary>管理员</summary>
  Admin = 2,
  /// <summary>普通成员</summary>
  Normal = 3
}

/// <summary>
/// 群成员状态枚举
/// </summary>
export enum GroupMemberStatusEnum {
  /// <summary>正常</summary>
  Normal = 1,
  /// <summary>已退出</summary>
  Quit = 2,
  /// <summary>被踢出</summary>
  Kicked = 3,
  /// <summary>禁言</summary>
  Muted = 4
}

/// <summary>
/// 群状态枚举
/// </summary>
export enum GroupStatusEnum {
  /// <summary>正常</summary>
  Normal = 1,
  /// <summary>解散</summary>
  Dissolved = 2
}
