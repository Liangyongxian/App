import jsonp from '../common/js/jsonp'
import {commonParams, options} from './config'

export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uid: 0,
    needNewCode: 1
  })

  return jsonp(url, data, options)
}

export function getDiscList() {
  const url = 'https://c.y.qq.com/mv/fcgi-bin/getmv_by_tag'

  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUnit: 0,
    loginUin: 0,
    notice: 0,
    needNewCode: 0,
    cmd: 'shoubo',
    lan: 'all'
  })

  return jsonp(url, data, options)
}
