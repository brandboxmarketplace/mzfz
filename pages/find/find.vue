<template>
	<view>
		<!-- swiper -->
		<!-- <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item,index) in swiper" :key='index'>
				<view class="swiper-item"></view>
			</swiper-item>
		</swiper> -->
		<!-- cardview -->
		<block v-for="(item,index) in imageList" :key='index'>
			<view class="uni-card">
				<view class="uni-card-content">
					<view class="uni-card-content-inner" style="padding: 0;">
						<image :src="item.src" mode="" style="width: 100%;"></image>
					</view>
				</view>
				<view class="uni-card-footer">{{item.detail}}</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imageList:[],
				data:{src:'http://qiniu.satapp.cn/fuzhi/swiper.png',detail:'桦木经典美式复古家居'}
			};
		},
		onLoad() {
			this.imageList=this.randomfn()
		},
		methods: {
			randomfn() {
				let arr=[];
				for (var i = 0; i < 10; i++) {
					arr.push(this['data'])
				}
				return arr;
			}
		},
	}
</script>

<style>

</style>
