<template>
	<view>
		<!-- swiper -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" style="height: 400upx;">
			<swiper-item v-for='(item,index) in swiper' :key='index'>
				<image class="swiper-item" :src='item' style="width: 100%;"></image>
			</swiper-item>

		</swiper>
		<view class="uni-list uni-list-cell uni-list-cell-last ">
			家庭为什么要选择预算系统、再装修，可编辑说明。
		</view>
		<!-- 预算系统 -->
		<view class="uni-card">
			<view class="uni-card-header">
				<view class="">
					大家都在用的预算系统
				</view>
				<view class="" style="border: 1upx solid #999999; line-height: 1.2;">
					已预算人数<text style="color: #FF3333;">78560</text>人
				</view>
			</view>
			<view class="uni-card-content">
				<view class="uni-card-content-inner uni-flex" style="justify-content: space-between;">
					<view class="">
						<image :src="budget1.src" mode="" class="" style="width: 340upx;height: 500upx;" @click="goDetail(budget1.target)"></image>
					</view>
					<view class="uni-flex uni-column uni-flex-item">
						<image :src="budget2.src" mode="" @click="goDetail(budget2.target)" style="width: 340upx;height: 250upx;" class="uni-flex-item"></image>
						<image :src="budget3.src" mode="" @click="goDetail(budget3.target)" style="width: 340upx;height: 250upx;" class="uni-flex-item"></image>
					</view>
				</view>
			</view>

		</view>
		<!-- 领券 -->
		<image :src="lingquan.src" mode="" style="width: 100%;height: 150upx;" @click="goDetail(lingquan.target)"></image>
		<!-- 体验中心 -->
		<view class="uni-padding-wrap uni-flex uni-column">
			<view class="uni-center uni-h3" style="border: 1px solid #FF3333;background-color: #FFA197;color: #FF3333;border-radius: 20upx;margin-top: 30upx;">
				去附近体验中心看看实物
			</view>
			<view class="uni-flex">
				<image src="http://qiniu.satapp.cn/fuzhi/buget1.png" mode="" style="width: 50%;"></image>
				<view class="uni-flex-item uni-flex uni-column uni-common-pl">
					<view class="uni-h4">
						富之家品江苏连云港体验中心
					</view>
					<view class="uni-h3  uni-navigate-right" style="color: #FF3333;">
						<uni-icon type="map"></uni-icon>到店体验 >
					</view>

				</view>
			</view>
			<view class="uni-card-footer">
				<view class="">
					富之家品江苏连云港体验中心
				</view>
				<view class="" style="color: #FF3333;">
					最近距离13km
				</view>
			</view>
		</view>
		<!-- 风格中心 -->
		<view class="uni-padding-wrap uni-flex uni-column mt">
			<view class="uni-center uni-h3 uni-common-mt" style="border: 1px solid #007AFF;background-color: #66AAFF;color: #007AFF;border-radius: 20upx;margin-top: 30upx;">
				去风格中心看看
			</view>
			<view class="uni-list-cell-navigate uni-navigate-right">
				选择风格
			</view>
			<block v-for="(item,index) in storeList" :key='index'>
				<image :src="item.src" mode="" style="width: 100%;height: 400upx;"></image>
				<view class="">
					{{item.name}}
				</view>
				<view class="">
					{{item.space}}
				</view>
				<view class="" style="color: #FF3333;">
					<uni-icon type="location"></uni-icon>{{item.address}}
				</view>
			</block>
		</view>
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
				到店体验
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
		components: {
			uniIcon
		},
		data() {
			return {
				swiper: ['http://qiniu.satapp.cn/fuzhi/buget-swiper.png'],
				budget1: {
					src: 'http://qiniu.satapp.cn/fuzhi/buget1.png',
					target: '../budget1/budget1'
				},
				budget2: {
					src: 'http://qiniu.satapp.cn/fuzhi/buget2.png',
					target: '../budget2/budget2'
				},
				budget3: {
					src: 'http://qiniu.satapp.cn/fuzhi/buget3.png',
					target: '../budget3/budget3'
				},
				lingquan: {
					src: 'http://qiniu.satapp.cn/fuzhi/lingquan.png',
					target: '../budget3/budget3'
				},
				storeList: [],
				data: {
					'space': '112平方米',
					'name': '桦木美式乡村经典复古套餐-客厅',
					'address': '江苏连云港',
					'src': 'http://qiniu.satapp.cn/fuzhi/swiper.png'
				}
			};
		},
		methods: {
			goDetail(e) {
				uni.navigateTo({
					url: e
				})
			},
			randomfn() {
				let arr = [];
				for (var i = 0; i < 10; i++) {
					arr.push(this['data']);
				}
				return arr;
			}
		},
		onLoad() {
			this.storeList = this.randomfn()
		}
	}
</script>

<style>
	page{
		background-color: #CCCCCC;
	}
	.uni-padding-wrap{
		background-color: #FFFFFF;
	}
</style>
