import { request } from '../utils'


export async function query (params) {
  return request({
    url: 'http://api.reawei.cn/v1/photo/result/MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAIOmchDF0w51j0vb3z6rOsPZQMEiTIVPxyHN7m9wweYbHRR6wA7PbzVtDcY9vTDOmHbgBvlV/EKHmiJRjzRBWecCAwEAAQ==.html?appId=1075',
    data: params,
  })
}

export async function create (params) {
  return request({
    url: 'http://api.reawei.cn/v1/photo/save/result/MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAIOmchDF0w51j0vb3z6rOsPZQMEiTIVPxyHN7m9wweYbHRR6wA7PbzVtDcY9vTDOmHbgBvlV/EKHmiJRjzRBWecCAwEAAQ==.html?appId=1075',
    method: 'post',
    data: params,
  })
}

export async function remove (params) {
  return request({
    url: 'http://api.reawei.cn/v1/photo/remove/result/MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAIOmchDF0w51j0vb3z6rOsPZQMEiTIVPxyHN7m9wweYbHRR6wA7PbzVtDcY9vTDOmHbgBvlV/EKHmiJRjzRBWecCAwEAAQ==.html?appId=1075',
    method: 'delete',
    data: params,
  })
}

export async function update (params) {
  return request({
    url: 'http://api.reawei.cn/v1/photo/update/result/MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAIOmchDF0w51j0vb3z6rOsPZQMEiTIVPxyHN7m9wweYbHRR6wA7PbzVtDcY9vTDOmHbgBvlV/EKHmiJRjzRBWecCAwEAAQ==.html?appId=1075',
    method: 'patch',
    data: params,
  })
}
