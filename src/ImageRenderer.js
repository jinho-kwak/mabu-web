import React, { useState, useRef } from 'react';
import { useIntersection } from './intersectionObserver';

const ImageRenderer = ({ id, url}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();
  useIntersection(imgRef, () => {
    setIsInView(true);
  });

  const handleOnLoad = () => {
    setIsLoaded(true);
  };
  return (
    <div id = {id} ref={imgRef} style={{width:'100%'}}>
      {isInView && (<img style={{width:'100%'}} src={url} onLoad={handleOnLoad} />)}
    </div>
  );
};

export default ImageRenderer;
