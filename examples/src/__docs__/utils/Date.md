# 时间

时间相关的函数并未单独处理，直接将 <code>dayjs</code> 作为全局属性暴露.

```typescript
import { dayjs } from 'antd-vue-wrapper';
```

当然，作为业务开发，肯定会有一组关于业务相关的时间处理方式，这时候就可以封装一些公共的方法到 <code>antd-vue-wrapper</code>.
