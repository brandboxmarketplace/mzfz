<template>
	<view>
		<!-- avatar -->
		<view class="uni-flex uni-column">
			<view class="uni-center">
				<image src="/static/logo.png" mode="" style="width: 150upx;height: 150upx;"></image>
			</view>
			<button type="" size="mini" @click="goLogin"  class="uni-bg-green">点击登录</button>
		</view>
		<!-- grid1 -->
		<view class="uni-card-header">
			我的服务
		</view>
		<view class="uni-grid-9">
			<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover" v-for="(item,index) in grid1" :key='index'>
				<image :src="item.src" mode="" class="uni-grid-9-image"></image>
				<text class="uni-grid-9-text">{{item.name}}</text>
			</view>
		</view>
		<!-- grid2 -->
		<view class="uni-card-header">
			一元抢购中心
		</view>
		<view class="uni-grid-9">
			<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover" v-for="(item,index) in grid2" :key='index'>
				<image :src="item.src" mode="" class="uni-grid-9-image"></image>
				<text class="uni-grid-9-text">{{item.name}}</text>
			</view>
		</view>
		<!-- grid3 -->
		<view class="uni-card-header">
			平台服务
		</view>
		<view class="uni-grid-9">
			<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover" v-for="(item,index) in grid3" :key='index'>
				<image :src="item.src" mode="" class="uni-grid-9-image"></image>
				<text class="uni-grid-9-text">{{item.name}}</text>
			</view>
		</view>
		<!-- grid4 -->
		<view class="uni-card-header">
			商家服务
		</view>
		<view class="uni-grid-9">
			<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover" v-for="(item,index) in grid4" :key='index'>
				<image :src="item.src" mode="" class="uni-grid-9-image"></image>
				<text class="uni-grid-9-text">{{item.name}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				grid1: [{
					name: '待付款',
					src: 'http://qiniu.satapp.cn/mine101.png'
				}, {
					name: '待发货',
					src: 'http://qiniu.satapp.cn/mine102.png'
				}, {
					name: '待收货',
					src: 'http://qiniu.satapp.cn/mine103.png'
				}, {
					name: '全部订单',
					src: 'http://qiniu.satapp.cn/mine104.png'
				}, {
					name: '会员注册',
					src: 'http://qiniu.satapp.cn/mine105.png'
				}, {
					name: '会员登录',
					src: 'http://qiniu.satapp.cn/mine106.png'
				}, {
					name: '我的钱包',
					src: 'http://qiniu.satapp.cn/mine101.png'
				}, {
					name: '我的拼团',
					src: 'http://qiniu.satapp.cn/mine108.png'
				}, {
					name: '装修预算',
					src: 'http://qiniu.satapp.cn/mine109.png'
				}, {
					name: '优惠劵',
					src: 'http://qiniu.satapp.cn/mine110.png'
				}, {
					name: '购物车',
					src: 'http://qiniu.satapp.cn/mine111.png'
				}, {
					name: '我的收藏',
					src: 'http://qiniu.satapp.cn/mine112.png'
				}, {
					name: '集赞免费领',
					src: 'http://qiniu.satapp.cn/mine302.png'
				}, {
					name: '分销商权限',
					src: 'http://qiniu.satapp.cn/mine114.png'
				}, {
					name: '地址管理',
					src: 'http://qiniu.satapp.cn/mine115.png'
				}, {
					name: '我的发布',
					src: 'http://qiniu.satapp.cn/mine116.png'
				}],
				grid2: [{
					name: '正在抢',
					src: 'http://qiniu.satapp.cn/mine201.png'
				}, {
					name: '我抢中',
					src: 'http://qiniu.satapp.cn/mine202.png'
				}, {
					name: '差价购',
					src: 'http://qiniu.satapp.cn/mine203.png'
				}, {
					name: '待付款',
					src: 'http://qiniu.satapp.cn/mine101.png'
				}, {
					name: '待晒单',
					src: 'http://qiniu.satapp.cn/mine205.png'
				}, {
					name: '我的抢币',
					src: 'http://qiniu.satapp.cn/mine206.png'
				}, {
					name: '我的购物币',
					src: 'http://qiniu.satapp.cn/mine207.png'
				}, {
					name: '已收藏',
					src: 'http://qiniu.satapp.cn/mine208.png'
				}],
				grid3: [{
					name: '联系客服',
					src: 'http://qiniu.satapp.cn/mine301.png'
				}, {
					name: '帮助中心',
					src: 'http://qiniu.satapp.cn/mine302.png'
				}, {
					name: '关于我们',
					src: 'http://qiniu.satapp.cn/mine303.png'
				}, {
					name: '投诉建议',
					src: 'http://qiniu.satapp.cn/mine304.png'
				}],
				grid4: [{
					name: '我要入驻',
					src: 'http://qiniu.satapp.cn/mine401.png'
				}, {
					name: '商家入口',
					src: 'http://qiniu.satapp.cn/mine402.png'
				}]

			};
		},
		methods: {
			goLogin() {
				uni.navigateTo({
					url:'../login/login'
				})
			}
		},
	}
</script>

<style>
	.uni-grid-9-item {
		width: 25%
	}
	.uni-grid-9-image{
		width: 70upx;
		height: 70upx;
	}
</style>
