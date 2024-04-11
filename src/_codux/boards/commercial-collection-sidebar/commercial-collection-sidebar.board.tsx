import { createBoard } from '@wixc3/react-board';
import { CommercialCollectionSidebar } from '../../../components/commercial-collection-sidebar/commercial-collection-sidebar';

export default createBoard({
    name: 'CommercialCollectionSidebar',
    Board: () => <CommercialCollectionSidebar />,
    isSnippet: true,
    environmentProps: {
        windowHeight: 516,
        windowWidth: 465,
        canvasWidth: 465.2195677819484,
        canvasHeight: 516.3252750516833,
    },
});
