import { computed, defineComponent, ref } from 'vue';
import { queryMedia } from '../../theme';
import './index.less';

export default defineComponent({
  name: 'container',
  props: {
    fuild: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots }) {
    const media = ref('');
    queryMedia((data: string) => (media.value = data));
    const className = computed(() => ['avw-container', props.fuild ? 'fuild' : '', media.value]);

    return () => <div class={className}>{slots.default?.()}</div>;
  },
});
