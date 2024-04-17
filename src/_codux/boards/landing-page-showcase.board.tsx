import { createBoard } from '@wixc3/react-board';
import LandingPage_board_module from './landing-page.board.module.scss';
import { Step, Card, Image, Button } from 'semantic-ui-react';
import PageHeader from '../../components/page-header/page-header';
import { useNavigate } from 'react-router-dom';
import Classnames from 'classnames';

export default createBoard({
    name: 'landing-page showcase',
    Board: () => {
        const navigate = useNavigate();

        const handleNavigation = (path) => {
            navigate(path);
        };

        return (
            <div>
                
                <div className={LandingPage_board_module['landing-bg']}>
                    <div className={LandingPage_board_module.grid}>
                        <div>
                            <div />
                            <h2 className={LandingPage_board_module['landing-header-txt']}>
                                Perfomance Monitoring Tool For Large Scale Asset Management and
                                Productivity Reporting
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    },
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        canvasWidth: 1920,
        windowHeight: 1905,
    },
});
