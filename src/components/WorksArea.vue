<script lang="ts" setup>
import ModalArea from '@/components/ModalArea.vue'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { onMounted, ref } from 'vue'

type WorksLists = {
  id: number
  title: string
  desc: string
  img_src: string
}

type Items = {
  id: number
  title: string
  phase: string
  time: string
  tool: string
  platform: string
  concept: string
  target?: string
  design: string
  point: string
  comment: string
  link: string
  source_link: string
  img_src: string
  img_src_pc: string
}

//Modalの表示、非表示を管理する変数
const showContent = ref<boolean>(false)
//Modal表示時に背景スクロールをさせないようにする処理で使う変数
let modal_detail: Element | null, scrollValue: string
//propsで子コンポーネントに渡す値を入れる変数
const postItem = ref<Items | string>('')

//Worksで表示する値を用意
const worksLists: WorksLists[] = [
  {
    id: 1,
    title: 'No.1 <br>花屋のwebサイト',
    desc: '2022年4月の職業訓練校在学中に<span>制作。</span><br>環境に優しい花屋を<span>テーマ</span>に<span>作成</span>した架空のサイトです。',
    img_src: require('../assets/img/works_img1.jpg'),
  },
  {
    id: 2,
    title: 'No.2 <br>カフェのwebサイト',
    desc: '2022年5月の職業訓練校在学中に<span>制作。</span><br>バイク好きが集まるカフェを<span>テーマ</span>に<span>作成</span>した架空のサイトです。',
    img_src: require('../assets/img/works_img2.jpg'),
  },
  {
    id: 3,
    title: 'No.3 <br>グランピング施設の<br>webサイト',
    desc: '職業訓練校卒業後に作成。<br>自然と大切な人との時間をコンセプトにしたグランピング施設の架空サイトです。',
    img_src: require('../assets/img/works_img3.jpg'),
  },
  {
    id: 4,
    title: 'No.4 <br>Portfolioサイト',
    desc: '職業訓練校卒業後に自分の作品についてまとめるために作成。今ご覧になっているサイトです。<br>JavaScriptのフレームワーク「Vue.js」を用いて作成しました。',
    img_src: require('../assets/img/works_img4.jpg'),
  },
  {
    id: 5,
    title: 'No.5 <br>技術者ブログ',
    desc: '普段学んだ技術について備忘録としてまとめるために作成。フロントエンドの技術であるReact/Next.jsを用いて作成いたしました。',
    img_src: require('../assets/img/works_img5.jpg'),
  },
]

