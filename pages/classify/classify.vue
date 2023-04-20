<template>
	<!-- 全部 -->
	<view>
		<!-- 头部 -->
		<view class="search-input-container">
			<view class="search-input">
				<image src="../../static/faxian.png" mode=""></image>
				<span>请输入您想要的商品</span>
			</view>
		</view>
		<!-- 内容 -->
		<view class="section-classify">
			<!-- 左边 -->
			<view class="section-firstCate">
				<view class="byui-scroll-wrapper">
					<scroll-view scroll-y="true" class="byui-scroll-content">
						<ul>
							<li v-for="(item,index) in classifyData" key="{index}" :class="{active:index==ind}" @click="changeId(index)">
								{{item.categoryName}}
							</li>
						</ul>
					</scroll-view>
				</view>
			</view>
			<!-- 右边 -->
			<view class="section-cateList">
				<view class="byui-scroll-wrapper">
					<view class="byui-scroll-content">
						<ul>
							<li class="cateList-first show">
								<view>
									<view class="first-cateList-item flex">
										<view class="first-cateList-name-before"></view>
										<view class="escp first-cateList-name">
											{{rightData.categoryName}}
										</view>
										<view class="first-cateList-name-after"></view>
									</view>
									<ul>
										<li v-for="(item,index) in rightData.subCategoryList" key="{index}" class="cateList-second" >
											<view class="list-hd-wrap aLinkJump">
												<view class="list-hd flex">
													<view class="list-hd-name escp">
														{{item.categoryName}}
													</view>
													<view class="list-hd-more">
														<text>
															更多
														</text>
														
													</view>
													
												</view>
												
											</view>
											<ul class="clear">
													<li class="cateList-third aLinkJump" v-for="it in item.subCategoryList">
														<navigator url="">
															<dl>
																<dt>
																	<image :src="it.imageUrl" mode=""></image>
																</dt>
																<dd class="escp-double">{{it.categoryName}}</dd>
															</dl>
														</navigator>
													</li>
												</ul>
										</li>
									</ul>
								</view>
							</li>
							
						</ul>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		getHome,getClassify,getClass	} from "../../api/api.js"
	import {
		ref
	} from "vue"
	// 左边的列表
	let classifyData = ref([])
	// 获取点击参数
	// 点击获取的索引
	let ind = ref('0')
	// 获取几个分类
	let tit = ref([])
	// 右边的数据
	let rightData = ref([])
	// 获取右边图片等信息
	let imageData = ref()
	let changeId = (i) =>{
		ind.value = i
		getData()
	}
	let getData = async () => {
		let res = (await getHome())
		// console.log(res);
		classifyData.value = res.data.homeData.oneLevelCategoryList
		let rightRes = (await getClass()).data.listData
		rightData.value = rightRes[ind.value]
		
		console.log(rightData.value);
		
	} 
	getData()
	
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	li {
		list-style: none;
	}

	a {
		text-decoration: none;
	}

	.search-input-container {
		width: 100%;
		background: #fff;
		padding-top: 18rpx;
		padding-bottom: rpx;
	}
	.active{
		background-color:white;
		border-left: 6rpx solid #7f4395;
	}
	.search-input {
		width: 700rpx;
		height: 60rpx;
		margin: 0 auto;
		background: #f4f4f4;
		border-radius: 28rpx;
		overflow: hidden;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: start;
		-webkit-justify-content: flex-start;
		justify-content: flex-start;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
	}

	.search-input span {
		font-family: PingFangSC-Regular;
		font-size: 26rpx;
		color: #bbb;

	}

	.icon-sousou {
		font-size: 38rpx !important;
		margin: 0 18rpx;
	}

	.byui-scroll-content {
		display: inline-block;
		overflow: hidden;
		z-index: 1;
		margin: 0 auto;
	}

	.section-firstCate ul {
		width: 170rpx;
	}

	.section-firstCate li {
		width: 170rpx;
		height: 96rpx;
		font-size: 24rpx;
		color: #4a4a4a;
		text-align: center;
		box-sizing: border-box;
		padding: 26rpx 0;
	}

	.section-firstCate {
		position: fixed;
		left: 0;
		top: 2rpx;
		bottom: 96rpx;
		z-index: 2;
		box-sizing: border-box;
		width: 170rpx;
		overflow: scroll;
		background: #f7f7f7;
		margin-top: 120rpx;
	}

	.flex_c {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}

	.section-firstCate>div {
		height: 100%;
		overflow: scroll;
	}

	.tabbar-container {
		width: 100%;
		position: fixed;
		bottom: 0;
		height: 96rpx;
		border-top: 2rpx solid #f4f4f4;
		font-size: 0;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-justify-content: space-around;
		justify-content: space-around;
		z-index: 9999;
		background: #fff;
	}

	.tabbar-item {
		height: 100%;
		display: inline-block;
		font-size: 18rpx;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-webkit-flex-direction: column;
		flex-direction: column;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
		color: gray;
	}

	.iconfont {
		font-size: 33rpx !important;
		padding: 0 28rpx;
	}

	.section-cateList {
		position: absolute;
		left: 0;
		top: 2rpx;
		z-index: 2;
		box-sizing: border-box;
		width: 564rpx;
		bottom: 96rpx;
		left: 180rpx;
		padding-bottom: 2rpx;
		margin-top: 120rpx;
		overflow: scroll;
		
	}

	.section-cateList>div {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: auto;
		background-color: #fff;
		overflow: scroll;
	}
	.first-cateList-name {
		margin: 0 auto;
	}
	.list-hd-name {
		width: 240rpx;
		height: 86rpx;
		position: relative;
		font-size: 22rpx;
		font-family: PingFangSC-Semibold;
		color: #4a4a4a;
		box-sizing: border-box;
		padding: 18rpx 30rpx 18rpx 26rpx;
		/* vertical-align: middle; */
		line-height: 30rpx;
	}
	.escp {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.shopList li {
		text-align: center;
		margin: 0.32rem 0 0.64rem 0;
		box-sizing: border-box;
	}
	.flex_c {
		display: flex;
		flex-wrap: wrap;
		/* flex-direction: row; */
		justify-content: space-between;
	}
	.content {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		word-break: break-all;
		overflow: hidden;
		margin-top: 0.24rem;
		color: #666;
		font-size: 0.22rem;
		word-break: break-all;
		line-height: 0.3rem;

	}
	.search-input image{
		width: 30rpx;
		height: 30rpx;
		margin: 0 30rpx;
	}
	.first-cateList-item{
	    font-family: PingFangSC-Semibold;
	    font-size: 28rpx;
	    color: #4a4a4a;
	    height: 96rpx;
	    -webkit-box-align: center;
	    -webkit-align-items: center;
	    align-items: center;
	    -webkit-box-pack: center;
	    -webkit-justify-content: center;
	    justify-content: center;
	    position: relative;
	}
	.first-cateList-name-before, .first-cateList-name-after {
	    height: 2rpx;
	    width: 45rpx;
	    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAACCAYAAAAesF8hAAAAAXNSR0IArs4c6QAAAJhJREFUGBldT0sKRCEM8/P6wIX3v4N3mGOpC1EnKVORKUjTNInqSymx1iprLem9v957SSnJGON1zgnPnFOxoIj33g90bwjhaKhDhs7gBZqzM2y8+eE5Gvr/deRunm+j5/J/HhCncs4Oj3CtNQfxjjHqDn3j8oPxCc8B2sNzNg0zUBsZ7Jp1Y1K6gObXtd1+3m+7G4NjrvnXF/XOUa7X8vi3AAAAAElFTkSuQmCC) no-repeat center top;
	    background-size: 100% 100%;
	}
	.flex{
		display: flex;
	}
	.first-cateList-name {
	    max-width: 240rpx;
	    position: relative;
	    margin: 0 14rpx;
	}
	.list-hd-more {
	    font-family: PingFangSC-Regular;
	    font-size:20rpx;
	    color: #999999;
		line-height: ;
	}
	.cateList-second .list-hd-wrap {
	    height: 86rpx;
	    position: relative;
	    font-size:22rpx;
	    font-family: PingFangSC-Semibold;
	    color: #4a4a4a;
	    box-sizing: border-box;
	    padding: 0 30rpx 18rpx 26rpx;
	}
	.cateList-second .list-hd {
	    height: 100%;
	    border-bottom: 1rpx solid #f3f3f3;
	    line-height: 66rpx;
	    -webkit-box-pack: justify;
	    justify-content: space-between;
	    -webkit-justify-content: space-between;
	}
	.list-hd-more text {
	    vertical-align: middle;
	}
	.cateList-second>ul{
	    padding-left: 26rpx;
	    overflow: hidden;
	}
	.cateList-third {
	    float: left;
	    width: 148rpx;
	    height: 200rpx;
	    margin: 30rpx 28rpx 62rpx 0;
	}
	.cateList-third navigator {
	    display: block;
	}
	.cateList-third dl {
	    text-align: center;
	}
	.cateList-third image {
	    width: 130rpx;
	    height: 130rpx;
	    border-radius: 2rpx;
	    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAVUExURUxpcczMzMzMzMzMzMzMzMzMzMzMzFddWqAAAAAGdFJOUwDwJ45Vt2IVef8AAADYSURBVGje7da7DoJAFIThE0ysvSTURF+AyhpjYr021iKX938EOaASoNqZwsL5Gir+sLtHwUxERERERCTOKm0nyjwycG9nmshAOg+UkYF2AQhUhyMXKMyuTKDyw2ACdXdJmMBz3Mz9JaWeoMy6zYgPNN892JmtmVPoHgALVNkwB74WKPBRkAGfByqQ44Ht+DvGNjHxf4WAB4KPgZ8hGPBbzz5EaKAf5VuGB/rFJwYH3ovHA7WRgUAGpisAAtMVAIENG3j8OkC/G0/s23nxfRD0zSQiIiIi8m9ejQWMrHL/8ygAAAAASUVORK5CYII=) no-repeat center;
	}
	.cateList-third dd {
	    margin-top: 22rpx;
	    color: #666;
	    font-size: 20rpx;
	    word-break: break-all;
	    line-height:28rpx;
	}
</style>