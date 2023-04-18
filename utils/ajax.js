// 服务器基础地址
const baseUrl = "https://m.bmtrip.com"

// 通用的请求函数
function requeat(obj) {
  wx.showLoading()
  return new Promise((resolve, rej) => {
    wx.request({

      ...obj,
      success(res) {
        resolve(res)
        wx.hideLoading()
      },
      fail(err) {
        rej(err)
        wx.hideLoading()
      }
    })
  })
}
// 首页Id
export function getShouId(params) {
  return requeat({
    url: baseUrl + "/api/v3/m1/cms/nav",
    data: {
      ...params
    }
  })
}
// 首页数据  //轮播详情
export function getShouList(params) {
  // console.log(params);
  return requeat({
    url: baseUrl + "/api/v3/m1/cms/page/detail",
    data: {
      ...params
    }
  })
}
// 本周热卖
export function getBenList(params) {
  // console.log(params);
  return requeat({
    url: baseUrl + "/api/v3/m1/product/list/by_ids",
    method: "POST",
    data: {
      ...params
    }
  })
}
// 私人定制
export function getSiRen(params) {
  // console.log(params);
  return requeat({
    url: baseUrl + "/api/v3/m1/cms/customize",
    data: {
      ...params
    }
  })
}
export function getQiYe(params) {
  // console.log(params);
  return requeat({
    url: baseUrl + "/api/v3/m1/enterprise_customize/page",
    data: {
      ...params
    }
  })
}
// 定制师简略
export function getJianLue(params) {
  // console.log(params); 
  return requeat({
    url: baseUrl + "/api/v3/m1/get_dzs?ids[0]=5e1c4b5bb89631504f411b26&ids[1]=5e1c4c37b89631582739d2ec&ids[2]=5e1c4acdb8963120b167fd74",
    // data: {
    //   ...params 
    // }
  })
}
// 定制旅行
export function getJianLue111(params) {
  // console.log(params); 
  return requeat({
    url: baseUrl + "/api/v3/m1/get_dzs?ids[0]=5e1c4c37b89631582739d2ec&ids[1]=5e1c4b5bb89631504f411b26&ids[2]=5e1c49d0b896310dc47c4616&ids[3]=5e1c4acdb8963120b167fd74",
  })
}
// 发现
export function getFaXian(params) {
  // console.log(params); 
  return requeat({
    url: baseUrl + "/api/v3/article/list",
    data: {
      ...params
    }
  })
}
// 详情
export function getDetail(params) {
  // console.log(params); 
  return requeat({
    url: baseUrl + "/api/v3/m1/product/detail",
    data: {
      ...params,
    }
  })
}
// dzs详情
export function getDingZhiDetail(params) {
  // console.log(params); 
  return requeat({
    url: baseUrl + "/api/v3/m1/dzs/" + params.id,
    data: {
      ...params,
    }
  })
}
// mudidi
export function getregiondata() {
  return requeat({
    url: baseUrl + '/api/v3/m1/area/group?scene=6',
  })
}
// 目的地------------------
// 目的地页面接口
export function getDestination() {
  return requeat({
    url: baseUrl + '/api/v3/m1/area/group'
  })
}
// 获取tabs
export function getDistrict_id(parmise) {
  return requeat({
    url: baseUrl + '/api/v3/m1/product/list/type',
    data: {
      ...parmise
    }
  })
}
// 参数点击
export function getDistrictList(canshu) {
  console.log(canshu);
  return requeat({
    url: baseUrl + `/api/v3/m1/product/list?keywords=${canshu.keyword ? canshu.keyword : ''}&district_id[]=${canshu.id ? canshu.id : ''}&type=${canshu.type ? canshu.type : 0}&order_by=${canshu.order_by ? canshu.order_by : ''}`,
  })
}
// ---------------登录-----------
// 获取验证码
export function getCode(canshu) {
  console.log(canshu);
  return requeat({
    url: baseUrl + `/api/v3/m1/user/send_code`,
    data: {
      phone: canshu
    }
  })
}
// 验证码登录注册
export function getLoRe(canshu) {
  return requeat({
    method: "POST",
    url: baseUrl + `/api/v3/login/register`,
    data: {
      ...canshu
    },
    header: {
      'Cookie': `${JSON.parse(wx.getStorageSync('Set-Cookie'))[0].split(';')[0] + ';' + JSON.parse(wx.getStorageSync('Set-Cookie'))[1].split(';')[0]}`
    }
  })
}

// -------------搜索---------------
// 获取热门搜索
export function getRmss() {

  return requeat({
    url: baseUrl + `/api/v3/page/keywords`
  })
}
// 结果分类
export function getSearchType(parmise) {
  return requeat({
    url: baseUrl + `/api/v3/m1/product/list/type`,
    data: {
      ...parmise
    }
  })
}
// 发现页文章详情
export function getArticle(canshu) {
  return requeat({
    url: baseUrl + '/api/v3/article/detail',
    data: {
      ...canshu
    }
  })
}
// 登录
export function getLogin(canshu) {
  return requeat({
    method: "POST",
    url: baseUrl + '/api/v3/login/pwd',
    data: {
      ...canshu
    }
  })
}
// 登录
export function getFF(canshu) {
  return requeat({
    url: "http://api.qingyunke.com/api.php",
    data: {
      ...canshu
    }
  })
}
