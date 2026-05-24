import React, { useState } from 'react';
import { TextInput, View, type TextInputProps } from 'react-native';
import { Typography } from './Typography';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
}

export function Input({ label, error, className = '', ...props }: InputProps) {
  const [focused, setFocused] = useState(false);

  return (
    <View className="w-full">
      {label && (
        <Typography variant="label-lg" className="mb-2">
          {label}
        </Typography>
      )}
      <TextInput
        className={`px-4 py-3 rounded-sm text-body-lg text-on-surface ${
          focused
            ? 'bg-surface-container-highest border-2 border-primary/20'
            : 'bg-surface-container-low'
        } ${error ? 'border-2 border-error/50' : ''} ${className}`}
        placeholderTextColor="#49454f"
        onFocus={(e) => {
          setFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          props.onBlur?.(e);
        }}
        accessibilityLabel={label}
        {...props}
      />
      {error && (
        <Typography variant="body-sm" color="error" className="mt-1">
          {error}
        </Typography>
      )}
    </View>
  );
}

interface TextAreaProps extends InputProps {
  rows?: number;
}

export function TextArea({ rows = 4, ...props }: TextAreaProps) {
  return (
    <Input
      multiline
      numberOfLines={rows}
      textAlignVertical="top"
      className="min-h-[100px]"
      {...props}
    />
  );
}

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  label?: string;
  options: SelectOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  error?: string;
}

export function Select({
  label,
  options,
  value,
  onValueChange,
  placeholder = 'Select...',
  error,
}: SelectProps) {
  const selectedOption = options.find((o) => o.value === value);

  return (
    <View className="w-full">
      {label && (
        <Typography variant="label-lg" className="mb-2">
          {label}
        </Typography>
      )}
      <View className="bg-surface-container-low rounded-sm px-4 py-3">
        <Typography variant="body-lg" color={selectedOption ? 'default' : 'variant'}>
          {selectedOption?.label || placeholder}
        </Typography>
      </View>
      {error && (
        <Typography variant="body-sm" color="error" className="mt-1">
          {error}
        </Typography>
      )}
    </View>
  );
}
