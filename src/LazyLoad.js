import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {url_path} from './config'


// const LazyLoad = ({id, style, alt, src }) => (
//     <div id ={id}>
//         <LazyLoadImage
//             style={{zIndex:'1', width:'100%'}}
//             alt={alt}
//             src={src} // use normal <img> attributes as props
//             effect='blur' />
//     </div>
// );

const LazyLoad = ({props}) => (
        <div id ={props.img_name}>
            <LazyLoadImage
                style={{zIndex:'1', width:'100%'}}
                alt={props.img_name}
                src={url_path+'/'+props.img_path+'/'+props.img_name+'.'+props.src_type} // use normal <img> attributes as props
                effect='blur' />
        </div>
);
export default LazyLoad;