<script setup>
import { ref } from 'vue'
import { Plus, Fold } from '@element-plus/icons-vue'
import 'animate.css'
import HistoryComponent from '@/components/HistoryComponent.vue'

const doctor = ref('庸医')
const history = ref([
  {
    title: '如何根治青春痘',
    count: '共52条对话',
    time: '2023/11/10 23:31:46',
    id: 123
  },
  {
    title: '痛经怎么办',
    count: '共12条对话',
    time: '2023/11/9 12:34:13',
    id: 456
  },
  {
    title: '眩晕症吃什么药',
    count: '共42条对话',
    time: '2023/11/8 15:35:01',
    id: 789
  },
  {
    title: '时常腰酸背痛怎么办',
    count: '共11条对话',
    time: '2023/11/1 14:15:21',
    id: 200
  },
  {
    title: '腰酸背痛的原因是什么？',
    count: '共8条对话',
    time: '2023/11/1 14:20:45',
    id: 201
  },
  {
    title: '如何缓解腰酸背痛的不适？',
    count: '共5条对话',
    time: '2023/11/1 14:22:10',
    id: 202
  },
  {
    title: '如何预防腰酸背痛？',
    count: '共12条对话',
    time: '2023/11/1 14:24:36',
    id: 203
  },
  {
    title: '腰酸背痛的治疗方法？',
    count: '共9条对话',
    time: '2023/11/1 14:27:02',
    id: 204
  },
  {
    title: '如何改善腰酸背痛？',
    count: '共7条对话',
    time: '2023/11/1 14:29:28',
    id: 205
  },
  {
    title: '腰酸背痛与坐姿有关？',
    count: '共6条对话',
    time: '2023/11/1 14:31:54',
    id: 206
  }
])
const activeId = ref(history.value[0].id)
const currentChat = ref(history.value.find((item) => item.id === activeId.value))

function toggleActive(id) {
  this.activeId = id
  currentChat.value = this.history.find((item) => item.id === this.activeId)
}
</script>

<template>
  <div class="container">
    <div class="left-nav">
      <div class="left-nav header">
        <div id="nav-title">
          <span style="margin-left: 20px; font-size: 25px; font-weight: bold">Medical T5</span>
          <span style="margin-left: 20px; font-size: 15px">Build your own AI doctor</span>
        </div>
        <div id="nav-icon">
          <svg
            style="fill: #cdecf6"
            xmlns="http://www.w3.org/2000/svg"
            height="4em"
            viewBox="0 0 576 512"
          >
            <path
              d="M142.4 21.9c5.6 16.8-3.5 34.9-20.2 40.5L96 71.1V192c0 53 43 96 96 96s96-43 96-96V71.1l-26.1-8.7c-16.8-5.6-25.8-23.7-20.2-40.5s23.7-25.8 40.5-20.2l26.1 8.7C334.4 19.1 352 43.5 352 71.1V192c0 77.2-54.6 141.6-127.3 156.7C231 404.6 278.4 448 336 448c61.9 0 112-50.1 112-112V265.3c-28.3-12.3-48-40.5-48-73.3c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V336c0 97.2-78.8 176-176 176c-92.9 0-168.9-71.9-175.5-163.1C87.2 334.2 32 269.6 32 192V71.1c0-27.5 17.6-52 43.8-60.7l26.1-8.7c16.8-5.6 34.9 3.5 40.5 20.2zM480 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
            />
          </svg>
        </div>
      </div>
      <div class="left-nav main">
        <HistoryComponent
          v-for="item in history"
          :key="item.id"
          :style="{ borderColor: activeId === item.id ? '#1d93ab' : 'transparent' }"
          @click="toggleActive(item.id)"
        >
          <template v-slot:title>{{ item.title }}</template>
          <template v-slot:count>{{ item.count }}</template>
          <template v-slot:time>{{ item.time }}</template>
        </HistoryComponent>
      </div>
      <div class="left-nav footer">
        <el-popover
          placement="top-start"
          title="Logging Out"
          :width="158"
          trigger="hover"
          content="Click on me to cancel your login"
        >
          <template #reference>
            <button id="login-out">
              <el-icon size="large">
                <Fold />
              </el-icon>
            </button>
          </template>
        </el-popover>
        <button id="add-new-chat">
          <el-icon size="large">
            <Plus />
          </el-icon>
          <span style="font-size: 15px; font-weight: bold">添加新对话</span>
        </button>
      </div>
    </div>
    <div class="right-main">
      <div class="right-main header">
        <div class="right-main header title">
          <span style="font-size: 30px; font-weight: bold">{{ currentChat.title }}</span>
          <span style="font-size: 18px">{{ currentChat.count }}</span>
        </div>
        <div class="right-main header change-button">
          <el-radio-group v-model="doctor" size="default">
            <el-radio-button label="庸医" />
            <el-radio-button label="神医" />
          </el-radio-group>
        </div>
      </div>
      <div class="right-main main"></div>
      <div class="right-main footer">InputBox</div>
    </div>
  </div>
