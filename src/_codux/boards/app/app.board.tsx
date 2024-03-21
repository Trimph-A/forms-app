import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => null,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
    },
});
