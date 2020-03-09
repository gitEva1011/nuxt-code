<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input v-validate="'required|email'" type="text" name="email" v-model="usernameModel" placeholder="请输入用户名">
        </div>
		<span v-show="errors.has('email')">{{ errors.first('email') }}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input v-validate="'required|alpha_dash'" type="password" name="alpha_dash" v-model="passwordModel" placeholder="请输入密码">
        </div>
        <span v-show="errors.has('alpha_dash')">{{ errors.first('alpha_dash') }}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onLogin">登录</a>
        </div>
      </div>
      <p></p>
    </div>
  </div>
</template>
<script>

export default{
  
	data(){
		return{
			usernameModel:"",
			passwordModel:""
		}
	},
	methods:{
		onLogin(){
			console.log(this.usernameModel,this.passwordModel)
		}
	}
}
</script>