//モーダルウィンドウで表示する値を用意
const items: Items[] = [
  {
    id: 1,
    title: '花屋「LAB」',
    phase: '企画/設計/デザイン/コーディング',
    time: '10日(職業訓練校在学中)',
    tool: 'HTML/CSS/JQuery/illustrator/photoshop',
    platform: 'PC',
    concept:
      '<p>環境に優しい花屋をコンセプトに作成したドライフラワー/ブリザードフラワー専門店の花屋のwebサイトです。</p>',
    target: '<p>20～30代の母の日、または誕生日の贈り物として花を探している女性です。</p>',
    design:
      '<p>サイトのデザインは、環境に優しい花屋のイメージを伝えるために、ベースカラーに緑色系のアースカラー、メインカラーに白、アクセントカラーに黒を用いてナチュラルで優しい雰囲気のサイトに仕上げました。</p><p>フォントは女性に好まれるデザインを意識し、欧文はserifベース、和文は明朝体の細い字体を取り入れて統一感を持たせました。</p><p>サイトに用いているロゴは、エコロジーなイメージをサイトを観ている人たちに伝えられるように、地球と新芽を組み合わせたロゴをillustratorを使用して作成しました。</p>',
    point:
      '<p>TOPページではcssのflexboxを活用して複数の写真を、近接と整列を意識して配置しました。</p><p>サブタイトルがスクロールに合わせて左から右へ流れて出現するように、cssとJavaScriptを用いてアニメーションを作成しました。</p>',
    comment:
      '<p>今回の作品が初めてのWeb制作でしたが、白と緑色系のアースカラーを組み合わせた配色、細い字体のフォントがうまくマッチして見栄えのいいサイトができたと思います。<br>6ページ分のワイヤーフレームを作成する工程が大変でしたが、画像のサイズ、要素の配置を事前にしっかり決めておくことで、コーディング作業をスムーズに行うことができました。</p><p>作成したページは、「top」,「about us」,「item」,「access」,「company」,「contact」となっております。</p>',
    link: 'https://ikb-404.com/takeda/flower/',
    source_link: 'https://github.com/tkd-masa/flower-site',
    img_src: require('../assets/img/modal_img1.jpg'),
    img_src_pc: require('../assets/img/modal_img1_pc.png'),
  },
  {
    id: 2,
    title: 'カフェ「OFF ROAD」',
    phase: '企画/設計/デザイン/コーディング',
    time: '11日(職業訓練校在学中)',
    tool: 'HTML/CSS/JQuery/illustrator/photoshop',
    platform: 'SP/iPad/PC',
    concept: '<p>バイクのツーリング途中でくつろげる休憩スポットをコンセプトに作成したカフェのwebサイトです。</p>',
    target: '<p>40代の会社勤務のサラリーマンで、バイクに乗ることが趣味の男性です。</p>',
    design:
      '<p>ターゲット層の年代の方々は、古いモデルのバイクを好んで乗る方が多いイメージだったので、アメリカンビンテージをテーマにデザイン作成をしました。</p><p>サイトの配色は、ベースカラーを肌色、メインカラーを黄色、アクセントカラーを彩度を下げた水色とサーモンピンクを用いてターゲット層が好みそうなヴィンテージ加工を施したデザインで作成しました。</p>',
    point:
      '<p>JavaScriptを使い、ナビゲーションメニューを押したときに、リンク先へスクロールする機能を施し、ユーザビリティの向上に努めました。</p><p><span class="line">Info</span>の項目では、当日の営業時間と定休日が一目で確認できるようにJavaScriptを使い、カレンダーを挿入しました。</p>',
    comment:
      '<p>シングルページで構成されたレスポンシブ対応のウェブサイトとなります。今回の作品が初めてのモバイルファーストでのサイト作成だったので、ハンバーガーメニューの作成、画像とGoogleMapの可変を施す作業が苦労しました。最終的にはスマホでデザイン通りにサイトを写すことができ、ハンバーガーメニューも無事に実装することができたので、自分のスキルに自信をつけることができました。</p>',
    link: 'https://ikb-404.com/takeda/cafe/',
    source_link: 'https://github.com/tkd-masa/cafe-site',
    img_src: require('../assets/img/modal_img2.jpg'),
    img_src_pc: require('../assets/img/modal_img2_pc.png'),
  },
  {
    id: 3,
    title: 'グランピング施設「Green Castle」',
    phase: '企画/設計/デザイン/コーディング',
    time: '14日(職業訓練校卒業後)',
    tool: 'HTML/CSS/Vue.js/illustrator/photoshop',
    platform: 'SP/iPad/PC',
    concept: '<p>自然と大切な人との時間を過ごせる空間をコンセプトに作成したグランピング施設のwebサイトです。</p>',
    target: '<p>20～30代男女の団体客で、手ぶらで本格的なキャンプを楽しみたいキャンプ未経験者です。</p>',
    design:
      '<p>サイトのデザインは、ベースカラーを蒸栗色、メインカラーを彩度を下げた緑色、アクセントカラーをシアン青色の明るい色を用いて、グランピング施設のテーマである自然を表現した雰囲気に仕上げました。</p><p>ロゴのデザインは、テントと自然をテーマに、テントのイラストに木の形を型抜いて表現しました。</p>',
    point:
      '<p>他のページに遷移する際に、アニメーションのライブラリ「gsap」を用いて、フェードインアニメーションでリンク先のページが滑らかに表示されるように工夫しました。</p><p><span class="line">FAQ</span>のページでは、質問項目をクリックしたら、下から回答が現れるアコーディオンメニューを「Vue.js」で作成しました。</p>',
    comment:
      '<p>JavaScriptのフレームワーク、「Vue.js」のライブラリである「Vue-Router」を用いた、SPAが特徴のウェブサイトです。職業訓練終了後のコーディングのブラッシュアップ、今興味があるVue.jsについて、作品を作りながら学んで行きたいという2つの理由から作成に至りました。<br>「Vue-Router」でのSPAページの作成は、独学で公式ドキュメントとQiitaなどに載っている情報を参考に行っていきました。他のページへの遷移後に、スクロールの位置がトップに戻らない問題があり、それを解決するのに苦労しました。</p><p>作成したページは「HOME」,「TENT」,「FOOD」,「FAQ」,「ACCESS」となっております。</p>',
    link: 'https://ikb-404.com/takeda/gramping/',
    source_link: 'https://github.com/tkd-masa/gramping-site',
    img_src: require('../assets/img/modal_img3.jpg'),
    img_src_pc: require('../assets/img/modal_img3_pc.png'),
  },
  {
    id: 4,
    title: 'Portfolioサイト',
    phase: '企画/設計/デザイン/コーディング',
    time: '18日(職業訓練校卒業後)',
    tool: 'HTML/CSS/Vue.js/illustrator/photoshop',
    platform: 'SP/iPad/PC',
    concept:
      '<p>職業訓練校卒業後、自分が作った作品についてまとめるために作成したポートフォリオサイトです。今ご覧になっているサイトとなります。</p><p>ポートフォリオサイトなので、作品が増えることを想定してvue.jsの単一ファイルコンポーネント技術を使い保守性を意識したウェブサイトにしました。</p>',
    design:
      '<p>サイトのデザインは画像がはっきり見えるようにベースカラーを白、メインカラーをグレーに近い色を用いてシンプルに仕上げました。</p>',
    point:
      '<p>最初に表示されるファーストビューのタイトルにアニメーションをつけて印象づけるように工夫を施しました。</p><p>Vue.jsを用いて、モーダルウィンドウの記述を再利用できるようにコンポーネント化をして、コーディングの重複をなくすように心がけました。</p>',
    comment:
      '<p>JavaScriptのフレームワークVue.jsを用いて作成しました。Vue.jsで作成した理由は2つあります。<br>1つ目はモーダルウィンドウなどの同じ記述が出てくる箇所を、再利用できるようにコンポーネント化を施したかったためです。<br>2つ目は、フロントエンドエンジニアでの仕事において、今後JavaScriptのフレームワークの知識が必要になる機会があるかも知れないと思ったので、時間のあるときに予習をしておきたかったためです。</p><p>Vue.jsは6月から学び始めたので、知識についてはまだまだ不足していますが、作品作りを通して学んでいくことで、やりたいことを実装できた時の達成感もあり、楽しく学ぶことができました。</p>',
    link: 'https://ikb-404.com/takeda/portfolio/',
    source_link: 'https://github.com/tkd-masa/portfolio-site',
    img_src: require('../assets/img/modal_img4.jpg'),
    img_src_pc: require('../assets/img/modal_img4_pc.png'),
  },
  {
    id: 5,
    title: '技術者ブログ「takeLog」',
    phase: '企画/設計/デザイン/コーディング',
    time: '17日(職業訓練校卒業後)',
    tool: 'HTML/CSS/React/Next.js/TypeScript<br>microCMS/Vercel/illustrator',
    platform: 'SP/iPad/PC',
    concept:
      '<p>普段自分が学んだ新しい知識について、まとめるための技術者ブログを作成しました。</p><p>作成した目的は2点ございます。<br>1つ目はフロントエンドの技術であるreact/next.jsのアウトプットを図り、技術力を向上させることです。<br>2つ目は普段学んだ知識について忘れないように備忘録として残し、共有できるようにすることです。</p>',
    design:
      '<p>サイトのデザインは、ベースカラーに明るい色合いのシアン色、メインカラーに白と黒を用いて作成しました。</p><p>記事の一覧はcssのgridを用いてスマホページでは1列、pcでは2列になるように配置を施しました。</p>',
    point:
      '<p>microCMSというヘッドレスCMSを使用して記事の投稿内容を取得し、表示させるようにしました。</p><p>Next.jsのSSGというビルド時にHTMLファイルを作成する技術を用いることで、リクエストのレスポンスを高速化しました。</p><p>VercelというWebホスティングサービスを利用し、GitHubのリポジトリと連携させてビルドとデプロイを行いました。</p>',
    comment:
      '<p>フロントエンドの技術であるreact/Next.jsの勉強を兼ねて、学んだ技術を共有できるように技術者ブログを作成しました。</p><p>TypeScriptを導入して作成したので、型のエラーが出た際に自分で調べながら解決していく作業が一番苦労しました。</p><p>ブログは初心者なので、わかりやすく相手に伝える記事を書く力を他の技術者ブログを参考にしながら向上させていけたらと考えています。</p>',
    link: 'https://takelog.vercel.app/',
    source_link: 'https://github.com/tkd-masa/blog',
    img_src: require('../assets/img/modal_img5.jpg'),
    img_src_pc: require('../assets/img/modal_img5_pc.png'),
  },
]

