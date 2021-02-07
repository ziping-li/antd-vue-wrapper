#!/usr/bin/env bash

componentName=`basename $1`
componentNormalizedName=$(echo $componentName | python -c 'import sys;[sys.stdout.write(line.title().replace("_", "").replace("-","")) for line in sys.stdin]')

cd src/components
set -x
mkdir -p $1

touch $1/index.tsx

cat <<EOF >>$1/index.tsx
import { defineComponent } from 'vue';
import './index.less';

export default defineComponent({
  name: '${componentName}',
  props: {
  },
  setup(props) {
  },
});
EOF

cat <<EOF >>$1/index.less
EOF

cd ../../docs/src/__docs__/components
set -x
mkfile -p ${componentNormalizedName}.md

cat <<EOF >>${componentNormalizedName}.md
# ${componentNormalizedName}
EOF

cd ../../../
