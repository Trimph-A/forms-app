import { createBoard } from '@wixc3/react-board';
import { TechnicalForms } from '../../../components/technical-forms/technical-forms';

export default createBoard({
    name: 'TechnicalForms',
    Board: () => <TechnicalForms />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 996,
        windowWidth: 2487,
    },
});
