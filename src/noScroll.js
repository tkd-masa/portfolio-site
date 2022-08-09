const noScroll = {
    install(app) {
        const noScroll = (event) => { event.preventDefault() }

        const stopScroll = () => {
            document.addEventListener('touchmove', noScroll, { passive: false });
            document.addEventListener('mousewheel', noScroll, { passive: false });
        }
        app.config.globalProperties.$stopScroll = stopScroll;
        const openScroll = () => {
            document.removeEventListener('touchmove', noScroll, { passive: false });
            document.removeEventListener('mousewheel', noScroll, { passive: false });
        }
        app.config.globalProperties.$openScroll = openScroll;
    },
};

export default noScroll;