<script setup>

</script>

<template>
  <div class="bkg">
    <div class="bkg detail">
      <div id="avatar">
        <img src="@/assets/good_doc.png" alt="me">
      </div>
      <div id="chat">
        <div id="chat-content">
          <p>根治青春痘的建议：

            1. 保持良好的面部卫生： 使用温和的洗面奶清洁面部，早晚各一次。避免用力搓揉皮肤，以免刺激毛囊。

            2. 避免用手触摸面部： 手上的细菌可能会导致痘痘的发炎。尽量避免用手触摸、挤压或抓挠面部。

            3. 选择合适的化妆品： 选择不含阻塞毛孔成分的化妆品，最好选择无油、无阻塞剂的产品。

            4. 保持身体健康： 饮食要均衡，多摄入水果、蔬菜和全谷物。避免高糖、高油脂的食物。

            5. 注意生活方式： 充足的睡眠对皮肤健康很重要。规律的运动也有助于促进血液循环，维持身体健康。

            6. 避免暴露在有害环境中： 避免过度暴露在空气污染或化学物质中，如烟雾和有害气体。

            7. 使用合适的护肤品： 选择适合自己肤质的护肤品，特别是无油、非刺激性的产品。

            8. 药物治疗： 一些药物，如含有苯酚、过氧化苯甲酰等成分的药膏，有时可能由医生开具。请在医生的指导下使用，因为这些药物可能有一些副作用。

            9. 专业治疗： 如果青春痘问题严重，最好咨询专业医生或皮肤科医生的建议。他们可以为您制定个性化的治疗计划，包括激光治疗、化学换肤等。

            请记住，青春痘的治疗需要时间，而且对于每个人来说效果可能会有所不同。最好的方法是保持耐心，采取一系列综合的方法来维护皮肤健康。
          </p>
        </div>
        <div id="chat-time">
          <span>2023/11/11 23:51:21</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.bkg{
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px 150px;
  font-size: 30px;
  .detail{
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    flex-basis: 0;
    #avatar{
      flex-grow: 1;
      max-width: 35px;
      img{
        width: 35px; height: 35px;
        padding: 4px;
        border-radius: 12px;
        border: 1px solid #e1e1e1;
        box-shadow: 0 3px 3px rgba(0, 0, 0, 0.5);
      }
    }
    #chat{
      flex-direction: column;
      margin-left: 10px;
      flex-grow: 9;
      flex-basis: 0;
      #chat-content{
        width: 700px;
        flex-grow: 7;
        align-items: center;
        justify-content: center;
        margin-bottom: 4px;
        p{
          min-width: 100px;
          max-width: 700px;
          margin-top: 2px;
          padding: 6px 20px;
          border-radius: 12px;
          background-color: #f2f2f2;
          border: 2px solid #e1e1e1;
          font-size: 15px;
          font-weight: bold;
        }
      }
      #chat-time{
        flex-grow: 1;
        font-size: 12px;
        padding-left: 10px;
      }
    }
  }
}
</style>