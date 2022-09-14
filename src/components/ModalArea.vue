<template>
  <div class="modal" @click="$emit('close', $event)">
    <div class="modal_content">
      <div class="modal_wrapper">
        <div class="modal_close" @click="$emit('close', $event)">
          ×
        </div>
        <picture ref="modal_img" class="modal_img" :style="{ transform: imgSize }">
          <source :srcset="val.img_src_pc" media="(min-width: 1024px) and (orientation : landscape)" />
          <!-- 幅1024px以上なら表示 -->
          <img :src="val.img_src" alt="" />
        </picture>
        <div class="modal_detail">
          <div class="modal_title">
            <span>{{ val.title }}</span>
          </div>
          <div class="role">
            <h3>担当フェーズ</h3>
            <p v-html="val.phase" />
          </div>
          <div class="duration">
            <h3>制作時間</h3>
            <p v-html="val.time" />
          </div>
          <div class="tool">
            <h3>使用ツール</h3>
            <p v-html="val.tool" />
          </div>
          <div class="platform">
            <h3>対応機種</h3>
            <p v-html="val.platform" />
          </div>
          <div class="concept">
            <h3>コンセプト</h3>
            <div v-html="val.concept" />
          </div>
          <div v-show="val.target" class="target">
            <h3>ターゲット</h3>
            <div v-html="val.target" />
          </div>
          <div class="design">
            <h3>デザイン</h3>
            <div v-html="val.design" />
          </div>
          <div class="point">
            <h3>工夫点</h3>
            <div v-html="val.point" />
          </div>
          <div class="comment">
            <h3>コメント</h3>
            <div v-html="val.comment" />
          </div>
          <div class="site_link">
            <h3>サイトのリンク</h3>
            <p>
              <a :href="val.link" target="_blank" rel="noopener noreferrer">{{ val.title }}</a>
            </p>
          </div>
          <div class="source_link">
            <h3>ソースコードのリンク</h3>
            <p><a :href="val.source_link" target="_blank" rel="noopener noreferrer">GitHubでソースコードを確認</a></p>
          </div>
          <div class="bottom_close" @click="$emit('close', $event)">
            CLOSE
          </div>
        </div>
        <!-- /modal_detail -->
      </div>
      <!-- /modal_wrapper -->
    </div>
    <!-- /modal_content -->
  </div>
  <!-- /modal -->
</template>

<script lang="ts" setup>
const props = defineProps({
  val: {
    type: Object,
    required: true
  }
})
    defineEmits<{
    (e: "close", name: string): void
}>()
const imgSize = ''
//   props: ['val'],
//   data() {
//     return {
//       imgSize: '',
//     }
//   },
// }
</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.7);
}

.modal_close {
  display: block;
  width: 40px;
  font-size: 3.2rem;
  text-align: center;
  line-height: 40px;
  position: absolute;
  top: 0;
  right: 0;
  color: #000;
  background-color: var(--mainColor);
  border-radius: 4px;
  z-index: 99;
}

.modal_content {
  width: 90%;
  height: calc(100% - 40px);
  margin: 20px auto;
  background-color: var(--mainColor);
  animation-name: modalopen;
  animation-duration: 1s;
  border-radius: 4px;
  padding: 10px;
  position: relative;
}

.comment .line {
  border-bottom: 1px solid #000;
}

@keyframes modalopen {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.modal_wrapper {
  background-color: var(--mainColor);
  border-radius: 4px;
  border: 1px solid #ccc;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.modal_img img {
  border-radius: 4px 4px 0 0;
}

.modal_detail {
  background-color: #fff;
  padding: 10px;
  border-radius: 0 0 4px 4px;
  overflow: auto;
}

.modal_title {
  font-size: 1.6rem;
  text-align: center;
  font-weight: 500;
  letter-spacing: 1px;
}

.modal_title span {
  display: inline-block;
  position: relative;
  z-index: 1;
}

/* タイトルのラインマーカー */
.modal_title span::after {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  background: linear-gradient(transparent 60%, #ff6 60%);
}

.modal_detail h3 {
  line-height: 1;
  padding: 40px 0 5px;
}

.modal_detail :deep(p:nth-of-type(n + 2)) {
  margin-top: 20px;
}

/* INFOの文字にアンダーラインを加える */
.comment :deep(p .line) {
  border-bottom: 1px solid #000;
}

.site_link p {
  text-align: justify;
}

.site_link a,
.source_link a {
  border-bottom: 1px solid #000;
  font-style: italic;
  color: blue;
}

.bottom_close {
  width: 29.59%; /*100/337.95*/
  line-height: 40px;
  border-radius: 4px;
  letter-spacing: 1px;
  font-size: 2rem;
  margin: 20px auto 0;
  text-align: center;
  background-color: var(--mainColor);
  font-family: 'Oswald', sans-serif;
  border: 1px solid #ccc;
}

@media screen and (min-width: 768px) {
  .modal_content {
    padding: 15px;
  }

  .modal_content h3 {
    font-size: 2.4rem;
  }

  .modal_close {
    width: 90px;
    font-size: 6.4rem;
    line-height: 90px;
  }

  .modal_title {
    font-size: 2.4rem;
  }

  .modal_detail h3 {
    padding: 60px 0 10px;
  }

  .bottom_close {
    line-height: 60px;
    font-size: 2.4rem;
    margin: 40px auto 0;
    transition: all 0.3s ease;
  }

  @media (hover: hover) and (pointer: fine) {
    .bottom_close:hover {
      background-color: #000;
      color: #fff;
    }
  }
}

@media screen and (min-width: 1024px) and (orientation: landscape) {
  .modal_wrapper {
    flex-direction: row;
  }

  .modal_img img {
    max-height: 100%;
  }

  .modal_detail {
    padding: 90px 10px 10px;
    flex: 1;
    min-width: 420px;
  }
}

/* ipadの横向き */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
  .modal_title {
    font-size: 2rem;
  }

  .modal_content h3 {
    font-size: 2rem;
  }

  .modal_content :deep(p) {
    font-size: 1.4rem;
  }

  .modal_close {
    width: 45px;
    font-size: 3.2rem;
    line-height: 45px;
  }

  .bottom_close {
    line-height: 40px;
    font-size: 2rem;
  }

  .modal_img {
    flex-basis: 40%;
  }

  .modal_img img {
    height: 100%;
    flex-basis: 60%;
  }

  .modal_detail {
    padding: 45px 10px 10px;
    min-width: auto;
  }
}
</style>
