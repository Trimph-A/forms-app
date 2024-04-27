import classNames from 'classnames';
import styles from './collection-forms.module.scss';
import { useState } from 'react';
import { Form } from 'semantic-ui-react';
import { DateInput } from 'semantic-ui-calendar-react';

export interface CollectionFormsProps {
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

export const CollectionForms = ({ className }: CollectionFormsProps) => {
    const [selectedRadio, setSelectedRadio] = useState<string>();

    const [selectedDate, setSelectedDate] = useState('');
    const minDate = new Date();
    minDate.setDate(minDate.getDate() - 2);

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(event.target.value);
    };
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['collectionforms-upperlay']}>
                <h3 className={styles.h3header}>Collection Data Entry</h3>
                <div className={styles['collection-formsdiv']}>
                    <Form className={styles.form}>
                        <Form.Group widths="equal" className={styles.selection}>
                            <Form.Select
                                fluid
                                label="STATE"
                                options={options}
                                placeholder="STATE"
                            />
                            <Form.Select
                                fluid
                                label="Business District"
                                options={options}
                                placeholder="Business District"
                            />
                            <Form.Select
                                fluid
                                label="Feeders"
                                options={options}
                                placeholder="Feeders"
                            />
                            <Form.Field>
                                <label>Date</label>
                                <DateInput
                                    name="date"
                                    placeholder="Select Date"
                                    value={selectedDate}
                                    onChange={(event, data) => setSelectedDate(data.value)}
                                    popupPosition="bottom center"
                                    minDate={minDate}
                                    maxDate={new Date()}
                                />
                            </Form.Field>
                        </Form.Group>
                        <div className={styles['opex-inputs']}>
                            <h5 className={styles['load-reading-header']}>Collections</h5>
                            <Form.Group widths="equal" className={styles.selection}>
                                <Form.Input
                                    label=""
                                    placeholder="Revenue Collected"
                                    type="number"
                                />
                                <Form.Input
                                    label=""
                                    placeholder="Customer Response Number"
                                    type="number"
                                />
                            </Form.Group>
                        </div>
                        <div className={styles['excel-upload']}>
                            <h5 className={styles['load-reading-header']}>Upload File</h5>
                            <input type="file" className={styles['upload-excel']} />
                        </div>
                        <div className={styles['collections-save-submit']}>
                            <button type="submit" className={styles['submit-collection']}>
                                {' '}
                                Submit
                            </button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};
