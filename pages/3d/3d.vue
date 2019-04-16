<template>
	<view class="uni-tab-bar">
		<scroll-view id="tab-bar" class="uni-swiper-tab" scroll-x :scroll-left="scrollLeft">
			<view v-for="(tab,index) in tabBars" :key="tab.id" :class="['swiper-tab-list',tabIndex==index ? 'active' : '']" :id="tab.id"
			 :data-current="index" @click="tapTab(index)">{{tab.name}}</view>
		</scroll-view>
		<swiper :current="tabIndex" class="swiper-box" duration="300" @change="changeTab">
			<swiper-item v-for="(tab,index1) in swiper" :key="index1">
				<scroll-view class="list" scroll-y @scrolltolower="loadMore(index1)">
					<block v-for="(item2,index2) in tab.data" :key="index2">
						<!-- ucard -->
						<view class="uni-card">
							<view class="uni-card-header">{{item2.title}}</view>
							<view class="uni-card-content">
								<view class="uni-card-content-inner uni-flex uni-column">
									<image :src="item2.src" mode="" style="height: 400upx;width: 100%;" class="uni-flex-item"></image>
									<view class="uni-flex-item">
										{{item2.detail}}
									</view>
								</view>
							</view>
							<view class="uni-card-footer">
								<view class="">
									总报价：{{item2.price}}
								</view>
								<view class="">
									浏览人数：{{item2.viewNum}}
								</view>
							</view>
						</view>
					</block>
					<view class="uni-tab-bar-loading">
						<uni-load-more :loadingType="tab.loadingType" :contentText="loadingText"></uni-load-more>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>
<script>
	import uniLoadMore from '@/components/uni-load-more.vue';
	export default {
		components: {
			uniLoadMore
		},
		data() {
			return {
				loadingText: {
					contentdown: "上拉显示更多",
					contentrefresh: "正在加载...",
					contentnomore: "没有更多数据了"
				},
				scrollLeft: 0,
				isClickChange: false,
				tabIndex: 0,
				swiper: [],
				data: {
					'title': '客厅',
					'src': 'http://qiniu.satapp.cn/fuzhi/swiper.png',
					'detail': '简欧风格就是简化了的欧式风格，也是目前住宅别墅最流行的装修风格。简欧风格更多的表现为实用性和多元化。',
					'price':'7000',
					'viewNum':'532',
				},
				tabBars: [{
					name: '全部',
					id: 'guanzhu'
				}, {
					name: '厨房',
					id: 'tuijian'
				}, {
					name: '卫生间',
					id: 'tiyu'
				}, {
					name: '客厅',
					id: 'redian'
				}, {
					name: '卧室',
					id: 'caijing'
				}, {
					name: '餐厅',
					id: 'yule'
				}, {
					name: '阳台',
					id: 'junshi'
				}, {
					name: '过道',
					id: 'lishi'
				}, ]
			}
		},
		onLoad: function() {
			this.swiper = this.randomfn();
		},
		methods: {
			goDetail(e) {
				uni.navigateTo({
					url: ''
				})
			},

			loadMore(e) {
				this.swiper[e].loadingType = 1;
				setTimeout(() => {
					this.addData(e);
				}, 1200);
			},
			addData(e) {
				if (this.swiper[e].data.length > 30) {
					this.swiper[e].loadingType = 2;
					return;
				}
				for (let i = 1; i <= 10; i++) {
					this.swiper[e].data.push(this['data' + Math.floor(Math.random() * 5)]);
				}
				this.swiper[e].loadingType = 1;
			},
			async changeTab(e) {
				let index = e.detail.current;
				if (this.isClickChange) {
					this.tabIndex = index;
					this.isClickChange = false;
					return;
				}
				let tabBar = await this.getElSize("tab-bar"),
					tabBarScrollLeft = tabBar.scrollLeft;
				let width = 0;

				for (let i = 0; i < index; i++) {
					let result = await this.getElSize(this.tabBars[i].id);
					width += result.width;
				}
				let winWidth = uni.getSystemInfoSync().windowWidth,
					nowElement = await this.getElSize(this.tabBars[index].id),
					nowWidth = nowElement.width;
				if (width + nowWidth - tabBarScrollLeft > winWidth) {
					this.scrollLeft = width + nowWidth - winWidth;
				}
				if (width < tabBarScrollLeft) {
					this.scrollLeft = width;
				}
				this.isClickChange = false;
				this.tabIndex = index; //一旦访问data就会出问题
			},
			getElSize(id) { //得到元素的size
				return new Promise((res, rej) => {
					uni.createSelectorQuery().select('#' + id).fields({
						size: true,
						scrollOffset: true
					}, (data) => {
						res(data);
					}).exec();
				});
			},
			async tapTab(index) { //点击tab-bar
				if (this.tabIndex === index) {
					return false;
				} else {
					let tabBar = await this.getElSize("tab-bar"),
						tabBarScrollLeft = tabBar.scrollLeft; //点击的时候记录并设置scrollLeft
					this.scrollLeft = tabBarScrollLeft;
					this.isClickChange = true;
					this.tabIndex = index;
				}
			},
			randomfn() {
				let ary = [];
				for (let i = 0, length = this.tabBars.length; i < length; i++) {
					let aryItem = {
						loadingType: 0,
						data: []
					};
					for (let j = 1; j <= 10; j++) {
						aryItem.data.push(this['data']);
					}
					ary.push(aryItem);
				}
				return ary;
			}

		}
	}
</script>

<style>
	page {
		height: 100%;
	}

	/* #ifdef MP-ALIPAY */
	.swiper-tab-list {
		display: inline-block;
	}

	/* #endif */
</style>
