import classNames from 'classnames';
import styles from './financial-forms.module.scss';
import { useState } from 'react';
import { Form } from 'semantic-ui-react';

export interface FinancialFormsProps {
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

export const FinancialForms = ({ className }: FinancialFormsProps) => {
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
                </Form.Group>
                <div className={styles['opex-inputs']}>
                    <h5 className={styles['load-reading-header']}>Input Monthly OPEX</h5>
                    <Form.Group widths="equal" className={styles.selection}>
                        <Form.Input label="" placeholder="Technical" type="number" />
                        <Form.Input label="" placeholder="IT" type="number" />
                        <Form.Input label="" placeholder="Commercial" type="number" />
                    </Form.Group>
                    <Form.Group widths="equal" className={styles.selection}>
                        <Form.Input label="" placeholder="Salary" type="number" />
                        <Form.Input label="" placeholder="Admin" type="number" />
                        <Form.Input label="" placeholder="Security" type="number" />
                    </Form.Group>
                </div>
                <div className={styles['save-submit-financial']}>
                    <button className={styles['save-button-financial']}>Save Changes</button>
                    <button type="submit" className={styles['submit-financial']}>
                        {' '}
                        Submit
                    </button>
                </div>
            </Form>
        </div>
    );
};
