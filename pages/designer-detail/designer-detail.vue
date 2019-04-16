<template>
	<view>
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
		<!-- personal information -->
		<!-- comment -->
		<view class="uni-card">
			<view class="uni-card-header">用户评价</view>
			<view class="uni-card-content">
				<view class="uni-card-content-inner">
					<view class="uni-comment">
						<view class="uni-comment-list">
							<view class="uni-comment-face">
								<image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png" mode="widthFix"></image>
							</view>
							<view class="uni-comment-body">
								<view class="uni-comment-top">
									<text>网友</text>
								</view>
								<view class="uni-comment-date">
									<text>08/10 08:12</text>
								</view>
								<view class="uni-comment-content">很酷的HBuilderX和uni-app，开发一次既能生成小程序，又能生成App</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			
		</view>
		<!-- case -->
		<view class="uni-product-list">
			<view class="uni-product" v-for="(product,index) in productList" :key="index">
				<view class="image-view">
					<image v-if="renderImage" class="uni-product-image" :src="product.image"></image>
				</view>
				<view class="uni-product-title">{{product.title}}</view>
				<view class="uni-product-price">
					<text class="uni-product-price-favour">￥{{product.originalPrice}}</text>
					<text class="uni-product-price-original">￥{{product.favourPrice}}</text>
					<text class="uni-product-tip">{{product.tip}}</text>
				</view>
			</view>
		</view>
		<!-- foot -->
		<view class="uni-foot">
			<view class="uni-foot-item" style="width: 20%;">
				<uni-icon type="phone"></uni-icon>
				<view class="">
					在线联系
				</view>
			</view>
			<view class="uni-foot-item" style="width: 20%;">
				<uni-icon type="redo"></uni-icon>
				<view class="">
					分享
				</view>
			</view>
			<view class="uni-foot-item" style="width: 20%;" @click="fabu">
				<uni-icon type="paperplane"></uni-icon>
				<view class="">
					发布
				</view>
			</view>
			<view class="uni-foot-item" style="width: 20%;">
				<uni-icon type="compose"></uni-icon>
				<view class="">
					评论
				</view>
			</view>
			<view class="uni-foot-item" style="width: 20%;">
				<uni-icon type="star"></uni-icon>
				<view class="">
					收藏
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			fabu() {
				uni.navigateTo({
					url:'../fabu/fabu'
				})
			}
		},
	}
</script>

<style>

</style>
