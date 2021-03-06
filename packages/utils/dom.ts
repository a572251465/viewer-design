export const on = function (
  element: HTMLElement | Document | (Window & { nodeName: string }),
  event: string,
  handler: EventListenerOrEventListenerObject,
  useCapture = false
): void {
  if (element && event && handler) {
    if (['BODY', 'HTML'].includes(element.nodeName)) {
      // @ts-ignore
      element.onscroll = handler
    } else {
      element.addEventListener(event, handler, useCapture)
    }
  }
}

export const off = function (
  element: HTMLElement | Document | (Window & { nodeName: string }),
  event: string,
  handler: EventListenerOrEventListenerObject
): void {
  if (element && event && handler) {
    if (['BODY', 'HTML'].includes(element.nodeName)) {
      element.onscroll = null
    } else {
      element.removeEventListener(event, handler, false)
    }
  }
}

const whitespaceRE = /\s+/
export const addClass = (
  el: HTMLElement | HTMLDivElement,
  className: string
) => {
  if (className) {
    className = className.trim()
  }
  if (!className) return false

  if (el.classList) {
    if (className.indexOf(' ') > -1) {
      className.split(whitespaceRE).forEach((c) => el.classList.add(c))
    } else {
      el.classList.add(className)
    }
  } else {
    const cur = ` ${el.getAttribute('class') || ''} `
    if (cur.indexOf(` ${className} `) < 0) {
      el.setAttribute('class', (cur + className).trim())
    }
  }
}

export const removeClass = (
  el: HTMLElement | HTMLDivElement,
  className: string
) => {
  if (className) {
    className = className.trim()
  }
  if (!className) return false

  if (el.classList) {
    if (className.indexOf(' ') > -1) {
      className.split(whitespaceRE).forEach((c) => el.classList.remove(c))
    } else {
      el.classList.remove(className)
    }
    if (!el.classList.length) {
      el.removeAttribute('class')
    }
  } else {
    let cur = ` ${el.getAttribute('class') || ''} `
    const tar = ` ${className} `
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ')
    }
    cur = cur.trim()
    if (cur) {
      el.setAttribute('class', cur)
    } else {
      el.removeAttribute('class')
    }
  }
}
