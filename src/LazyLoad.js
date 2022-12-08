import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const LazyLoad = ({id, style, alt, src }) => (
    <div id ={id}>
        <LazyLoadImage
            style={{zIndex:'1', width:'100%'}}
            alt={alt}
            src={src} // use normal <img> attributes as props
            effect='blur' />
    </div>
);

export default LazyLoad;