<template lang="html">
  <el-row :gutter="20">
    <el-col :span="12" :offset="6">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="Name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="BirthDay">
          <el-date-picker type="date" v-model="form.birthDay" style="width: 100%;"></el-date-picker>
        </el-form-item>
        <el-form-item label="Password">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="PasswordConfirm">
          <el-input type="password" v-model="form.confpass"></el-input>
        </el-form-item>
        <el-form-item label="Description">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">Create</el-button>
          <el-button>Cancel</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        birthDay: '',
        password: '',
        confpass: '',
        desc: '',
      },
    };
  },
};
</script>

<style lang="css">
</style>
