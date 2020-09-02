import React from 'react';
import classes from './button.module.scss';

interface IButtonProps {
    children: React.ReactNode;
    handleClick: () => void;
    type: string;
}

function Button({ children, handleClick, type }: IButtonProps) {
    const buttonClass = [
        classes.button,
        type === 'success' ? classes.success : classes.danger,
    ];

    return (
        <button onClick={handleClick} className={buttonClass.join(' ')}>
            {children}
        </button>
    );
}

export default Button;
