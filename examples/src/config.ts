import Introduce from './__docs__/Introduce.md';
import GetStarted from './__docs__/GetStarted.md';
import Container from './__docs__/components/Container.md';
import Logo from './__docs__/components/Logo.md';
import Phone from './__docs__/components/Phone.md';
import OtpSend from './__docs__/components/OtpSend.md';
import OtpInput from './__docs__/components/OtpInput.md';
import Formatted from './__docs__/components/Formatted.md';
import EnhanceAlert from './__docs__/components/EnhanceAlert.md';
import Scroll from './__docs__/components/Scroll.md';
import DataView from './__docs__/components/DataView.md';
import DataTable from './__docs__/components/DataTable.md';

export default {
  title: 'Antd Vue Wrapper',
  routes: [
    { path: '/introduce', title: '简介', component: Introduce },
    { path: '/get-started', title: '快速上手', component: GetStarted },
    {
      path: '/',
      title: '组件',
      children: [
        { path: '/container', title: 'Container 容器', component: Container },
        { path: '/logo', title: 'Logo 标识', component: Logo },
        { path: '/phone', title: 'Phone 电话', component: Phone },
        { path: '/otp-send', title: 'OtpSend 发送验证码', component: OtpSend },
        { path: '/otp-input', title: 'OtpInput 输入验证码', component: OtpInput },
        { path: '/formatted', title: 'Formatted 格式化输入', component: Formatted },
        { path: '/enhance-alert', title: 'EnhanceAlert 警告提示', component: EnhanceAlert },
        { path: '/scroll', title: 'Scroll 滚动', component: Scroll },
        { path: '/data-view', title: 'DataView 数据列表', component: DataView },
        { path: '/data-table', title: 'DataTable 数据表格', component: DataTable },
      ],
    },
  ],
};
