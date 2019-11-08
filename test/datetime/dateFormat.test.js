import { dateFormat } from '../../src/index';

describe('日期时间格式校验', () => {
  let time = 1573113400000;
  it(time + ":'yyyy-MM-dd hh:mm:ss' 应为2019-11-07 15:56:40", () => {
    return dateFormat(time, 'yyyy-MM-dd hh:mm:ss') == '2019-11-07 15:56:40';
  });
});
