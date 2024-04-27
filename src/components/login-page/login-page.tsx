import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import styles from './login-page.module.scss';
import { Form, Checkbox, Divider } from 'semantic-ui-react';

export interface LoginPageProps {
    className?: string;
}

const LoginPage = ({ className }: LoginPageProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (email === 'fortune@test.com' && password === 'test') {
            console.log('Login successful!');
            navigate('/landing'); 
        } else {
            console.log('Invalid email or password');
        }
    };

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.grid1}>
                <div>
                    <img
                        alt=""
                        src="/src/assets/kedco.png"
                        width={300}
                        className={styles.logo}
                    />
                    <h1 className={styles.H1}>
                        Perfomance Monitoring Tool For Large Scale Asset Management and Productivity
                        Reporting{' '}
                    </h1>
                </div>
                <div className={styles['login-form-background']}>
                    <div className={styles['login-side']}>
                        <h2 className={classNames(styles.H1, styles.getstarted)}>
                            Log in to your account
                        </h2>
                        <Form>
                            <Form.Field>
                                <label>Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>Password</label>
                                <input
                                    type="password"
                                    placeholder="******"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Field>
                            <div className={styles.checkbox_forgotpassword}>
                                <Checkbox label="Remember me" className={styles['remember-me-checkbox']} />
                                <a href="#" className={styles['forgot-password']}>
                                    Forgot password
                                </a>
                            </div>
                            <button className={styles['sign-in1']} onClick={handleLogin}>
                                Sign In
                            </button>
                        </Form>
                        <Divider className={styles['divider-container']}>
                            <div className={styles['divider-text01']}>Or</div>
                        </Divider>
                        <button className={styles['social-login']}>
                            <div className={styles.grid2}>
                                <img src="/src/assets/google-logo-DXjxL3jJ.svg" height="34" />
                                Continue with Google
                            </div>
                        </button>
                        <button className={styles['social-login']}>
                            <div className={styles.grid2}>
                                <img src="/src/assets/microsoft-logo-VF8UJ1xx.svg" className={styles['microsoft-logo']} />
                                Continue with Microsoft
                            </div>
                        </button>
                        <div className={styles['login-side-footer']}>
                            <h3 className={styles['login-side-footer-text']}>powered by</h3>
                            <img src="/src/assets/emrc logo black.svg" alt="" height="30" />
                            <div className={styles.grid3}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const LoginPage = ({ className }: LoginPageProps) => {
    return <div className={classNames(styles.root, className)}>LoginPage</div>;
};

