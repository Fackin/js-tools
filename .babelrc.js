module.exports = {
  presets: [require('@babel/preset-env')],
  env: {
    test: {
      // 测试环境
      plugins: ['istanbul']
    }
  }
};
