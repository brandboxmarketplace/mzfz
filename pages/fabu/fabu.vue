<template>
	<view class="page">
		<form @submit="formSubmit" @reset="formReset">
			
			<view class="uni-form-item uni-column">
				<view class="title">真实姓名</view>
				<input name="input" class="uni-input" placeholder="please input here" focus />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">手机</view>
				<input name="phone" type="number" class="uni-input" placeholder="please input here"  />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">地址</view>
				<input name="adress" class="uni-input" placeholder="please input here"  />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">施工特点</view>
				<textarea name="feature" class="uni-input" placeholder="please input here"  />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">施工报价</view>
				<input name="bill" class="uni-input" placeholder="元/M²"  />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">选择类别</view>
				<input name="adress" class="uni-input" placeholder="please input here"  />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">案例图（最多上传9张）</view>
				<view class="uni-uploader">
				    <view class="uni-uploader-head">
				        <view class="uni-uploader-title">点击预览图片</view>
				        <view class="uni-uploader-info">{{imageList.length}}/8</view>
				    </view>
				    <view class="uni-uploader-body">
				        <view class="uni-uploader__files">
				            <block v-for="(image,index) in imageList" :key="index">
				                <view class="uni-uploader__file" style="position: relative;">
				                    <image class="uni-uploader__img" :src="image" @tap="previewImage(index)"></image>
				                    <view class="close-view" @click="close(index)">x</view>
				                </view>
				            </block>
				            <view class="uni-uploader__input-box" v-show="imageList.length < 8">
				            	<view class="uni-uploader__input" @tap="chooseImg"></view>
				            </view>
				        </view>
				    </view>
				</view>
			</view>
			
			<label class="checkbox">
				<checkbox value="" checked>我已阅读并同意《发布须知》</checkbox>
			</label>
			<view class="uni-padding-wrap">
				<button formType="submit">立即提交</button>
				
			</view>
		</form>
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
.page{
	background-color: #efeff4;
}
</style>
