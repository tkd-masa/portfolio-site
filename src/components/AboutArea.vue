<script lang="ts" setup>
type Items = {
  id: number
  img_src: string
  title: string
  desc: string
}

const items: Items[] = [
  {
    id: 1,
    img_src: require('../assets/img/fav_icon1.png'),
    title: 'バスケットボール',
    desc: '中学、高校で6年間バスケットボール部に所属していました。アメリカのプロバスケットボールリーグ「NBA」が大好きです。大学生の時にロサンゼルス、トロントで観戦したことがあります。',
  },
  {
    id: 2,
    img_src: require('../assets/img/fav_icon2.png'),
    title: 'バイク',
    desc: '2年前にホンダの「モンキー125」というバイクを購入以来、休日にふらっと乗ることが楽しみになりました。身近にツーリング仲間がいないことが最近の悩みです。',
  },
  {
    id: 3,
    img_src: require('../assets/img/fav_icon3.png'),
    title: '映画鑑賞',
    desc: '休日に家で映画を鑑賞することが至福のひと時です。キアヌ・リーヴスが出演している「スピード」、「ジョンウィック」というアクション映画がお気に入りです。',
  },
  {
    id: 4,
    img_src: require('../assets/img/fav_icon4.png'),
    title: 'PCゲーム',
    desc: '休日に気分転換としてPCゲームを遊ぶのが好きです。最近は「APEX」と「DEAD BY DAYLIGHT」というゲームを夢中で遊んでいます。',
  },
]
</script>

<template>
  <div id="about" class="about_area">
    <h2 class="title scroll_ani">
      <span>about</span>
    </h2>
    <div class="profile scroll_ani">
      <h3 class="sub_title">
        <span>PROFILE</span>
      </h3>
      <div class="pc_flex">
        <div class="about_icon scroll_ani">
          <img src="../assets/img/about_icon.jpg" alt="" />
        </div>
        <div class="profile_detail scroll_ani">
          <div class="my_name">
            <p>武田 雅弘</p>
            <p>Masahiro Takeda</p>
          </div>
          <p>
            大学卒業後、IT企業のエンジニアとして就職。電通国際情報サービスにて某金融企業の為替取引システムを扱うプロジェクトの保守作業に約1年半参画。
            このプロジェクトにて、Linux系のサーバーで使われる「シェルスクリプト」と<span>エクセル</span>で使われる「VBA」の<span>2つ</span>の<span>プログラミング</span>言語を
            <span>経験。</span>
          </p>
          <p>
            JavaScriptとウェブ制作におけるUIデザインに現在興味があり、フロントエンドエンジニアとしての業務に挑戦するため、<span>2022年</span><span>1月</span>に退職。その後求職者支援訓練の「webクリエイター養成科」にて<span>3か月間</span>、HTML、CSS、illustrator、photoshopを学習。
            <span>2年間</span>バックエンドでの仕事を経験しているため、<span>プログラミング</span>の理解には自信があります。
          </p>
        </div>
      </div>
    </div>
    <!-- /about_flex -->
    <div class="favorite">
      <h3 class="sub_title scroll_ani">
        <span>FAVORITE</span>
      </h3>
      <ul class="fav_flex">
        <li v-for="item in items" :key="item.id" class="fav_list scroll_ani">
          <div class="fav_icon">
            <img :src="item.img_src" alt="" />
          </div>
          <div class="detail">
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <!-- /about_area -->
</template>

<style scoped>
.sub_title {
  font-size: 2.4rem;
  font-family: 'Oswald', sans-serif;
  letter-spacing: 1px;
  margin-bottom: 15px;
  text-align: center;
}

.sub_title span {
  display: inline-block;
  position: relative;
}

.sub_title span:before,
.sub_title span:after {
  content: '';
  position: absolute;
  top: 50%;
  display: inline-block;
  width: 45px;
  height: 1px;
  background-color: black;
}

.sub_title span:before {
  left: -70%;
}
.sub_title span:after {
  right: -70%;
}

.about_area {
  margin-bottom: 64px;
}

.about_icon {
  text-align: center;
  margin-bottom: 10px;
}

.about_icon img {
  width: 48%; /* 180/375 */
  clip-path: circle(50% at 50% 50%);
}

.my_name {
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 40px;
}

.my_name p {
  margin-bottom: 0 !important;
}

.profile {
  background-color: var(--mainColor);
  padding: 10px;
  margin-bottom: 20px;
}

.profile_detail p {
  text-align: center;
  letter-spacing: 1px;
  margin-bottom: 20px;
}

.profile_detail p:last-child {
  margin-bottom: 0;
}

.fav_icon {
  width: 96px;
  text-align: center;
}

.fav_icon img {
  width: 96px;
}

.fav_list .detail {
  padding-left: 10px;
  flex: 1;
}

.fav_list {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
}

@media screen and (min-width: 768px) {
  .sub_title {
    font-size: 3.2rem;
    margin-bottom: 30px;
  }

  .about_area {
    margin-bottom: 200px;
  }

  .pc_flex {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: var(--mainColor);
    padding: 20px;
  }

  .about_icon img {
    width: 265px;
    clip-path: circle(50% at 50% 50%);
  }

  .profile {
    margin-bottom: 40px;
  }

  .profile_detail {
    width: 600px;
    padding: 32px 56px;
    background-color: #fff;
    transition-delay: 0.5s;
  }

  .profile_detail p {
    text-align: justify;
  }

  .fav_flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .fav_list {
    width: 465px;
    margin-bottom: 80px;
  }

  .fav_list:nth-of-type(2n) {
    transition-delay: 0.5s;
  }
}
</style>