//modal_detailクラスの要素を取得
onMounted(() => {
  modal_detail = document.querySelector('.modal_detail')
})

//Worksの作品をクリック時に詳細が書かれたモーダルウィンドウを表示
const openModal = (index: number) => {
  if (modal_detail != null) {
    disableBodyScroll(modal_detail)
  }
  document.body.style.top = `-${window.scrollY}px`
  scrollValue = document.body.style.top
  showContent.value = true
  postItem.value = items[index]
}

//×ボタンまたはcloseボタンが押された際に、モーダルウィンドウを閉じる
const closeModal = (e: Event) => {
  const reg = /^(modal|modal_close|bottom_close)$/
  if (reg.test((e.target as HTMLInputElement).className)) {
    //モーダル内のスクロール位置をリセット
    if (modal_detail != null) {
      enableBodyScroll(modal_detail)
    }
    if (modal_detail?.scrollTop) {
      modal_detail.scrollTop = 0
    }
    showContent.value = false
    preventScrollTop()
  }
}

//モーダルウィンドウを閉じた際に、スクロールがページのトップに戻るのを防ぐ
const preventScrollTop = () => {
  const scrollY = scrollValue
  document.body.style.top = ''
  window.scrollTo(0, parseInt(scrollY || '0') * -1)
}
</script>

