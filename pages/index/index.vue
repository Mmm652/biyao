<template>
	<view class="box">
		<view class="home-top-section">
			<view class="search-input-container">
				<view class="search-input-container-view">
					<image src="../../static/faxian.png" alt="" />
					<text>请输入您想要的商品</text>
				</view>
			</view>
			<view class="category-select-scroll-wrap" :class="{'jcsb':!flag}">
				<scroll-view v-show="flag" scroll-x show-scrollbar="false" class="demo-scroll-nav">
					<view class="nav-wrapper">
						<text v-for="(item,index) in arr" class="nav-wrapper-text" :class="{'active':navIndex==index}"
							:key="index" @click="dj(index)">{{item.categoryName}}</text>
					</view>
				</scroll-view>
				<view class="" v-show="!flag">
					全部频道
				</view>
				<view class="" @click="quanbu">
					<view v-show="flag">
						<image src="../../static/xiangxia.png" mode="" />
					</view>
					<view v-show="!flag">
						<image src="../../static/xiangxai.png" mode="" />
					</view>
				</view>
			</view>
			<view class="category-selct-items-box" v-show="!flag">

			</view>
			<view class="ul" v-show="!flag">
				<text v-for="(item,index) in arr" class="ulli" :class="{'active1':navIndex==index}" :key="index"
					@click="dj(index)">{{item.categoryName}}</text>
			</view>
		</view>
		<swiper indicator-dots indicator-color="#7f4395" indicator-active-color="#f7b200" circular>
			<block v-for="(item,index) in goodList.banners" :key="index">
				<swiper-item>
					<image :src="item.newImageUrl" />
				</swiper-item>
			</block>
		</swiper>
		<view class="home-characteristic">
			<view>
				<text>大牌品质</text>
				<text>/</text>
				<text>工厂价格</text>
				<text>/</text>
				<text>分期支付</text>
				<text>/</text>
				<text>顺丰包邮</text>
				<text>/</text>
				<text>无忧退款</text>
			</view>
		</view>
		<view class="home-operational">
			<view class="home-operational-ul">
				<view class="home-operational-li" v-for="(item,index) in goodList.operationNavigation" :key="index">
					<image :src="item.icon" class="home-operational-icon" />
					<text>{{item.title}}</text>
					<image :src="item.superscriptUrl" class="home-operational-point" />
					<view v-if="index==3" class="sign-superscript-number ico-num-2">77</view>
				</view>
			</view>
		</view>
		<view style="width: 100%; height: 20rpx; background: rgb(244, 244, 244);"></view>
		<view>
			<list :flootList="flootList"></list>
		</view>
	</view>
</template>

<script setup>
	import {
		getHome
	} from "../../api/api.js"
	import {
		ref
	} from "vue"
	import list from "../../components/list/list.vue"

	let arr = ref([{
		"categoryId": "0",
		"categoryName": "热门",
		"categoryType": "0",
		"jumpType": 4,
		"categoryIndex": 0
	}, ])
	let goodList = ref([])
	let flootList = ref([])
	let navIndex = ref(0)
	let flag = ref(true)
	let dj = (index) => {
		navIndex.value = index
	}
	let quanbu = () => {
		flag.value = !flag.value
	}
	let getData = async () => {
		let res = (await getHome()).data
		console.log(res);
		arr.value = [...arr.value, ...res.homeData.oneLevelCategoryList]
		goodList.value = res.homeData
		flootList.value = res.floorData.blockList[1].block
		console.log(flootList.value);
	}
	getData()
</script>

