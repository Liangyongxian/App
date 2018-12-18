export function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + 'className' + '(\\s|$)')
  return reg.test(className)
}

export function addClass(el, className) {
  if (hasClass(el, className)) {
    return
  }
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

export function getData(el, name, val) {
  let prefix = 'data-'
  name = prefix + name
  if (val) {
    return el.setAttribute(name, val)
  } else {
    /* eslint-disable */
    /*  获取下面元素中的data-index对应的5
     <li data-v-5e19b76a="" data-v-32f276ac="" data-index="5" class="item"> F </li>
    */
    return el.getAttribute(name)
  }
}

let elementStyle = document.createElement('div').style

let vendor = (() => {
  let transformNames = {
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform',
    standard: 'transform'
  }

  for (let key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key
    }
  }

  return false
})()

export function prefixStyle(style) {
  if (vendor === false) {
    return false
  }

  if (vendor === 'standard') {
    return style
  }

  return vendor + style.charAt(0).toUpperCase() + style.substr(1)
}
