import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

interface ILoading {
  status?: boolean;
}

const Loading = ({ status }: ILoading) => (
  <Player
    autoplay
    loop
    src="https://assets3.lottiefiles.com/datafiles/bEYvzB8QfV3EM9a/data.json"
    style={{
      height: '300px',
      width: '300px',
      display: status ? 'flex' : 'none',
    }}
  ></Player>
);

export { Loading };
