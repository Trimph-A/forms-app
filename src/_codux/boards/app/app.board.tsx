import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

const BoardComponent = () => <App />;

export default createBoard({
    name: 'App',
    Board: () => <BoardComponent />,
    environmentProps: { windowHeight: 1080, windowWidth: 3000 },
    isSnippet: false,
});
