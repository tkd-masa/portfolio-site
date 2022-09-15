<script lang="ts" setup>
import { onMounted } from 'vue'
import LoaderArea from '@/components/LoaderArea.vue'
import HeaderArea from '@/components/HeaderArea.vue'
import HeroimgArea from '@/components/HeroimgArea.vue'
import AboutArea from '@/components/AboutArea.vue'
import WorksArea from '@/components/WorksArea.vue'
import SkillsArea from '@/components/SkillsArea.vue'
import FooterArea from '@/components/FooterArea.vue'
import scrollAnimation from '@/lib/scrollAnimation'

onMounted(() => {
  // リロードした時にトップから表示させる処理
  history.scrollRestoration = 'manual'
  //スクロールしたときにscrollAnimationの関数を実行
  window.addEventListener('scroll', scrollAnimation)
  // タブレットをpc画面の縮小サイズで表示する設定
  const baseW = 1040 // viewportのwidth
  const ua = navigator.userAgent

  const sp = ua.indexOf('iPhone') > -1 || (ua.indexOf('Android') > -1 && ua.indexOf('Mobile') > -1)
  const tab =
    !sp &&
    (ua.indexOf('iPad') > -1 ||
      (ua.indexOf('Macintosh') > -1 && 'ontouchend' in document) ||
      ua.indexOf('Android') > -1)

  if (tab) {
    const viewportContent = 'width=' + baseW + 'px,user-scalable=no'
    document.querySelector("meta[name='viewport']")?.setAttribute('content', viewportContent)
  }
})
</script>

<template>
  <LoaderArea />
  <HeaderArea />
  <HeroimgArea />
  <main>
    <div class="inner">
      <AboutArea />
      <WorksArea />
      <SkillsArea />
    </div>
  </main>
  <FooterArea />
</template>

<style>
:root {
  --mainColor: rgb(249, 248, 244);
  --textFont: 'Noto Sans JP', sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  line-break: strict;
  font-feature-settings: 'palt';
  font-family: var(--textFont);
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: #000;
}

img {
  width: 100%;
  height: auto;
  vertical-align: bottom;
}

main {
  background-color: #fff;
}

.inner {
  padding: 0 20px 40px;
}

.title {
  text-align: center;
  font-size: 3.2rem;
  font-family: 'Oswald', sans-serif;
  margin-bottom: 30px;
  text-transform: uppercase;
  letter-spacing: 4px;
}

p {
  font-size: 1.4rem;
  line-height: 2;
}

/* 単語の途中で改行を入れないようにする設定 */
p span {
  display: inline-block;
}

h3 {
  font-size: 1.6rem;
}

.title span {
  display: inline-block;
  position: relative;
}

/* タイトルのラインマーカー */
.title span::after {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  background: linear-gradient(transparent 60%, #ff6 60%);
  transition: all 1s ease;
  transition-delay: 0.5s;
  transform: scale(0, 1);
  transform-origin: left top;
}

.title.is_ani span::after {
  transform: scale(1, 1);
}

/* スクロールのアニメーション設定 */
.scroll_ani {
  transition: all 1s cubic-bezier(0.33, 0.56, 0.56, 1);
  transform: translate3d(0, 18vw, 0);
  opacity: 0;
  visibility: hidden;
}

.scroll_ani.is_ani {
  opacity: 1;
  visibility: visible;
  transform: translate3d(0, 0, 0);
}
@media screen and (min-width: 768px) {
  .inner {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 0 120px;
  }

  .title {
    font-size: 6rem;
  }

  p {
    font-size: 1.6rem;
  }

  h3 {
    font-size: 2rem;
  }

  /* スクロールのアニメーション設定 */
  .scroll_ani {
    transform: translate3d(0, 60px, 0);
  }
}
</style>
