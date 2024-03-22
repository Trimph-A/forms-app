import { createBoard } from '@wixc3/react-board';
import LoginPage_board_module from './login-page.board.module.scss';
import Classnames from 'classnames';
import { Form, Checkbox, Grid, Divider } from 'semantic-ui-react';
import { IconButton } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import MicrosoftIcon from '@mui/icons-material/Microsoft';

export default createBoard({
    name: 'login-page',
    Board: () => (
        <div className={LoginPage_board_module.background}>
            <div className={LoginPage_board_module.grid1}>
                <div>
                    <img
                        alt=""
                        src="/src/assets/eMRC-logo.png"
                        width={300}
                        className={LoginPage_board_module.logo}
                    />
                    <h1 className={LoginPage_board_module.H1}>
                        Perfomance Monitoring Tool For Large Scale Asset Management and Perfomance
                        Reporting{' '}
                    </h1>
                </div>
                <div className={LoginPage_board_module['login-form-background']}>
                    <div className={LoginPage_board_module['login-side']}>
                        <h2
                            className={Classnames(
                                LoginPage_board_module.H1,
                                LoginPage_board_module.getstarted,
                            )}
                        >
                            Log in to your account{' '}
                        </h2>
                        <Form>
                            <Form.Field>
                                <label>Email</label>
                                <input type="email" placeholder="Enter your email" />
                            </Form.Field>
                            <Form.Field>
                                <label>Password</label>
                                <input type="password" placeholder="******" />
                            </Form.Field>
                            <div className={LoginPage_board_module.checkbox_forgotpassword}>
                                <Checkbox
                                    label="Remember me"
                                    className={LoginPage_board_module['remember-me-checkbox']}
                                />
                                <a href="#" className={LoginPage_board_module['forgot-password']}>
                                    Forgot password
                                </a>
                            </div>
                            <button className={LoginPage_board_module['sign-in1']}>Sign In</button>
                        </Form>
                        <Divider className={LoginPage_board_module['divider-container']}>
                            <div className={LoginPage_board_module['divider-text01']}>Or</div>
                        </Divider>
                        <button className={LoginPage_board_module['social-login']}>
                            <div className={LoginPage_board_module.grid2}>
                                <img src="/src/assets/google-logo-DXjxL3jJ.svg" />
                                Continue with Google
                            </div>
                        </button>
                        <button className={LoginPage_board_module['social-login']}>
                            <div className={LoginPage_board_module.grid2}>
                                <img
                                    src="/src/assets/microsoft-logo-VF8UJ1xx.svg"
                                    className={LoginPage_board_module['microsoft-logo']}
                                />
                                Continue with Microsoft{' '}
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    ),
    isSnippet: true,
    environmentProps: {
        canvasHeight: 1195.2809901015837,
        canvasWidth: 1920,
        windowHeight: 1196,
        windowWidth: 1920,
    },
});
