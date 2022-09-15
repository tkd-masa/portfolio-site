export const wrapCharSpan = (str: string): string => {
  return [...str].map((char) => `<div><span>${char}</span></div>`).join('')
}
