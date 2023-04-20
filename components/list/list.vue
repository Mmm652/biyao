<template>
	<view class="doubleRowList" v-for="(item,index) in flootList" :key="index">
		<view class="module-list" v-for="(ele,ind) in item.data" :key="ele.id">
			<image :src="ele.image" alt="" />
			<view class="shop_show">
				<view class="price">
					<text>￥</text>
					<text>{{ele.priceStr}}</text>
				</view>
				<view class="labels">
					<text>爆品</text>
					<text>一起拼</text>
				</view>
				<view class="escp module_subtitle">{{ele.subtitle}}</view>
				<view class="escp module_title">{{ele.mainTitle}}</view>
				<view class="last_line">{{ele.thirdContent}}</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		defineProps,
		defineEmits
	} from 'vue';
	//	接受父组件传值
	const props = defineProps({
		flootList: {
			type: Array,
			default: []
		}
	})
</script>

<style lang="scss">
	.doubleRowList {
		display: flex;
	}

	.module-list {
		width: 374rpx;
		position: relative;
		border-bottom: 2rpx solid #f4f4f4;
		border-right: 1rpx solid #f4f4f4;
		background: #fff;
		padding-bottom: 28rpx;

		image {
			display: block;
			width: 374rpx;
			height: 374rpx;
			margin-bottom: 16rpx;
		}

		.shop_show {
			width: 354rpx !important;
			font-size: 24rpx;
			margin-left: 24rpx;

			.price {
				color: #f7a701;
				font-size: 34rpx;
				margin-bottom: 8rpx;
				display: flex;
				// margin-left: 24rpx;

				text:nth-child(1) {
					font-size: 20rpx;
					margin-top: 9rpx;
				}
			}

			.labels {
				font-size: 18rpx;

				text {
					margin-right: 8rpx;
					margin-bottom: 12rpx;
					display: inline-block;
					padding: 6rpx 4rpx;
					line-height: 20rpx;
					box-sizing: border-box;
					border-radius: 4rpx;
				}

				text:nth-of-type(1) {
					background: rgb(171, 127, 209);
					color: #fff;
					border: 6rpx solid rgb(171, 127, 209);
					border-radius: 4rpx;
				}

				text:nth-of-type(2) {
					border: 1rpx solid rgb(251, 76, 129);
					color: rgb(251, 76, 129);
				}
			}

			.escp {
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}

			.module_subtitle {
				color: #bf9e6b;
				font-size: 24rpx;
				margin-bottom: 8rpx;
			}

			.module_title {
				color: #4a4a4a;
				margin-bottom: 8rpx;
				font-size: 24rpx;
			}

			.last_line {
				padding-top: 6rpx;
				font-size: 2rpx;
				color: #bbbbbb;
			}
		}
	}
</style>