<style lang="scss">
	* {
		margin: 0;
		padding: 0;
	}



	.box {
		.home-top-section {
			width: 750rpx;
			height: 171rpx;
			position: sticky;
			top: 0;
			z-index: 100000;
			background: #fff;

			.search-input-container {
				padding-top: 20rpx;
				padding-bottom: 12rpx;

				.search-input-container-view {
					background: #fff;
					width: 700rpx;
					margin: 0 auto;
					height: 64rpx;
					display: flex;
					align-items: center;
					border-radius: 40rpx;
					background: #f4f4f4;
					font-size: 14px;
					color: #bbb;

					image {
						padding-left: 20rpx;
						padding-right: 10rpx;
						width: 36rpx;
						height: 36rpx;
					}
				}


			}

			.category-select-scroll-wrap {
				height: 75rpx;
				font-size: 14px;
				overflow: hidden;
				display: flex;
				align-items: center;
				background: #fff;
				border-bottom: #efefef solid 0.01rem;
				box-sizing: border-box;

				.demo-scroll-nav {
					font-size: 12px;
					width: 650rpx;
					height: 70rpx;

					.nav-wrapper {
						height: 100%;
						white-space: nowrap;

						.nav-wrapper-text {
							display: inline-block;
							font-size: 14px;
							height: 72rpx;
							line-height: 72rpx;
							padding: 0rem 20rpx;
						}
					}
				}

				image {
					margin-left: 20rpx;
					width: 40rpx;
					height: 40rpx;
				}
			}

		}

		swiper {
			height: 260rpx;

			swiper-item {
				height: 100%;
				z-index: 99;

				image {
					width: 100%;
					height: 100%;
				}
			}
		}
	}

	.jcsb {
		justify-content: space-between;
		margin: 0 43rpx;
	}

	.active {
		border-bottom: 2rpx solid #7f4395;
		color: #7f4395;
	}

	.active1 {
		border: 2rpx solid #7f4395 !important;
	}

	.category-selct-items-box {
		width: 750rpx;
		overflow: hidden;
		height: 100vh;
		position: absolute;
		left: 0;
		z-index: -1;
		background: #000;
		opacity: .6;
	}

	.ul {
		position: absolute;
		top: 170rpx;
		width: 725rpx;
		background: #fff;
		padding: 0 0 25rpx 25rpx;
		display: flex;
		flex-wrap: wrap;
		// opacity: 1 !important;
	}

	.ulli {
		width: 155rpx;
		box-sizing: border-box;
		border: #cccccc solid 2rpx;
		height: 56rpx;
		line-height: 56rpx;
		text-align: center;
		font-size: 14px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		box-sizing: border-box;
		padding: 0 5rpx;
		margin-top: 20rpx;
		margin-right: 25rpx
	}

	.home-characteristic {
		height: 72rpx;
		width: 750rpx;
		color: #9687a4;
		background: #fff;
		font-size: 12px;
		line-height: 72rpx;

		view {
			display: flex;
			align-items: center;
			justify-content: space-around;
		}
	}

	.home-operational {
		width: 720rpx;
		padding: 15rpx 15rpx 25rpx;
		background: #ffffff;
		display: block;
	}

	.home-operational-ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.home-operational-li {
		width: 144rpx;
		overflow: hidden;
		position: relative;
		padding-top: 32rpx;
		display: flex;
		flex-direction: column;
	}

	.home-operational-icon {
		width: 48rpx;
		height: 48rpx;
		display: block;
		margin: 0 auto 8rpx
	}

	.home-operational-li text {
		font-size: 12px;
		text-align: center;
		height: 24rpx;
		line-height: 24rpx;
		color: #666;
		width: 120rpx;
		padding: 0rpx 12rpx;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis
	}

	.home-operational-point {
		display: block;
		position: absolute;
		top: 10rpx;
		left: 12rpx;
		width: 120rpx;
		height: 30rpx
	}

	.home-operational-li .sign-superscript-number {
		display: inline-block;
		min-width: 29rpx;
		max-width: 50rpx;
		height: 29rpx;
		text-align: center;
		line-height: 29rpx;
		position: absolute;
		top: 0;
		left: 80rpx;
		font-size: 18rpx;
		color: #fff
	}

	.ico-num-1 {
		width: 29rpx;
		background: url(https://static.biyao.com/mnew/img/master/index/Group-1@2x_42182e1.png) no-repeat center top;
		background-size: 100%
	}

	.ico-num-2 {
		width: 38rpx;
		background: url(https://static.biyao.com/mnew/img/master/index/Group-2@2x_1d833d2.png) no-repeat;
		background-size: 100% 100%
	}

	.ico-num-3 {
		width: 50rpx;
		background: url(https://static.biyao.com/mnew/img/master/index/Group-3@2x_0f6bd9a.png) no-repeat;
		background-size: 100% 100%
	}
</style>
