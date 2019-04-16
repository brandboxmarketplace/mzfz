<template>
	<view class="uni-padding-wrap">
		<!-- swiper -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item"></view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item"></view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item"></view>
			</swiper-item>
		</swiper>
		<!-- card -->
		<view class="uni-card">
			<view class="uni-card-header">商品详情</view>
			<view class="uni-card-content">
				<view class="uni-card-content-inner">
					内容
				</view>
			</view>
			<view class="uni-card-footer">市场价格：￥248</view>
			<view class="uni-card-footer">点赞人数：100人次</view>
		</view>
		<!-- 统计点赞人数 -->
		<view class="">
		现已有85人，差15人	
		</view>
		<!-- share -->
		<view class="">
			<button type="primary">立即分享给好友</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>
