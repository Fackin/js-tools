const babel = require('rollup-plugin-babel');
/**
 * TODO:
 * 1,浏览器与Node的区分
 * 2,
 */
export default config => {
  return {
    input: 'src/index.js',
    dest: config.dest,
    output: {
      file: config.dest,
      format: config.format
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
        babelrc: false, // 不读取babelrc文件
        presets: [['@babel/env', { modules: false }]], // 设置modules: false,否则babel会在rollup处理之前，把模块转移成commonjs风格，导致tree-shake失败
        runtimeHelpers: true,
        plugins: [
          // [
          //   '@babel/transform-runtime',
          //   {
          //     corejs: 2
          //   }
          // ]
        ]
      })
    ].concat(config.plugins || [])
  };
};
