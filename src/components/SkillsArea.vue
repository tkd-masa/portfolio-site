<script lang="ts" setup>
const items: { id: number; title: string; desc: string; img_src: string }[] = [
  {
    id: 1,
    title: 'HTML/CSS',
    desc: 'レスポンシブ対応のwebサイト作成、emmetを用いた効率的なコーディングができます。エディタは主にVSCODEを使用してます。',
    img_src: require('../assets/img/html_icon.png'),
  },
  {
    id: 2,
    title: 'JS/jQuery',
    desc: 'JavaScriptを用いてハンバーガーメニュー、モーダルウィンドウの作成ができます。またjQueryのプラグイン「slick」を用いたスライドショーの作成ができます。',
    img_src: require('../assets/img/js_icon.png'),
  },
  {
    id: 3,
    title: 'photoshop',
    desc: 'トーンカーブを用いた画像のコントラスト調整、クイックマスクモードを用いた画像の切り抜きができます。',
    img_src: require('../assets/img/ps_icon.png'),
  },
  {
    id: 4,
    title: 'illustrator',
    desc: 'ペンツール、パスファインダーを用いて簡単なロゴを作成できます。また職業訓練校在学中に、illustratorを使用してワイヤーフレームの作成を行いました。',
    img_src: require('../assets/img/ai_icon.png'),
  },
  {
    id: 5,
    title: 'DreamWeaver',
    desc: '職業訓練校在学中にdreamWeaverを用いて、サイトを作成した経験があるため、サイトの定義と管理の方法など基礎的な知識があります。',
    img_src: require('../assets/img/dw_icon.png'),
  },
  {
    id: 6,
    title: 'Adobe XD',
    desc: '図形、テキストの機能を使用してワイヤーフレームを作成することができます。プロトタイプの使い方にはまだ慣れていないため、勉強中です。',
    img_src: require('../assets/img/xd_icon.png'),
  },
  {
    id: 7,
    title: 'Vue.js',
    desc: '「Vue CLI」を使って、単一ファイルコンポーネントの作成とビルドができます。このポートフォリオサイトも「Vue CLI」を使い作成しました。文法と「Vue-Router」について現在勉強中です。',
    img_src: require('../assets/img/vue_icon.png'),
  },
  {
    id: 8,
    title: 'TypeScript',
    desc: '入門書を1冊読みながら、文法の理解に努めました。データ型を使用した変数、配列、メソッドの使い方についての理解があります。',
    img_src: require('../assets/img/ts_icon.png'),
  },
  {
    id: 9,
    title: 'React',
    desc: 'JSXを使ったコーディングをブログ作成を通して学びました。Next.jsを組み合わせたSSGでのWebサイト作成についての理解があります。',
    img_src: require('../assets/img/react_icon.png'),
  },
  {
    id: 10,
    title: 'Git',
    desc: 'CUIを使って、ステージエリアにファイルを追加、ブランチの作成、コミット、GitHubへプッシュなどの基本コマンドを操作することができます。',
    img_src: require('../assets/img/git_icon.png'),
  },
]
</script>

<template>
  <div id="skills" class="skills_area">
    <h2 class="title scroll_ani">
      <span>skills</span>
    </h2>
    <ul class="skills_flex">
      <li v-for="item in items" :key="item.id" class="skills_list scroll_ani">
        <div class="skills_icon">
          <img :src="item.img_src" alt="" />
        </div>
        <div class="detail">
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
  <!-- /skill_area-->
</template>

<style scoped>
.skills_area h3 {
  font-size: 1.8rem;
}

.skills_list {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
}

.skills_list .detail {
  padding-left: 10px;
  flex: 1;
}

.skills_icon {
  width: 96px; /* 96/375 */
  text-align: center;
}

.skills_icon img {
  width: 96px;
}

.skills_icon i {
  font-size: 85px;
}

.skills_area p {
  font-size: 1.4rem;
}

@media screen and (min-width: 768px) {
  .skills_flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .skills_area h3 {
    font-size: 2.4rem;
  }

  .skills_list {
    width: 465px;
    margin-bottom: 80px;
  }

  .skills_list:nth-of-type(2n) {
    transition-delay: 0.5s;
  }

  .skills_area p {
    font-size: 1.6rem;
  }
}
</style>
