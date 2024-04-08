import classNames from 'classnames';
import styles from './schema-dropdown.module.scss';
import React from 'react';
import { Form } from 'semantic-ui-react';

export interface SchemaDropdownProps {
  className?: string;
  label: string;
  options: any[];
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export const SchemaDropdown: React.FC<SchemaDropdownProps> = ({
  className,
  label,
  options,
  placeholder,
  value,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>, data: any) => {
    onChange(data.value as string);
  };

  return (
    <div className={classNames(styles.root, className)}>
      <Form.Select
        fluid
        label={label}
        options={options}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
