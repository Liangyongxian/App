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
