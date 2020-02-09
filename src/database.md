 数据库文档
---
##### 一期：
#### 用户表user
- id id
- name 名字
- gender 性别
- sign 签名
- bonus 备注
- region_type 地区类型
- region 地区
- register_type 注册类型
- create_time 创建时间
- update_time 变更时间

#### 标签表 tag
- id
- type 标签类型
- name 标签名字
- bonus 标签备注
- create_time 创建时间
- update_time 变更时间

#### 用户和标签关系表 usertags
- id
- userid 用户ID
- tagid tagid

#### 博客表 blog
- id
- title
- bonus
- time
- url

#### 博客和标签关系表 blogtag
- id
- userid 用户ID
- tagid tagid

#####二期：
#### 屁话表 pihua
- id
- user
- content
- visual 可见程度(全部/关注/好友/推广)

#### 屁话和标签关系表 pihuatags
- id
- pihuaid 用户ID
- tagid tagid


#### 评论表 comments
- id
- phid 
- userid
- tag

