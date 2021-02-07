import { App } from 'vue';
/* theme */
import theme from './theme';
/* glogal styles */
import './style/index.less';
/* util functions */
import utils from './utils';
/* all components */
import Logo from './components/logo';
import Container from './components/container';
import Phone from './components/phone';
import OtpSend from './components/otp-send';
import OtpInput from './components/otp-input';
import Formatted from './components/formatted';
import EnhanceAlert from './components/enhance-alert';
import Scroll from './components/scroll';
import DataView from './components/data-view';
import DataTable from './components/data-table';

const components: any[] = [
  Logo,
  Container,
  Phone,
  OtpSend,
  OtpInput,
  Formatted,
  EnhanceAlert,
  Scroll,
  DataView,
  DataTable,
];

const install = (app: App<Element>) => {
  // resgiter theme
  app.config.globalProperties = {
    ...app.config.globalProperties,
    ...theme,
    ...utils,
  };
  // resgiter components
  components.forEach((Component) => {
    app.component(`a-${Component.name}`, Component);
  });
};

export default {
  install,
  ...theme,
  ...utils,
  Logo,
  Container,
  Phone,
  OtpSend,
  OtpInput,
  Formatted,
  EnhanceAlert,
  Scroll,
  DataView,
  DataTable,
};
