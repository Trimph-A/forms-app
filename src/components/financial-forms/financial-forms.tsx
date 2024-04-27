import classNames from 'classnames';
import styles from './financial-forms.module.scss';
import { useState } from 'react';
import { Form } from 'semantic-ui-react';
import { DateInput } from 'semantic-ui-calendar-react';

export interface FinancialFormsProps {
    className?: string;
}

const options = [
    { key: 'm', text: 'Kano', value: 'kano' },
    { key: 'f', text: 'Katsina', value: 'katsina' },
    { key: 'o', text: 'Jigawa', value: 'jigawa' },
];

export const FinancialForms = ({ className }: FinancialFormsProps) => {
    const [selectedState, setSelectedState] = useState<string>('');
    const [selectedDistrict, setSelectedDistrict] = useState<string>('');
    const [selectedDate, setSelectedDate] = useState('');

    const handleStateChange = (event: any, data: any) => {
        setSelectedState(data.value);
        setSelectedDistrict(''); // Reset selected district when state changes
    };

    const handleDistrictChange = (event: any, data: any) => {
        setSelectedDistrict(data.value);
    };

    return (
        <div className={classNames(styles.root, className)}>
            <Form className={styles.form}>
                <Form.Group widths="equal" className={styles.selection}>
                    <Form.Select fluid label="STATE" options={options} placeholder="STATE" onChange={handleStateChange} />
                    <Form.Select
                        fluid
                        label="Business District"
                        options={options}
                        placeholder="Business District"
                        onChange={handleDistrictChange}
                    />
                    <Form.Field>
                        <label>Date</label>
                        <DateInput
                            name="date"
                            placeholder="Select Date"
                            value={selectedDate}
                            iconPosition="left"
                            onChange={(event, data) => setSelectedDate(data.value)}
                            popupPosition="bottom center"
                            minDate={new Date()}
                            maxDate={new Date()}
                        />
                    </Form.Field>
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
                    <button type="submit" className={styles['submit-financial']}>
                        {' '}
                        Submit
                    </button>
                </div>
            </Form>
        </div>
    );
};
