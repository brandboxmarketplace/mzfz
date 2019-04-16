<template>
	<view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item,index) in swiper" :key='index'>
				<view class="swiper-item"></view>
			</swiper-item>
		</swiper>
		<!-- 商品介绍 -->
		<view class="uni-card">
			<view class="uni-card-header">商品名称</view>
			<view class="uni-card-content">
				<view class="uni-card-content-inner">
					内容
				</view>
			</view>
			<!-- <view class="uni-card-footer">页脚</view> -->

		</view>
		<!-- 商品图展示 -->
		<view class="uni-flex-item uni-center">
			----商品图展示----
		</view>
		<view class="" style="width: 100%;height: 300upx;" v-for="(item,index) in img" :key='index'>
			<image src="" mode=""></image>
		</view>
		<!-- 评论 -->
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
				<!-- footer(fixed) -->
		<view class="uni-foot">
			<view class="uni-foot-item" style="width: 20%;">
				<uni-icon type="person"></uni-icon>
				<view class="">
					装修顾问
				</view>
			</view>
			<view class="uni-foot-item" style="width: 20%;">
				<uni-icon type="redo"></uni-icon>
				<view class="">
					分享
				</view>
			</view>
			<view class="uni-foot-last uni-bg-yellow" style="width: 30%;">
				加入购物车
			</view>
			<view class="uni-flex-item uni-bg-red uni-foot-last" >
				保存预算
			</view>
		</view>
		
		
	</view>
</template>

<script>
	import uniIcon from '@/components/uni-icon.vue';
	export default {
		components:{uniIcon},
		data() {
			return {

			};
		}
	}
</script>

<style>

</style>
