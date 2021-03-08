<template>
  <div class="login login--center login--white">
    <div class="login-bg-wrap">
      <div class="login-bg"></div>
    </div>
    <div class="login-box-wrap">
      <div class="bg-container">
        <div class="login-box">
          <a-form
            id="form"
            :form="form"
            class="login-form"
            @submit="handleSubmit"
          >
            <a-form-item>
              <a-input
                v-decorator="[
                  'userName',
                  {
                    rules: [
                      {
                        required: true,
                        message: 'Please input your username!',
                      },
                    ],
                  },
                ]"
                placeholder="Username"
              >
                <a-icon
                  slot="prefix"
                  type="user"
                  style="color: rgba(0, 0, 0, 0.25)"
                />
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input
                v-decorator="[
                  'password',
                  {
                    rules: [
                      {
                        required: true,
                        message: 'Please input your Password!',
                      },
                    ],
                  },
                ]"
                type="password"
                placeholder="Password"
              >
                <a-icon
                  slot="prefix"
                  type="lock"
                  style="color: rgba(0, 0, 0, 0.25)"
                />
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-checkbox
                v-decorator="[
                  'remember',
                  {
                    valuePropName: 'checked',
                    initialValue: true,
                  },
                ]"
              >
                Remember me
              </a-checkbox>
              <a class="login-form-forgot" href=""> Forgot password </a>
              <a-button
                type="primary"
                html-type="submit"
                class="login-form-button"
              >
                Log in
              </a-button>
              <a href="" style="float: left; color: #1890ff">
                Or register now!
              </a>
            </a-form-item>
          </a-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      banner: require("@/assets/images/slogan.png"),
      yzCodes: "0123456789abcdefghijklmnopqrstuvwsyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
      loginInfo: {
        userName: "",
        passWord: "",
        yzCode: "",
      },
      yzCodeValue: "",
      checked: false,
      isRememberMe: false,
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" })
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values)
        }
 this.$router.push("/");
      })
    },
  },
}
</script>
<style>
@import "../../assets/css/login.css";
#form .login-form {
  max-width: 300px;
}
#form .login-form-forgot {
  float: right;
}
#form .login-form-button {
  width: 100%;
}
.ant-form-item label {
  float: left;
  color: #1890ff;
}
</style>
