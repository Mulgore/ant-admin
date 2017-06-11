import { request, config } from '../utils'
const { api } = config

export async function query (params) {
  return request({
    url: 'http://api.reawei.cn/v1/photo/result/MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAIOmchDF0w51j0vb3z6rOsPZQMEiTIVPxyHN7m9wweYbHRR6wA7PbzVtDcY9vTDOmHbgBvlV/EKHmiJRjzRBWecCAwEAAQ==.html?appId=1075',
    data: params,
    method: 'get',
  })
}

export async function photoRemove (params) {
  return request({
    url: 'http://127.0.0.1:8089/v1/photo/remove/result/MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAIOmchDF0w51j0vb3z6rOsPZQMEiTIVPxyHN7m9wweYbHRR6wA7PbzVtDcY9vTDOmHbgBvlV/EKHmiJRjzRBWecCAwEAAQ==.html?appId=1075',
    method: 'delete',
    data: params,
  })
}
