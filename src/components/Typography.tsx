import React from 'react';
import { Text as RNText, type TextProps } from 'react-native';

type TypographyVariant =
  | 'display-lg'
  | 'display-md'
  | 'display-sm'
  | 'headline-lg'
  | 'headline-md'
  | 'headline-sm'
  | 'title-lg'
  | 'title-md'
  | 'title-sm'
  | 'body-lg'
  | 'body-md'
  | 'body-sm'
  | 'label-lg'
  | 'label-md'
  | 'label-sm';

interface TypographyProps extends TextProps {
  variant?: TypographyVariant;
  color?: 'default' | 'variant' | 'primary' | 'error';
  children: React.ReactNode;
}

const colorStyles: Record<string, string> = {
  default: 'text-on-surface',
  variant: 'text-on-surface-variant',
  primary: 'text-primary',
  error: 'text-error',
};

const uppercaseVariants = new Set(['label-md', 'label-sm']);

export function Typography({
  variant = 'body-lg',
  color = 'default',
  className = '',
  children,
  ...props
}: TypographyProps) {
  const isUppercase = uppercaseVariants.has(variant);

  return (
    <RNText
      className={`text-${variant} ${colorStyles[color]} ${isUppercase ? 'uppercase' : ''} ${className}`}
      {...props}
    >
      {children}
    </RNText>
  );
}

export function Heading({
  children,
  className = '',
  variant = 'md',
  ...props
}: Omit<TypographyProps, 'variant'> & { variant?: 'lg' | 'md' | 'sm' }) {
  const headlineVariant = `headline-${variant}` as TypographyVariant;
  return (
    <Typography variant={headlineVariant} className={className} {...props}>
      {children}
    </Typography>
  );
}
