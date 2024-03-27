import { createBoard } from '@wixc3/react-board';
import LandingPage_board_module from './landing-page.board.module.scss';
import { Step, Card, Image, Button } from 'semantic-ui-react';
import PageHeader from '../../components/page-header/page-header';

export default createBoard({
    name: 'landing-page',
    Board: () => (
        <div>
            <div>
                <PageHeader className={LandingPage_board_module['pg-header-landing']} />
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
            <div />
            <div className={LandingPage_board_module['landing-body']}>
                <div className={LandingPage_board_module['header-landing-body']}>
                    <h2 className={LandingPage_board_module['option-card-header']}>
                        SELECT A FORM
                    </h2>
                    <h6 className={LandingPage_board_module.subtext}>
                        Read our views on the things that matter to you. And get to know our people.
                        We make the difference.
                    </h6>
                </div>
                <div className={LandingPage_board_module['option-cards']}>
                    <div className={LandingPage_board_module.grid1}>
                        <div className={LandingPage_board_module.techform}>
                            <div className={LandingPage_board_module['technical-forms-card']}>
                                <Image
                                    src="/src/assets/technical-data-entry.svg"
                                    wrapped={false}
                                    ui={true}
                                    className={LandingPage_board_module.techformsimg}
                                />
                                <Card.Content className={LandingPage_board_module['card-content']}>
                                    <Card.Header
                                        className={LandingPage_board_module['card-header']}
                                    >
                                        Technical Data Entry{' '}
                                    </Card.Header>
                                    <Card.Description>
                                        Lizards are a widespread group of squamate reptiles, with
                                        over 6,000 species, ranging across all continents except
                                        Antarctica.
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content
                                    extra
                                    className={LandingPage_board_module['card-button']}
                                >
                                    <Button
                                        className={LandingPage_board_module['form-button']}
                                        color="black"
                                    >
                                        Go to Form
                                    </Button>
                                </Card.Content>
                            </div>
                        </div>
                        <div className={LandingPage_board_module.techform}>
                            <div className={LandingPage_board_module['technical-forms-card']}>
                                <Image
                                    src="/src/assets/technical-data-entry.svg"
                                    wrapped={true}
                                    ui={true}
                                    className={LandingPage_board_module.techformsimg}
                                />
                                <Card.Content className={LandingPage_board_module['card-content']}>
                                    <Card.Header
                                        className={LandingPage_board_module['card-header']}
                                    >
                                        Technical Data Entry{' '}
                                    </Card.Header>
                                    <Card.Description>
                                        Lizards are a widespread group of squamate reptiles, with
                                        over 6,000 species, ranging across all continents except
                                        Antarctica.
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content
                                    extra
                                    className={LandingPage_board_module['card-button']}
                                >
                                    <Button color="black">Go to Form</Button>
                                </Card.Content>
                            </div>
                        </div>
                        <div className={LandingPage_board_module.techform}>
                            <div className={LandingPage_board_module['technical-forms-card']}>
                                <Image
                                    src="/src/assets/technical-data-entry.svg"
                                    wrapped={true}
                                    ui={true}
                                    className={LandingPage_board_module.techformsimg}
                                />
                                <Card.Content className={LandingPage_board_module['card-content']}>
                                    <Card.Header
                                        className={LandingPage_board_module['card-header']}
                                    >
                                        Technical Data Entry{' '}
                                    </Card.Header>
                                    <Card.Description>
                                        Lizards are a widespread group of squamate reptiles, with
                                        over 6,000 species, ranging across all continents except
                                        Antarctica.
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content
                                    extra
                                    className={LandingPage_board_module['card-button']}
                                >
                                    <Button color="blue">Go to Form</Button>
                                </Card.Content>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ),
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        canvasWidth: 1920,
        windowHeight: 1905,
    },
});
