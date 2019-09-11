import React from 'react';
import ReactDOM from 'react-dom';
import styles from './main.less';
// 导入项目的根组件
import { Card } from '../src/index.js';

const props = {
  title: '中标题',
  data: [
    {
      icon: '123',
      text: '降维打击好哇的记哈就肯定会问接口好我达瓦大武当无大无多哇大无多',
    },
    {
      icon: '456',
      text: '456',
    },
  ],
  status: 'normal',
  statusText: '已签到',
  descriptionBefore: '2019-09-11',
  descriptionAfter: '2019-09-11',
};

const App = ({ children }) => {
  return <div className={styles.main}>{children}</div>;
};
ReactDOM.render(
  <App>
    <Card {...props} />
  </App>,
  document.getElementById('root')
);
