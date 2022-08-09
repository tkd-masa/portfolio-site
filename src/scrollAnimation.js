const scrollAnimation = {
    install(app) {
        const scrollAnimation = () => {
            let scrollValue = window.pageYOffset;
            // 画面の高さを取得
            let windowHeight = window.innerHeight;
            // はみ出させる値
            let value = 150;
            // 条件設定
            const scrollAni = document.querySelectorAll('.scroll_ani');
            for (let i = 0; i < scrollAni.length; i++) {
                // 取得した要素のtop値の取得 + スクロール量
                let scrollTop = scrollAni[i].getBoundingClientRect().top + scrollValue;
                //条件
                if (scrollValue > scrollTop - windowHeight + value) {
                    scrollAni[i].classList.add("is_ani");
                    //pcの場合、worksのhoverを設定する
                    let width = window.innerWidth;
                    if (width >= 768 && scrollAni[i].classList.contains('detail_link')) {
                        setTimeout(() => {
                        scrollAni[i].style.pointerEvents = "auto";
                        }, 1500);
                    }
                }
            }
        };
        app.config.globalProperties.$scrollAnimation = scrollAnimation;
    },
};

export default scrollAnimation;

