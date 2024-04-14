import { createBoard } from '@wixc3/react-board';
import App from '../../../App';
import React from 'react';
import ReactDOM from 'react-dom';

const BoardComponent = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        canvasWidth: 2796.1387403452995,
        windowWidth: 3228,
        windowHeight: 1380,
        canvasHeight: 1084.25842457973,
    },
});
