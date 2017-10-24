<template lang="html">
  <el-row :gutter="20">
    <el-col :span="12" :offset="6">
      <el-form ref="sform" :model="form" label-width="120px" :rules="rules">
        <el-form-item label="Name" prop="name">
          <el-input id="name" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="Age" prop="age">
          <el-input id="age" v-model.number="form.age"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input id="password" type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="PasswordConfirm" prop="passconf">
          <el-input id="passconf" type="password" v-model="form.passconf"></el-input>
        </el-form-item>
        <el-form-item label="Description" prop="desc">
          <el-input id="desc" type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button id="btn-signup" type="primary" @click="submitForm('sform')">Sign Up</el-button>
        </el-form-item>
        <el-alert id="result" :title="state" :type="state">
        </el-alert>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      state: 'info',
      form: {
        name: '',
        age: '',
        password: '',
        passconf: '',
        desc: '',
      },
      rules: {
        name: [
          { required: true, message: '入力必須項目です' },
          { min: 3, max: 12, message: '3～12文字で入力してください' },
        ],
        age: [
          { required: true, message: '入力必須項目です' },
          { type: 'number', message: '数字で入力してください' },
          { type: 'number', min: 1, max: 100, message: '1～100の範囲で入力してください' },
        ],
        password: [
          { required: true, message: '入力必須項目です' },
          { min: 8, message: '8文字以上で入力してください' },
        ],
        passconf: [
          {
            validator: (rule, value, callback) => {
              if (value === '') {
                return callback(new Error('入力必須項目です'));
              }
              if (value !== this.form.password) {
                return callback(new Error('パスワードが一致しません'));
              }
              return callback();
            },
            trigger: 'change',
          },
        ],
        desc: [
          { max: 10, message: '10文字以内で入力してください' },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.state = 'success';
        } else {
          this.state = 'error';
        }
      });
    },
  },
};
</script>

<style lang="css">
</style>
