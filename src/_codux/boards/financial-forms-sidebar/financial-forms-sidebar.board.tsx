import { createBoard } from '@wixc3/react-board';
import { FinancialFormsSidebar } from '../../../components/financial-forms-sidebar/financial-forms-sidebar';

export default createBoard({
    name: 'FinancialFormsSidebar',
    Board: () => <FinancialFormsSidebar />,
    isSnippet: true,
});