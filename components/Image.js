import React from 'react';
import { urlFor } from '../sanity';

function Image({ identifier, image }) {
  return (
    <div className={identifier === 'main-image' ? 'main-image' : 'image'}>
      <img src={urlFor(image).auto('format')} alt="" />
    </div>
  );
}

export default Image;
