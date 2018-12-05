/* 存放常量 */
import * as types from './mutation-types'

export const mutations = {
  /* 方法名是types.SET_SINGER，参数是state, singer；第一个参数是state文件里的常量，第二个参数是提交mutation时候的playload */
  [types.SET_SINGER](state, singer) {
    state.singer = singer
  }
}

export default mutations
