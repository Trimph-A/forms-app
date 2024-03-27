import { createBoard } from '@wixc3/react-board';
import { FinancialForms } from '../../../components/financial-forms/financial-forms';

export default createBoard({
    name: 'FinancialForms',
    Board: () => <FinancialForms />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 996,
        windowWidth: 2487,
    },
});