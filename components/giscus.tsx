'use client';

import Giscus from '@giscus/react';

export function Comments() {
  return (
    <Giscus
      repo='AKCIZUR/docs'
      repoId=''
      category='General'
      categoryId=''
      mapping='pathname'
      reactionsEnabled='1'
      emitMetadata='0'
      inputPosition='top'
      theme='dark'
      lang='en'
    />
  );
}
