<template>
	<view class="uni-padding-wrap">
		<form @submit="formSubmit" @reset="formReset">

			<view class="uni-form-item uni-column">
				<view class="title">店铺名称</view>
				<input name="name" class="uni-input" placeholder=""  focus />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">店铺地址</view>
				<input name="address" class="uni-input" placeholder="" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">手机号</view>
				<input name="phone" class="uni-input" placeholder="" type="number"/>
			</view>
			<view class="btn-area">
				<button formType="submit" class="uni-bg-red">立即提交</button>

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

</style>
