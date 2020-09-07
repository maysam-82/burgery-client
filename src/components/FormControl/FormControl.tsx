import React from 'react';
import classes from './formControl.module.scss';
import { ISelectConfig, IInputConfig } from '../../types/orders';

interface IFormControlProps {
    label: string;
    controlType: string;
    controlConfig: IInputConfig | ISelectConfig;
    value: string;
    name: string;
    handleInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSelectChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    handleTextareaChange?: (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => void;
}

function FormControl(props: IFormControlProps) {
    const {
        label,
        controlType,
        controlConfig,
        value,
        handleInputChange,
        handleSelectChange,
        handleTextareaChange,
        name,
    } = props;
    const setControlElement = () => {
        switch (controlType) {
            case 'input':
                return (
                    <input
                        className={classes.controlElement}
                        {...(controlConfig as IInputConfig)}
                        value={value}
                        onChange={handleInputChange}
                        name={name}
                    />
                );
            case 'textarea':
                return (
                    <textarea
                        className={classes.controlElement}
                        {...(controlConfig as IInputConfig)}
                        value={value}
                        onChange={handleTextareaChange}
                        name={name}
                    />
                );
            case 'select':
                const { options } = controlConfig as ISelectConfig;
                return (
                    <select
                        className={classes.controlElement}
                        value={value}
                        onChange={handleSelectChange}
                        name={name}
                    >
                        {options.map(({ value, displayValue }) => (
                            <option value={value} key={value}>
                                {displayValue}
                            </option>
                        ))}
                    </select>
                );

            default:
                return (
                    <input
                        className={classes.controlElement}
                        {...controlConfig}
                        value={value}
                    />
                );
        }
    };
    return (
        <div className={classes.formControlContainer}>
            <label className={classes.controlLabel}>{label}</label>
            {setControlElement()}
        </div>
    );
}

export default FormControl;
