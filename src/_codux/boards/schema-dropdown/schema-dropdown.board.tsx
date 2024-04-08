import { createBoard } from '@wixc3/react-board';
import { SchemaDropdown } from '../../../components/schema-dropdown/schema-dropdown';

export default createBoard({
    name: 'SchemaDropdown',
    Board: () => <SchemaDropdown />,
    isSnippet: true,
});