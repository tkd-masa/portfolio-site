<script lang="ts" setup>
import { ref } from 'vue'
const open = ref<boolean>(false)
const items: { id: number; link: string; itemName: string }[] = [
  {
    id: 1,
    link: '#page_top',
    itemName: 'TOP',
  },
  {
    id: 2,
    link: '#about',
    itemName: 'ABOUT',
  },
  {
    id: 3,
    link: '#works',
    itemName: 'WORKS',
  },
  {
    id: 4,
    link: '#skills',
    itemName: 'SKILLS',
  },
]
</script>

<template>
  <header class="header">
    <div class="header_inner">
      <div class="head_fix">
        <!--ハンバーガーメニュー-->
        <div class="nav_btn" :class="{ is_active: open }" @click="open = !open">
          <span />
          <span />
          <span />
        </div>
      </div>
      <nav class="header_nav" :class="{ is_active: open }">
        <ul class="header_nav_list">
          <li v-for="item in items" :key="item.id" class="header_nav_item">
            <a v-scroll-to="item.link" class="header_nav_item_link" @click="open = false">{{ item.itemName }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header_inner {
  position: fixed;
  z-index: 99;
  width: 100%;
  top: 0;
}

.head_fix {
  width: 100%;
  height: 65px;
  position: relative;
  background-color: #fff;
}

/* ハンバーガーメニュー */
.nav_btn {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 65px;
  text-align: center;
  z-index: 100;
  position: absolute;
  top: 0;
  right: 0;
}

.nav_btn span {
  display: block;
  width: 35px; /* 35/65 */
  height: 2px;
  background-color: #000;
  margin: 0 auto;
  z-index: 99;
  transition: all 0.5s ease;
}

.nav_btn span:nth-of-type(2) {
  margin: 6px auto;
}

.header_nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  transform: translateX(100%);
  opacity: 0;
  transition: 0.3s 0.2s;
  padding-top: 130px;
  z-index: 98;
  background-repeat: no-repeat;
  background-position: center;
}

.header_nav_item {
  font-family: 'Oswald', sans-serif;
  letter-spacing: 2px;
}

.is_active.header_nav {
  opacity: 1;
  transform: translate(0);
}

.is_active.nav_btn span:nth-of-type(1) {
  transform: translateY(8px) rotate(45deg);
}

.is_active.nav_btn span:nth-of-type(2) {
  opacity: 0;
}

.is_active.nav_btn span:nth-of-type(3) {
  transform: translateY(-8px) rotate(-45deg);
}

.header_nav_item {
  font-size: 3.2rem;
  margin: 50px 0;
  text-align: center;
}

@media screen and (min-width: 768px) {
  .nav_btn {
    display: none;
  }

  .header_nav {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 1;
    padding-top: 0;
    max-width: 1020px;
    margin: 0 auto;
    height: auto;
  }

  .header_nav_list {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header_nav_item {
    width: 155px;
    margin: 0;
    padding: 0;
    text-align: center;
    font-size: 2.4rem;
  }

  .header_nav_item_link {
    transition: all 0.2s ease;
  }

  /* タブレットではhoverを無効にする */
  @media (hover: hover) and (pointer: fine) {
    .header_nav_item_link:hover {
      opacity: 0.5;
    }
  }
}
</style>
