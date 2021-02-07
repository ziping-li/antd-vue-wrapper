# Phone

```vue demo
<template>
  <a-phone v-model.value="value" @change="onChange"></a-phone>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const value = ref('+8613617322615');

    const onChange = (val) => {
      console.log(val);
    };

    return {
      value,
      onChange,
    };
  },
});
</script>
```
