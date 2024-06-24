import { createBoard } from '@wixc3/react-board';
import { TechnicalForms } from '../../../components/technical-forms/technical-forms';

export default createBoard({
    name: 'TechnicalForms',
    Board: () => <TechnicalForms />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1063,
        windowWidth: 2487,
        windowHeight: 670,
    },
});
