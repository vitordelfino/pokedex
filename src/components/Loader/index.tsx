import React from 'react';
import Lottie from 'react-lottie';
import animationData from './pokemon.json';

const Loader = (): JSX.Element => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div
      style={{
        width: '100%',
        position: 'fixed',
        zIndex: 1000,
        top: '50%',
      }}
    >
      <Lottie
        options={defaultOptions}
        width={100}
        height={100}
        isClickToPauseDisabled
      />
    </div>
  );
};

export default Loader;
