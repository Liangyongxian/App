import jsonp from '../common/js/jsonp'
import {commonParams, options} from './config'

/* eslint-disable */

/*export function getSingerList() {
  const url = ' https://u.y.qq.com/cgi-bin/musicu.fcg'

  const data = Object.assign({}, commonParams, {
    jsonpCallback: 'getUCGI6636201101768355',
    g_tk: 5381,
    loginUin: 0,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq',
    data: '{"comm":{"ct":24,"cv":10000},"singerList":{"module":"Music.SingerListServer","method":"get_singer_list","param":{"area":-100,"sex":-100,"genre":-100,"index":-100,"sin":0,"cur_page":1}}}'
  })

  return jsonp(url, data, { name: 'getUCGI6636201101768355' })
}*/

export function getSingerList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'

  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq'
  })

  return jsonp(url, data, options)
}