</template>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  margin: 0;
  padding: 0;
  width: 100svw;
  height: 100svh;
  border-style: dashed;
  border-width: 1px;
  display: flex;

  .left-nav {
    background-color: #e7f8ff;
    display: flex;
    flex-basis: 0;
    flex-direction: column;
    flex-grow: 1;
    border-style: dashed;
    border-width: 1px;

    .header {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      flex-basis: 0;
      flex-grow: 2;
      border-style: dashed;
      border-width: 1px;

      #nav-title {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        flex-basis: 0;
        flex-grow: 2;
      }

      #nav-icon {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-basis: 0;
        flex-grow: 1;
      }
    }
  }

  .main {
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    flex-basis: 0;
    flex-grow: 8;
    border-style: dashed;
    border-width: 1px;
    overflow: auto;
  }
  .main::-webkit-scrollbar {
    width: 2px; /* 设置滚动条宽度 */
  }
  .main::-webkit-scrollbar-track {
    background-color: transparent; /* 设置滚动条背景色 */
  }
  .main::-webkit-scrollbar-thumb {
    background-color: #888; /* 设置滚动条滑块颜色 */
  }

  .footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    flex-basis: 0;
    flex-grow: 1;
    border-style: dashed;
    border-width: 1px;

    #login-out {
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-grow: 1;
      min-width: 40px;
      max-width: 60px;
      height: 40px;
      border-radius: 10px;
      background-color: white;
      transition-duration: 0.4s;
      border: 2px solid transparent;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    }

    #login-out:hover {
      transition-duration: 0.4s;
      background-color: #e5e5e5;
      cursor: pointer;
    }

    #login-out:active {
      transition-duration: 0.2s;
      background-color: #c1c5c8;
    }

    #add-new-chat {
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-grow: 3;
      min-width: 120px;
      max-width: 200px;
      height: 40px;
      border-radius: 10px;
      background-color: white;
      transition-duration: 0.4s;
      border: 2px solid transparent;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    }

    #add-new-chat:hover {
      transition-duration: 0.4s;
      background-color: #e5e5e5;
      cursor: pointer;
    }

    #add-new-chat:active {
      transition-duration: 0.2s;
      background-color: #c1c5c8;
    }
  }

  .right-main {
    display: flex;
    flex-direction: column;
    flex-grow: 4;
    flex-basis: 0;
    border-style: dashed;
    border-width: 1px;

    .header {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: center;
      flex-basis: 0;
      flex-grow: 2;

      .title {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-basis: 0;
        flex-grow: 4;
        border-bottom: 1px solid #e5e5e5;
      }

      .change-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-basis: 0;
        flex-grow: 2;
      }
    }

    .main {
      display: flex;
      flex-direction: row;
      flex-basis: 0;
      flex-grow: 8;
      border-style: dashed;
      border-width: 1px;
    }

    .footer {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-basis: 0;
      flex-grow: 1;
      border-style: dashed;
      border-width: 1px;
    }
  }
}
</style>