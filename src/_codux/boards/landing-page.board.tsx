import { createBoard } from '@wixc3/react-board';
import LandingPage_board_module from './landing-page.board.module.scss';
import { Step, Card, Image, Button } from 'semantic-ui-react';
import PageHeader from '../../components/page-header/page-header';
import { useNavigate } from 'react-router-dom';
import Classnames from 'classnames';

export default createBoard({
    name: 'landing-page',
    Board: () => {
        const navigate = useNavigate();

        const handleNavigation = (path) => {
            navigate(path);
        };

        return (
            <div>
                <div className={LandingPage_board_module.pageheader}>
                    <PageHeader className={LandingPage_board_module['pg-header-landing']}>
                        <div />
                    </PageHeader>
                </div>
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
                <div className={LandingPage_board_module['landing-body']}>
                    <div className={LandingPage_board_module['header-landing-body']}>
                        <h2 className={LandingPage_board_module['option-card-header']}>
                            SELECT A FORM
                        </h2>
                        <h6 className={LandingPage_board_module.subtext}>
                            Read our views on the things that matter to you. And get to know our
                            people. We make the difference.
                        </h6>
                    </div>
                    <div className={LandingPage_board_module['option-cards']}>
                        <div className={LandingPage_board_module.grid1}>
                            {/* Card 1: Technical Data Entry */}
                            <div
                                className={LandingPage_board_module.techform}
                                onClick={() => handleNavigation('/dashboard-layout')}
                            >
                                <div className={LandingPage_board_module['technical-forms-card']}>
                                    <Image
                                        src="/src/assets/Technical Data entry0.svg"
                                        wrapped={false}
                                        ui={true}
                                        className={LandingPage_board_module.techformsimg}
                                    />
                                    <Card.Content
                                        className={LandingPage_board_module['card-content']}
                                    >
                                        <Card.Header
                                            className={LandingPage_board_module['card-header']}
                                        >
                                            Technical Data Entry{' '}
                                        </Card.Header>
                                        <Card.Description>
                                        The form collects essential information including personal details, address, account and meter numbers, contact information, service type, load requirements, previous supplier details, ownership proof, identification, and authorization for processing electricity connection requests.


                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content
                                        extra
                                        className={LandingPage_board_module['card-button']}
                                    >
                                        <Button
                                            className={LandingPage_board_module['form-button']}
                                            color="facebook"
                                            onClick={() => handleNavigation('/dashboard-layout')}
                                        >
                                            Go to Form
                                        </Button>
                                    </Card.Content>
                                </div>
                            </div>
                            {/* Card 2: Commercial Data Entry */}
                            <div
                                className={LandingPage_board_module.techform}
                                onClick={() => handleNavigation('/collection-layout')}
                            >
                                <div className={LandingPage_board_module['technical-forms-card']}>
                                    <Image
                                        src="/src/assets/commercial Data entry.svg"
                                        wrapped={true}
                                        ui={true}
                                        className={LandingPage_board_module.techformsimg}
                                    />
                                    <Card.Content
                                        className={LandingPage_board_module['card-content']}
                                    >
                                        <Card.Header
                                            className={LandingPage_board_module['card-header']}
                                        >
                                            Commercial Data Entry{' '}
                                        </Card.Header>
                                        <Card.Description>
                                        The form collects essential information including personal details, address, account and meter numbers, contact information, service type, load requirements, previous supplier details, ownership proof, identification, and authorization for processing electricity connection requests.

                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content
                                        extra
                                        className={LandingPage_board_module['card-button']}
                                    >
                                        <Button
                                            className={LandingPage_board_module.buttonformenter}
                                            color="facebook"
                                            onClick={() => handleNavigation('/collection-layout')}
                                        >
                                            Go to Form
                                        </Button>
                                    </Card.Content>
                                </div>
                            </div>
                            {/* Card 3: Financial Data Entry */}
                            <div
                                className={LandingPage_board_module.techform}
                                onClick={() => handleNavigation('/financial-layout')}
                            >
                                <div className={LandingPage_board_module['technical-forms-card']}>
                                    <Image
                                        src="/src/assets/Financial Data entry.svg"
                                        wrapped={true}
                                        ui={true}
                                        className={LandingPage_board_module.techformsimg}
                                    />
                                    <Card.Content
                                        className={LandingPage_board_module['card-content']}
                                    >
                                        <Card.Header
                                            className={LandingPage_board_module['card-header']}
                                        >
                                            Financial Data Entry{' '}
                                        </Card.Header>
                                        <Card.Description>
                                        The form collects essential information including personal details, address, account and meter numbers, contact information, service type, load requirements, previous supplier details, ownership proof, identification, and authorization for processing electricity connection requests.

                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content
                                        extra
                                        className={LandingPage_board_module['card-button']}
                                    >
                                        <Button
                                            className={LandingPage_board_module.buttonformenter}
                                            color="facebook"
                                            onClick={() => handleNavigation('/financial-layout')}
                                        >
                                            Go to Form
                                        </Button>
                                    </Card.Content>
                                </div>
                            </div>
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
