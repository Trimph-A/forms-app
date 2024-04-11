import classNames from 'classnames';
import styles from './commercial-forms.module.scss';
import { useState } from 'react';
import { Form } from 'semantic-ui-react';

export interface CommercialFormsProps {
    className?: string;
}

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

export const CommercialForms = ({ className }: CommercialFormsProps) => {
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
                <div className={styles['opex-inputs']}>
                    <h5 className={styles['load-reading-header']}>Monthly Billing</h5>
                    <Form.Group widths="equal" className={styles.selection}>
                        <Form.Input label="" placeholder="Energy Billed (MW)" type="number" />
                        <Form.Input label="" placeholder="Revenue Billed (₦)" type="number" />
                    </Form.Group>
                </div>
                <div className={styles['opex-inputs']}>
                    <h5 className={styles['load-reading-header']}>Customer Data</h5>
                    <Form.Group widths="equal" className={styles.selection}>
                        <Form.Input label="" placeholder="Customer Population" type="number" />
                        <Form.Input label="" placeholder="Customer Billed" type="number" />
                    </Form.Group>
                </div>
                <div className={styles['excel-upload']}>
                    <h5 className={styles['load-reading-header']}>Upload File</h5>
                    <input type="file" className={styles['upload-excel']} />
                </div>
                <div className={styles['save-submit-commercial']}>
                    <button className={styles['save-button-commercial']}>Save Changes</button>
                    <button type="submit" className={styles['submit-button-commercial']}>
                        {' '}
                        Submit
                    </button>
                </div>
            </Form>
        </div>
    );
};
