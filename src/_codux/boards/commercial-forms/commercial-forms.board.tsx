import { createBoard } from '@wixc3/react-board';
import { CommercialForms } from '../../../components/commercial-forms/commercial-forms';

export default createBoard({
    name: 'CommercialForms',
    Board: () => <CommercialForms />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 996,
        windowWidth: 2487,
    },
});