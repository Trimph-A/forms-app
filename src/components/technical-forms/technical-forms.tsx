import classNames from 'classnames';
import styles from './technical-forms.module.scss';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Form, Header, Icon, Checkbox, Button } from 'semantic-ui-react';

export interface TechnicalFormsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

const options = [
    { key: 'm', text: 'Kano', value: 'kano' },
    { key: 'f', text: 'Katsina', value: 'katsina' },
    { key: 'o', text: 'Jigawa', value: 'jigawa' },
];

const options1 = [
    { key: 'm', text: 'Kano', value: 'kano' },
    { key: 'f', text: 'Katsina', value: 'katsina' },
    { key: 'o', text: 'Jigawa', value: 'jigawa' },
];

export const TechnicalForms = ({ className }: TechnicalFormsProps) => {
    const [selectedRadio1, setSelectedRadio1] = useState<string>();

    const handleChange1 = (value: string) => setSelectedRadio1(value);
    const [selectedRadio, setSelectedRadio] = useState<string>();

    const handleChange = (value: string) => setSelectedRadio(value);

    const [selectedTime, setSelectedTime] = useState('');

    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
    };
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
                                placeholder="05:00"
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
                        </Form.Group>
                    </div>
                    <div className={classNames(styles.hourlyforms, styles.pm)}>
                        <Form.Group className={styles.selection}>
                            <Form.Input
                                label=""
                                placeholder="12:00"
                                className={styles['hourly-input']}
                            />
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
                        </Form.Group>
                    </div>
                </div>
                <div className={styles.faults}>
                    <h5 className={classNames(styles['load-reading-header'], styles.interruptions)}>
                        Fault Reporting{' '}
                    </h5>
                    <Form.Group className={styles['faults-select']}>
                        <Form.Select
                            label=""
                            placeholder="Type of Fault"
                            options={options}
                            className={styles['faults-dropdown']}
                        />
                        <Form.Field className={styles['faults-time-picker']}>
                            <label></label>
                            <Form.Input
                                type="time"
                                value={selectedTime}
                                onChange={handleTimeChange}
                                placeholder="Time of Occurence"
                            />
                        </Form.Field>
                        <Form.Field className={styles['faults-time-picker']}>
                            <label></label>
                            <Form.Input
                                type="time"
                                value={selectedTime}
                                onChange={handleTimeChange}
                                placeholder="Time of Resolve"
                            />
                        </Form.Field>
                    </Form.Group>
                </div>
                <div className={styles['energy-reading']}>
                    <h5 className={styles['load-reading-header']}>Energy Reading</h5>

                    <Form.Input label="" placeholder="Energy Reading" />
                </div>
                <div className={styles['save-submit']}>
                    <button className={styles['save-button']}>Save Changes</button>
                    <button className={styles['submit-button']} type="submit"> Submit
                    </button>
                </div>
            </Form>
        </div>
    );
};
