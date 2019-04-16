<template>
	<view>
		<!-- swiper -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for='(item,index) in swiper' :key='index' class="uni-flex">
				<image class="swiper-item uni-flex-item" :src='item' mode=""></image>
			</swiper-item>

		</swiper>
		<!-- 人员列表 -->
		<view class="uni-card" v-for="(item,index) in designerList" :key='index' @click="goDetail(item.id)">
			<view class="uni-card-header">{{item.type}}</view>
			<view class="uni-card-content">
				<view class="uni-card-content-inner uni-flex uni-column">
					<view class="uni-comment-list">
						<view class="uni-comment-face">
							<image :src="item.avatarUrl" mode="widthFix"></image>
						</view>
						<view class="uni-comment-body">
							<view class="uni-comment-top uni-flex">
								<view class="">
									{{item.name}}
								</view>
								<view class="">
									11.2km
								</view>
							</view>
							<view class="uni-comment-date" >
								<view class="">
									类型
								</view>
								<view class="">
									{{item.type}}
								</view>
							</view>
						</view>
					</view>
					<view class="uni-flex">
						<image :src="item.case1" mode="" style="height: 200upx;width: 200upx;" class="uni-flex-item uni-mr"></image>
						<image :src="item.case2" mode="" style="height: 200upx;width: 200upx;" class="uni-flex-item uni-mr"></image>
						<image :src="item.case3" mode="" style="height: 200upx;width: 200upx;" class="uni-flex-item"></image>
					</view>
					<view class="">
						{{item.detail}}
					</view>
					<view class="uni-list-cell uni-list-cell-last uni-list">
						<view class="uni-list-cell-navigate uni-navigate-right uni-navigate-badge">
							<view class="uni-list-cell-db">
								用户评价({{item.comment.num}})
							</view>


							<view class="uni-list-cell-db" style="color:#FF3333;">
								{{item.comment.rate}}好评
							</view>
							<view class="" style="color: #FF3333;">
								更多评价
							</view>
						</view>

					</view>
					<view class="uni-comment-list">
						<view class="uni-comment-face">
							<image :src="item.comment.avatarUrl" mode=widthFix></image>
						</view>
						<view class="uni-comment-body">
							<view class="uni-comment-top">
								<text>{{item.comment.nickName}}</text>
								
							</view>
							<view class="uni-comment-date">
								<view class="">
									{{item.comment.date}}
								</view>
								
							</view>
							<view class="uni-comment-content">
								{{item.comment.content}}
							</view>
						</view>
					</view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				designerList: [],
				swiper: ['http://qiniu.satapp.cn/fuzhi/swiper.png'],
				data: {
					'avatarUrl': 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png',
					'name': '张师傅',
					'type': '室内设计师',
					'detail': '设计特点及明码标价',
					'case1': 'http://qiniu.satapp.cn/fuzhi/swiper.png',
					'case2': 'http://qiniu.satapp.cn/fuzhi/swiper.png',
					'case3': 'http://qiniu.satapp.cn/fuzhi/swiper.png',
					'comment': {
						'avatarUrl': 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png',
						'nickName': '朝花夕拾',
						'num': '569',
						'rate': '100%',
						'date': '2018-09-23',
						'content': '张师傅设计很好！'
					}

				}

			};
		},
		onLoad(e) {
			
			if(e.type==2){
				uni.setNavigationBarTitle({
					title:'施工人员列表'
				})
			};
			this.designerList = this.randomfn()
		},
		methods: {
			randomfn() {
				let arr = [];
				for (var i = 0; i < 8; i++) {
					arr.push(this['data']);
				}
				return arr;
			},
			goDetail(e){
				uni.navigateTo({
					url:'../designer-detail/designer-detail'
				})
			}
		},
	}
</script>

<style>
	page{
		background-color: #CCCCCC;
	}
	.uni-mr {
		margin-right: 10upx;
	}
</style>
