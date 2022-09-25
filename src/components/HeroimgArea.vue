<script lang="ts" setup>
import { onMounted } from 'vue'
import { stopScroll, openScroll } from '@/lib/noScroll'
import { wrapCharSpan } from '@/lib/wrapCharSpan'

onMounted(() => {
  //初回ロード時に3秒間スクロールを止める処理
  stopScroll()
  //3秒後にスクロール固定を解除
  setTimeout(() => {
    openScroll()
  }, 3000)

  //対象の要素に対してspanタグを適用
  const keyTitle = document.querySelectorAll<HTMLElement>('.keyvisual_title')
  keyTitle.forEach((el) => {
    if (typeof el.textContent === 'string') {
      el.innerHTML = wrapCharSpan(el.textContent.trim())
    }
  })

  //タイトルの「Takeda」の後ろに改行コードを入れる処理
  const titDiv = document.querySelectorAll<HTMLElement>('.keyvisual_title div')
  titDiv[14].insertAdjacentHTML('afterend', '<br>')

  //タイトルに一文字ずつtransition-delayを付加する
  const titSpan = document.querySelectorAll<HTMLElement>('.keyvisual_title span')
  titSpan.forEach((el, index) => {
    el.style.transitionDelay = index * 0.06 + 's'
  })

  //heroイメージの文字を出現させる
  setTimeout(() => {
    keyTitle[0].classList.add('is_ani')
  }, 1000)
})
</script>

<template>
  <div id="page_top" class="big_bg">
    <h1 class="keyvisual_title">Masahiro&nbsp;Takeda<br />Portfolio</h1>
  </div>
</template>

<style scoped>
.big_bg {
  height: 100vh;
}

.big_bg::before {
  content: '';
  background-image: url(../assets/img/hero_img.jpg);
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  margin-bottom: 40px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
}

.keyvisual_title {
  position: absolute;
  width: 100%;
  top: calc(30% + 10px);
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 4rem;
  font-family: 'Oswald', sans-serif;
  letter-spacing: 2px;
  line-height: 1.2;
}

@media screen and (min-width: 768px) {
  .keyvisual_title {
    font-size: 10rem;
    letter-spacing: 4px;
  }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
  .keyvisual_title {
    font-size: 8rem;
    letter-spacing: 2px;
  }
}
</style>

<style>
.keyvisual_title div,
.keyvisual_title span {
  display: inline-block;
}

.keyvisual_title div {
  overflow: hidden;
}

.keyvisual_title span {
  transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
  transform: matrix(0.97, 0.26, -0.26, 0.97, 0, 120);
}

.keyvisual_title.is_ani span {
  transform: matrix(1, 0, 0, 1, 0, 0);
}
</style>
