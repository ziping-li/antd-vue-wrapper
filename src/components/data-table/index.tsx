import { defineComponent, ref } from 'vue';
import DataView from '../data-view';
import { queryMedia } from '../../theme/index';
import './index.less';

export default defineComponent({
  name: 'data-table',
  inheritAttrs: false,
  setup(_props, { attrs, slots }) {
    const media = ref('');
    queryMedia((data: string) => {
      media.value = data;
    });

    return () => (
      <>
        {['xs', 'sm'].includes(media.value) ? (
          <DataView {...attrs} v-slots={slots} />
        ) : (
          <a-table {...attrs} v-slots={slots}></a-table>
        )}
      </>
    );
  },
});
