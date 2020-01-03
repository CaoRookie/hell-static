<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">
      <div class="title-container">
        <h3 class="title">
          <svg-icon icon-class="human-skull" />
          地府管理系统
        </h3>
      </div>
      <el-tabs tab-position="top" class="tab-container" :stretch="true">
        <el-tab-pane label="账号登录">
          <el-form-item prop="username">
            <span class="svg-container">
              <svg-icon icon-class="user" />
                </span>
            <el-input
              ref="username"
              v-model="loginForm.username"
              placeholder="账号/手机号/邮箱"
              name="username"
              type="text"
              tabindex="1"
              autofocus="true"
              autocomplete="off"
              auto-complete="off">
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <span class="svg-container">
              <svg-icon icon-class="password" />
            </span>
            <el-input
              :key="passwordType"
              ref="password"
              v-model="loginForm.password"
              :type="passwordType"
              placeholder="密码"
              name="password"
              tabindex="2"
              autocomplete="off"
              auto-complete="off"
              autofocus="true"
              @keyup.enter.native="handleLogin">
            </el-input>
            <span class="show-pwd" @click="showPwd">
              <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
            </span>
          </el-form-item>
          <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">登录</el-button>
          <div class="tips">
            <a href="javascript:void(0)">忘记密码？</a>
          </div>
        </el-tab-pane>
        <el-tab-pane label="手机登录">
          <el-form-item prop="phone">
            <span class="svg-container">
              <svg-icon icon-class="phone" />
            </span>
            <el-input
              ref="phone"
              v-model="loginForm.phone"
              placeholder="手机号"
              name="phone"
              type="text"
              tabindex="1"
              autofocus="true"
              autocomplete="off"
              auto-complete="off">
            </el-input>
          </el-form-item>
          <el-form-item prop="validCode">
            <span class="svg-container">
              <svg-icon icon-class="password" />
            </span>
            <el-input
              ref="validCode"
              v-model="loginForm.validCode"
              type="text"
              placeholder="验证码"
              name="validCode"
              tabindex="2"
              auto-complete="on"
              autofocus="true"
              autocomplete="off"
              @keyup.enter.native="handleLogin">
            </el-input>
            <span class="show-pwd" @click="showPwd">
              发送验证码
            </span>
          </el-form-item>
          <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">登录</el-button>
        </el-tab-pane>
        <el-tab-pane label="扫码登录">
          <el-image :src="loginForm.imageUrl" fit="cover"></el-image>
        </el-tab-pane>
      </el-tabs>


    </el-form>
  </div>
</template>

<script>
import { validUsername } from '@/utils/validate'

export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('用户名错误'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码错误'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        phone: '',
        validCode: '',
        password: '',
        imageUrl:'http://192.168.99.16:9099/download/case_proof/2019-11-26/1574759330069_v2-b3341f0ccae93eb1501a69bdd5f11c4a_hd.jpg',
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm).then(() => {
            this.$router.push({ path: this.redirect || '/' })
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#283443;
$light_gray:#fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: rgba(0, 0, 0, 0.627);
      height: 47px;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: white;
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;
$btn_color:#409EFF;

.login-container {
  min-height: 100%;
  width: 100%;
  /*background-color: $bg;*/
  background-image: url("../../assets/images/bg.jpeg");
  background-size: cover;
  overflow: hidden;

  .login-form {
    background-color: #e6e6e6;
    position: relative;
    width: 430px;
    max-width: 100%;
    padding: 150px 35px;
    margin: 10px auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: $btn_color;
    margin-bottom: 10px;
    float: right;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-weight: 700;
      font-style: normal;
      font-size: 28px;
      color: rgba(0, 0, 0, 0.627);
      font-family: "华文隶书 Bold", 华文隶书,serif;
      box-shadow: none;
      margin: 0px auto 40px auto;
      text-align: center;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $btn_color;
    cursor: pointer;
    user-select: none;
  }
}
</style>
