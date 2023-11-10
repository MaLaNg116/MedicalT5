<script setup>
import { ref } from 'vue'
import {Edit, DeleteFilled} from "@element-plus/icons-vue";
import 'animate.css'

const edit_show = ref(false)

</script>

<template>
  <div class="history" @mouseover="()=>{edit_show = true}" @mouseleave="()=>{edit_show = false}">
    <span class="history-title">
      <slot name="title"></slot>
    </span>
    <div>
      <transition name="edit">
        <el-icon color="#939393" v-show="edit_show">
          <Edit />
        </el-icon>
      </transition>
    </div>
    <div>
      <transition name="delete">
        <el-icon color="#939393" v-show="edit_show">
          <DeleteFilled />
        </el-icon>
      </transition>
    </div>
    <span class="history-count">
      <slot name="count"></slot>
    </span>
    <span class="history-time">
      <slot name="time"></slot>
    </span>
  </div>
</template>

<style scoped lang="less">
.history{
  display: grid;
  grid-template-columns: 5fr 3fr 1fr 1fr;
  margin-top: 7px;
  margin-bottom: 7px;
  width: 270px;
  min-height: 65px;
  max-height: 85px;
  border-radius: 10px;
  background-color: white;
  transition-duration: 0.4s;
  border: 2px solid transparent;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  .history-title{
    margin-left: 15px;
    font-size: 16px;
    font-weight: bolder;
    justify-self: start;
    align-items: center;
    grid-column-start: 1;
    grid-column-end: 3;
  }
  .history-count{
    color: #a6a6a6;
    margin-left: 15px;
    font-size: 13px;
    justify-self: start;
  }
  .history-time{
    color: #a6a6a6;
    margin-right: 15px;
    font-size: 13px;
    justify-self: end;
    grid-column-start: 2;
    grid-column-end: 5;
  }
  .edit-enter-active{
    animation:fadeInDown 0.4s;
  }
  .edit-leave-active{
    animation:fadeOutUp 0.4s;
  }
  .delete-enter-active{
    animation:fadeInDown 0.4s;
  }
  .delete-leave-active{
    animation:fadeOutUp 0.4s;
  }
  .el-icon:hover{
    cursor: pointer;
    color: #333333
  }
}

.history:hover{
  transition-duration: 0.4s;
  background-color: #f3f3f3;
}
</style>