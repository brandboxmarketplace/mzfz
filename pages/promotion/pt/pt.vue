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
		<!-- card -->
		<view class="uni-card">
			<view class="uni-card-header">￥765 <uni-tag text="" type=""></uni-tag></view>
			<view class="uni-card-content">
				<view class="uni-card-content-inner">
					整屋定制
				</view>
			</view>
			<view class="uni-card-footer" >全场包邮.7天退换.假一赔十</view>
		</view>
		<!-- list -->
		<view class="uni-list">
			<view class="uni-list-cell" v-for="(item,index) in list" :key="index">
				<view class="uni-list-cell-navigate uni-navigate-right">
					{{item.value}}
				</view>
			</view>
		</view>
		
		<!-- footer(fixed) -->
		<view class="uni-foot">
			<view class="uni-foot-item" style="width: 15%;">
				<uni-icon type="person"></uni-icon>
				<view class="">
					装修顾问
				</view>
			</view>
			<view class="uni-foot-item" style="width: 15%;">
				<uni-icon type="redo"></uni-icon>
				<view class="">
					分享
				</view>
			</view>
			<view class="uni-foot-item" style="width: 15%;">
				<uni-icon type="star"></uni-icon>
				<view class="">
					收藏
				</view>
			</view>
			<view class="uni-foot-item uni-bg-yellow" style="width: 27.5%;">
				<view class="">￥1400</view>
				<view class="">
					单独购买
				</view>
			</view>
			<view class="uni-foot-item uni-bg-red" style="width: 27.5%;">
				<view class="">￥700</view>
				<view class="">
					发起拼单
				</view>
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
