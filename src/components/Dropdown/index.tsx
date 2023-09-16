import React, { useState } from 'react';
import { Dropdown as DropdownBootstrap, DropdownButton } from 'react-bootstrap';
import { Control, Controller } from 'react-hook-form';
import { InputDescription } from '../../types';

interface IDropdown {
  control: Control<InputDescription>;
  colors: string[];
}

export const Dropdown: React.FC<IDropdown> = ({ control, colors }) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <Controller
      name="color"
      control={control}
      render={({ field: { onChange } }) => (
        <DropdownButton id="dropdown-item-button" variant="outline-secondary" title={selectedColor}>
          {colors.map((color) => (
            <DropdownBootstrap.Item
              style={{ color }}
              key={color}
              onClick={() => {
                onChange(color);
                setSelectedColor(color);
              }}
            >
              {color}
            </DropdownBootstrap.Item>
          ))}
        </DropdownButton>
      )}
    />
  );
};