<template>
  <div id="works" class="works_area">
    <h2 class="title scroll_ani">
      <span>works</span>
    </h2>
    <ul class="works_flex">
      <li
        v-for="(worksList, index) in worksLists"
        :key="worksList.id"
        class="works_list detail_link scroll_ani"
        @click="openModal(index)"
      >
        <div class="works_img">
          <img :src="worksList.img_src" alt="" />
        </div>
        <div class="detail">
          <h3 v-html="worksList.title" />
          <p v-html="worksList.desc" />
        </div>
        <div class="link_hover">
          <span>View detail</span>
        </div>
      </li>
    </ul>
    <ModalArea v-show="showContent" :val="postItem" @close="closeModal" />
  </div>
  <!-- /works_area -->
</template>

<style scoped>
.works_area {
  margin-bottom: 64px;
}

.works_list {
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
  box-shadow: rgb(60 64 67 / 30%) 0px 1px 2px 0px, rgb(60 64 67 / 15%) 0px 1px 3px 1px;
  padding: 2px;
}

.works_list:last-child {
  margin-bottom: 0;
}

.works_img {
  width: 135px;
  flex-shrink: 0;
}

.works_list .detail {
  padding: 3.095%; /*10/323 */
  position: relative;
  flex-grow: 1;
}

.works_list .detail p {
  margin-top: 10px;
}

.works_title {
  text-align: center;
  line-height: 2;
}

/* スマホではhoverを隠す */
.link_hover {
  display: none;
}
@media screen and (min-width: 768px) {
  .works_area {
    margin-bottom: 200px;
  }

  .works_flex {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .works_list {
    justify-content: center;
    margin-bottom: 0;
    padding: 4px;
  }

  .works_list:nth-of-type(2n) {
    margin-right: 0;
    transition-delay: 0.5s;
  }

  .works_list:nth-of-type(n + 3) {
    margin-top: 20px;
  }

  .works_img {
    width: 190px;
    height: 350px;
  }

  .works_list .detail {
    width: 300px;
    padding: 20px;
  }

  .works_list .detail br {
    display: none;
  }

  /* works_listのhover設定 */
  .detail_link {
    pointer-events: none;
    position: relative;
  }

  .link_hover {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    display: block;
    opacity: 0;
    transition: all 0.5s ease;
    font-family: 'Oswald', sans-serif;
  }

  .link_hover span {
    display: block;
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 5rem;
    letter-spacing: 2px;
    text-align: center;
  }

  /* タブレットではhoverを無効にする */
  @media (hover: hover) and (pointer: fine) {
    .detail_link:hover .link_hover {
      opacity: 1;
    }
  }
}
</style>
