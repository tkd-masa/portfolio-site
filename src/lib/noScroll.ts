const noScroll = (event: Event) => {
  event.preventDefault()
}

const opts: AddEventListenerOptions & EventListenerOptions = { passive: false }

export const stopScroll = () => {
  document.addEventListener('touchmove', noScroll, opts)
  document.addEventListener('mousewheel', noScroll, opts)
}
// app.config.globalProperties.$stopScroll = stopScroll
// app.provide("stopScroll", stopScroll)
export const openScroll = () => {
  document.removeEventListener('touchmove', noScroll, opts)
  document.removeEventListener('mousewheel', noScroll, opts)
}
// app.config.globalProperties.$openScroll = openScroll
// app.provide("openScroll", openScroll)
