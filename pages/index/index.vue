<template>
	<view class="box">
		<view class="home-top-section">
			<view class="search-input-container">
				<view class="search-input-container-view">
					<image src="../../static/faxian.png" alt="" />
					<text>请输入您想要的商品</text>
				</view>
			</view>
			<view class="category-select-scroll-wrap">
				<scroll-view scroll-x show-scrollbar="false" class="demo-scroll-nav">
					<view class="nav-wrapper">
						<text v-for="(item,index) in arr" class="nav-wrapper-text" :class="{'active':navIndex==index}"
							key="index" @click="dj(index)">{{item.categoryName}}</text>
					</view>
				</scroll-view>
				<image src="../../static/xiangxia.png" mode=""></image>
			</view>
		</view>
		<swiper indicator-dots indicator-color="#7f4395" indicator-active-color="#f7b200" circular>
			<block v-for="(item,index) in bannerArr" key="index">
				<swiper-item>
					<image class="sw-img" :src="item.newImageUrl" />
				</swiper-item>
			</block>
		</swiper>
	</view>
</template>

<script setup>
	import {
		getHome
	} from "../../api/api.js"
	import {
		ref
	} from "vue"
	let arr = ref([{
		"categoryId": "0",
		"categoryName": "热门",
		"categoryType": "0",
		"jumpType": 4,
		"categoryIndex": 0
	}, ])
	let bannerArr = ref([])
	let navIndex = ref(0)
	let flag = ref(false)
	let dj = (index) => {
		navIndex.value = index
	}
	let getData = async () => {
		let res = (await getHome()).data.homeData
		console.log(res);
		arr.value = [...res.oneLevelCategoryList]
		bannerArr.value = res.banners
		console.log(arr.value);
	}
	getData()
</script>

<style lang="scss">
	.nav-fixed {
		position: fixed;
		z-index: 100000;
		top: 0;
	}

	.box {
		.home-top-section {
			width: 750rpx;
			height: 171rpx;

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

				image {
					width: 100%;
					height: 100%;
				}
			}
		}
	}

	.active {
		border-bottom: 0.02rem solid #7f4395;
		color: #7f4395;
	}
</style>
