import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  Text,
  type PressableProps,
} from 'react-native';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'destructive';

interface ButtonProps extends Omit<PressableProps, 'children'> {
  children: string;
  variant?: ButtonVariant;
  loading?: boolean;
}

const variantStyles: Record<ButtonVariant, { container: string; text: string }> = {
  primary: {
    container: 'bg-primary rounded-full px-6 py-4 min-h-[48px] items-center justify-center',
    text: 'text-on-primary text-label-lg',
  },
  secondary: {
    container:
      'bg-surface-container-highest/70 rounded-full px-6 py-4 min-h-[48px] items-center justify-center',
    text: 'text-primary text-label-lg',
  },
  ghost: {
    container: 'px-4 py-3 min-h-[48px] items-center justify-center',
    text: 'text-primary text-label-lg',
  },
  destructive: {
    container: 'bg-error rounded-full px-6 py-4 min-h-[48px] items-center justify-center',
    text: 'text-on-error text-label-lg',
  },
};

export function Button({
  children,
  variant = 'primary',
  loading = false,
  disabled,
  ...props
}: ButtonProps) {
  const styles = variantStyles[variant];
  const isDisabled = disabled || loading;

  return (
    <Pressable
      className={`${styles.container} ${isDisabled ? 'opacity-50' : ''}`}
      disabled={isDisabled}
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled }}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === 'ghost' ? '#4900cc' : '#ffffff'}
          size="small"
        />
      ) : (
        <Text className={styles.text}>{children}</Text>
      )}
    </Pressable>
  );
}
