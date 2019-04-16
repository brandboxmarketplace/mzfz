<template>
	<view class="">
		<!-- swiper -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item,index) in swiper" :key='index'>
				<view class="swiper-item uni-flex">
					<image :src="item" mode="" class="uni-flex-item"></image>
				</view>
			</swiper-item>
		</swiper>
		<!-- grid -->
		<view class="uni-grid-9">
			<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover" v-for="(item,index) in grid" :key='index' @click="goDetail(item.target)">
				<image :src="item.src" mode="" class="uni-grid-9-image"></image>
				<text class="uni-grid-9-text">{{item.name}}</text>
			</view>
		</view>

		<!-- 预算 -->
		<view class="uni-flex mt" @click="goDetail(buget.target)">
			<image :src="buget.src" mode="scaleToFill" class="uni-flex-item" style="height: 300upx;"></image>
		</view>
		<!-- 分享赚钱+免费领 -->
		<view class="uni-flex mt">
			<view class="uni-flex" style="width: 375upx;" @click="goDetail(fenxiang.target)">
				<image :src="fenxiang.src" mode="" class="uni-flex-item" style="height: 200upx"></image>
			</view>
			<view class="uni-flex" style="width: 375upx;" @click="goDetail(mianfei.target)">
				<image :src="mianfei.src" mode="" class="uni-flex-item" style="height: 200upx"></image>
			</view>
		</view>
		<!-- 以旧换新+加盟体验馆 -->
		<view class="uni-flex mt">
			<view class="uni-flex" style="width: 375upx;" @click="goDetail(yijiuhuanxin.target)">
				<image :src="yijiuhuanxin.src" mode="" class="uni-flex-item" style="height: 200upx;"></image>
			</view>
			<view class="uni-flex" style="width: 375upx;" @click='goDetail(jiameng.target)'>
				<image :src="jiameng.src" mode="" uni-flex-item class="uni-flex-item" style="height:200upx"></image>
			</view>
		</view>
		<!-- 大牌工厂 -->
		<view class="uni-flex mt" @click="goDetail(dapaigongchang.target)">
			<image :src="dapaigongchang.src" mode="scaleToFill" class="uni-flex-item" style="height: 200upx;"></image>
		</view>
		<!-- 热卖风格 -->
		<view class="uni-flex mt" @click="goDetail(remaifengge.target)">
			<image :src="remaifengge.src" class="uni-flex-item" style="height: 400upx;" mode=""></image>
		</view>
		<!-- 热卖风格 -->
		<view class="uni-flex mt" @click="goDetail(yiyuanqianggou.target)">
			<image :src="yiyuanqianggou.src" class="uni-flex-item" style="height: 400upx;" mode=""></image>
		</view>
		
		<!-- segmented control -->
		<uni-segmented-control :current="current" :values="values" @clickItem="click" style-type='text' active-color='#09BB07'></uni-segmented-control>
		<view class="content">
			<view v-show="current === 0">
				<!-- 距离最近 (此处应该改写)-->
				<view class="uni-flex mt uni-padding-wrap pt pb" v-for='(item,index) in storeList' :key='index' style="background-color: #FFFFFF;">
					<image :src="item.logo" mode="" style="width: 100upx;height: 100upx;"></image>
					<view class="uni-flex-item uni-flex uni-column uni-common-pl">
						<view class="uni-flex" style="justify-content: space-between;">
							<view class="">
								{{item.name}}
							</view>
							<view class="">
								<uni-icon type="phone" color='#ff3333'></uni-icon>
							</view>
						</view>
						<view class="uni-flex" style="color: #888888; justify-content: space-between;">
							<view class="" style="font-size: 20upx;">
								<uni-icon type="location" size=18 color='#ff3333'></uni-icon>{{item.address}}
							</view>
							<view class="" style="font-size: 24upx;">
								{{item.distance}}
							</view>
						</view>
					</view>
				</view>
			</view>
			<view v-show="current === 1">
				<!-- 销量最高 -->
				<view class="uni-product-list mt">
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
			</view>
			<view v-show="current === 2">
				<!-- 秒杀商品 -->
				<view class="uni-product-list mt">
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
			</view>
			<view v-show="current === 3">
				<!-- 拼团购买 -->
				<view class="uni-product-list mt">
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
			</view>
		</view>

	</view>
</template>

