import React from 'react';
import styles from './ButtonGroup.module.scss';

interface ButtonGroupProps {
  buttons?: Array<{
    label: string;
    onClick?: () => void;
    disabled?: boolean;
  }>;
  onButtonClick?: (index: number) => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  buttons = [
    { label: 'Left', onClick: undefined, disabled: false },
    { label: 'Center', onClick: undefined, disabled: false },
    { label: 'Right', onClick: undefined, disabled: false },
  ],
  onButtonClick,
}) => {
  return (
    <div className={styles.buttonGroup}>
      {buttons.map((button, index) => (
        <button
          key={index}
          className={styles.button}
          onClick={() => {
            button.onClick?.();
            onButtonClick?.(index);
          }}
          disabled={button.disabled}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
