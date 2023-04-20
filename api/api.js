import axios from "./axios.js"

const beseUrl = "http://47.113.230.184:5566"
// 获取当前页面ID
export  function getHome() {
	return axios({
		url: beseUrl,
	})
}
export  function getClassify(i) {
	// console.log(i);
	return axios({
		url: beseUrl+"/Classify?categoryId="+`${i}`,
	})
}
export  function getClass() {
	return axios({
		
		url:'http://192.168.212.95:5056/classify',
	})
}


// // 引入request请求方法
// import request from './axios.js';

// // 请求首页基础数据的方法
// export const  getHome = ( )=>{
// 	return request({
// 		url:'/home/floorlist'
// 	})