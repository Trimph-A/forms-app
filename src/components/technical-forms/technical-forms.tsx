import classNames from 'classnames';
import styles from './technical-forms.module.scss';
import { useState } from 'react';
import { Form, Header, Icon, Checkbox, Button } from 'semantic-ui-react';

export interface TechnicalFormsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
];

const options1 = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
];

export const TechnicalForms = ({ className }: TechnicalFormsProps) => {
    const [selectedRadio1, setSelectedRadio1] = useState<string>();

    const handleChange1 = (value: string) => setSelectedRadio1(value);
    const [selectedRadio, setSelectedRadio] = useState<string>();

    const handleChange = (value: string) => setSelectedRadio(value);
    return (
        <div className={classNames(styles.root, className)}>
            <Form className={styles.form}>
                <Form.Group widths="equal" className={styles.selection}>
                    <Form.Select fluid label="STATE" options={options} placeholder="STATE" />
                    <Form.Select
                        fluid
                        label="Business District"
                        options={options}
                        placeholder="Business District"
                    />
                    <Form.Select fluid label="Feeders" options={options} placeholder="Feeders" />
                </Form.Group>
                <div className={styles['Hourly-box']}>
                    <h5 className={styles['load-reading-header']}>Hourly Load Reading</h5>
                    <div className={classNames(styles.hourlyforms, styles.am)}>
                        <Form.Group className={styles.selection}>
                            <Form.Input
                                label=""
                                placeholder="00:00"
                                className={styles['hourly-input']}
                            />
                            <Form.Input
                                label=""
                                placeholder="01:00"
                                className={styles['hourly-input']}
                            />
                            <Form.Input
                                label=""
                                placeholder="02:00"
                                className={styles['hourly-input']}
                            />
                            <Form.Input
                                label=""
                                placeholder="03:00"
                                className={styles['hourly-input']}
                            />
                            <Form.Input
                                label=""
                                placeholder="04:00"
                                className={styles['hourly-input']}
                            />
                            <Form.Input
                                label=""
                                placeholder="06:00"
                                className={styles['hourly-input']}
                            />
                            <Form.Input
                                label=""
                                placeholder="07:00"
                                className={styles['hourly-input']}
                            />
                            <Form.Input
                                label=""
                                placeholder="08:00"
                                className={styles['hourly-input']}
                            />
                            <Form.Input
                                label=""
                                placeholder="09:00"
                                className={styles['hourly-input']}
                            />
                            <Form.Input
                                label=""
                                placeholder="10:00"
                                className={styles['hourly-input']}
                            />
                            <Form.Input
                                label=""
                                placeholder="11:00"
                                className={styles['hourly-input']}
                            />
                            <Form.Input
                                label=""
                                placeholder="12:00"
                                className={styles['hourly-input']}
                            />
                        </Form.Group>
                    </div>
                    <div className={classNames(styles.hourlyforms, styles.pm)}>
                        <Form.Group className={styles.selection}>
                            <Form.Input
                                label=""
                                placeholder="13:00"
                                className={styles['hourly-input']}
                            />
                            <Form.Input
                                label=""
                                placeholder="14:00"
                                className={styles['hourly-input']}
                            />
                            <Form.Input
                                label=""
                                placeholder="15:00"
                                className={styles['hourly-input']}
                            />
                            <Form.Input
                                label=""
                                placeholder="16:00"
                                className={styles['hourly-input']}
                            />
                            <Form.Input
                                label=""
                                placeholder="17:00"
                                className={styles['hourly-input']}
                            />
                            <Form.Input
                                label=""
                                placeholder="18:00"
                                className={styles['hourly-input']}
                            />
                            <Form.Input
                                label=""
                                placeholder="19:00"
                                className={styles['hourly-input']}
                            />
                            <Form.Input
                                label=""
                                placeholder="20:00"
                                className={styles['hourly-input']}
                            />
                            <Form.Input
                                label=""
                                placeholder="21:00"
                                className={styles['hourly-input']}
                            />
                            <Form.Input
                                label=""
                                placeholder="22:00"
                                className={styles['hourly-input']}
                            />
                            <Form.Input
                                label=""
                                placeholder="23:00"
                                className={styles['hourly-input']}
                            />
                            <Form.Input
                                label=""
                                placeholder="--:--"
                                className={classNames(styles['hourly-input'], styles.lastvalue)}
                                disabled
                            />
                        </Form.Group>
                    </div>
                </div>

                <Form.Checkbox label="I agree to the Terms and Conditions" />
                <Form.Button>Submit</Form.Button>
            </Form>

        </div>
    );
};