<script>
	import uniSegmentedControl from '@/components/uni-segmented-control.vue'

	export default {
		components: {
			uniSegmentedControl

		},
		data() {
			return {
				productList:[],
				renderImage:false,
				data1: {
					logo: 'http://qiniu.satapp.cn/mz.png',
					name: '明志云科技',
					address: '北京大兴区思邈路1号院',
					distance: '12km'
				},
				storeList: [],
				current: 0,
				values: ['距离最近', '销量最高', '秒杀商品', '拼团购买'],
				swiper: ['http://qiniu.satapp.cn/fuzhi/swiper.png'],
				grid: [{
					name: '家居专场',
					src: 'http://qiniu.satapp.cn/fuzhi/001.png',
					target: '../product-list/product-list'
				}, {
					name: '设计专家',
					src: 'http://qiniu.satapp.cn/fuzhi/002.png',
					target: '../designer-list/designer-list'
				}, {
					name: '施工人员',
					src: 'http://qiniu.satapp.cn/fuzhi/003.png',
					target: '../designer-list/designer-list?type=2'
				}, {
					name: '装饰五金',
					src: 'http://qiniu.satapp.cn/fuzhi/004.png',
					target: '../product-list/product-list'
				}, {
					name: '地板吊顶',
					src: 'http://qiniu.satapp.cn/fuzhi/005.png',
					target: '../product-list/product-list'
				}, {
					name: '水电灯具',
					src: 'http://qiniu.satapp.cn/fuzhi/006.png',
					target: '../product-list/product-list'
				}, {
					name: '门窗壁纸',
					src: 'http://qiniu.satapp.cn/fuzhi/007.png',
					target: '../product-list/product-list'
				}, {
					name: '厨卫洁具',
					src: 'http://qiniu.satapp.cn/fuzhi/008.png',
					target: '../product-list/product-list'
				}, {
					name: '装修预算',
					src: 'http://qiniu.satapp.cn/fuzhi/009.png',
					target: '../budget/budget'
				}, {
					name: '体验中心',
					src: 'http://qiniu.satapp.cn/fuzhi/010.png',
					target: '../product-list/product-list'
				}],
				buget: {

					src: 'http://qiniu.satapp.cn/fuzhi/E.gif',
					target: '../budget/budget'
				},
				fenxiang: {

					src: 'http://qiniu.satapp.cn/fuzhi/a.png',
					target: '../distribution/index/index'
				},
				mianfei: {

					src: 'http://qiniu.satapp.cn/fuzhi/b.png',
					target: '../thumbup/index/index'
				},
				yijiuhuanxin: {

					src: 'http://qiniu.satapp.cn/fuzhi/yijiuhuanxin.png',
					target: '../product-detail/product-detail'
				},
				jiameng: {

					src: 'http://qiniu.satapp.cn/fuzhi/jiameng.png',
					target: '../distribution/apply/apply'
				},
				dapaigongchang: {

					src: 'http://qiniu.satapp.cn/fuzhi/dapaigongchang.png',
					target: '../product-detail/product-detail'
				},
				remaifengge: {

					src: 'http://qiniu.satapp.cn/fuzhi/remaifengge.png',
					target: '../product-detail/product-detail'
				},
				yiyuanqianggou: {
				
					src: 'http://qiniu.satapp.cn/fuzhi/yiyuanqianggou.png',
					target: '../product-detail/product-detail'
				}
			}
		},
		onLoad() {
			this.storeList = this.randomfn();
			this.loadData();
			setTimeout(() => {
				this.renderImage = true;
			}, 300);

		},
		onPullDownRefresh() {
			this.loadData('refresh');
			// 实际开发中通常是网络请求，加载完数据后就停止。这里仅做演示，加延迟为了体现出效果。
			setTimeout(() => {
				uni.stopPullDownRefresh();
			}, 2000);
		},
		onReachBottom() {
			this.loadData();
		},
		methods: {
			randomfn() {
				let arr = [];
				for (var i = 0; i < 10; i++) {
					arr.push(this['data1'])
				}
				return arr;
			},
			goDetail(e) {
				uni.navigateTo({
					url: e
				})
			},
			click(index) {
				if (this.current != index) {
					this.current = index
				}

			},
			loadData(action = 'add') {
				const data = [{
						image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg',
						title: 'Apple iPhone X 256GB 深空灰色 移动联通电信4G手机',
						originalPrice: 9999,
						favourPrice: 8888,
						tip: '自营'
					},
					{
						image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product2.jpg',
						title: 'Apple iPad 平板电脑 2018年新款9.7英寸',
						originalPrice: 3499,
						favourPrice: 3399,
						tip: '优惠'
					},
					{
						image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product3.jpg',
						title: 'Apple MacBook Pro 13.3英寸笔记本电脑（2017款Core i5处理器/8GB内存/256GB硬盘 MupxT2CH/A）',
						originalPrice: 12999,
						favourPrice: 10688,
						tip: '秒杀'
					},
					{
						image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product4.jpg',
						title: 'Kindle Paperwhite电纸书阅读器 电子书墨水屏 6英寸wifi 黑色',
						originalPrice: 999,
						favourPrice: 958,
						tip: '秒杀'
					},
					{
						image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product5.jpg',
						title: '微软（Microsoft）新Surface Pro 二合一平板电脑笔记本 12.3英寸（i5 8G内存 256G存储）',
						originalPrice: 8888,
						favourPrice: 8288,
						tip: '优惠'
					},
					{
						image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product6.jpg',
						title: 'Apple Watch Series 3智能手表（GPS款 42毫米 深空灰色铝金属表壳 黑色运动型表带 MQL12CH/A）',
						originalPrice: 2899,
						favourPrice: 2799,
						tip: '自营'
					}
				];

				if (action === 'refresh') {
					this.productList = [];
				}

				data.forEach(item => {
					this.productList.push(item);
				});
			}
		}
	}
</script>

<style>
	page {
		background-color: #CCCCCC;
	}

	.pt {
		padding-top: 30upx;
	}

	.pb {
		padding-bottom: 30upx;
	}
	.uni-product-list{
		background-color: #FFFFFF;
	}
	.segmented-control{
		width: 100%;
		background-color: #FFFFFF;
		margin-top: 10upx;
		
	}
	.segmented-control-item{
		line-height: 100upx;
	}
</style>
