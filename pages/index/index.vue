<template>
	<view class="box">
		<view class="home-top-section">
			<view class="search-input-container">
				<text></text>
				<text></text>
			</view>
			<view class="">

			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		getHome
	} from "../../api/api.js"

	let getData = async () => {
		let res = await getHome()
		console.log(res);
	}
	getData()
	// onload() {
	// 	getData()
	// }
</script>

<style lang="scss">
	.home-top-section {
		height: 171rpx;
	}

	.search-input-container {
		width: 100%;
		background: #fff;
		padding-top: 20rpx;
		padding-bottom: 12rpx;
	}
</style>
