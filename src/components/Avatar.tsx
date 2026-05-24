import React from 'react';
import { Image, View } from 'react-native';
import { Typography } from './Typography';

type AvatarSize = 'sm' | 'md' | 'lg';

interface AvatarProps {
  imageUrl?: string;
  name?: string;
  size?: AvatarSize;
}

const sizeStyles: Record<AvatarSize, { container: string; text: string }> = {
  sm: { container: 'w-8 h-8', text: 'text-body-sm' },
  md: { container: 'w-12 h-12', text: 'text-body-lg' },
  lg: { container: 'w-16 h-16', text: 'text-title-lg' },
};

function getInitials(name?: string): string {
  if (!name) return '?';
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export function Avatar({ imageUrl, name, size = 'md' }: AvatarProps) {
  const styles = sizeStyles[size];

  if (imageUrl) {
    return (
      <Image
        source={{ uri: imageUrl }}
        className={`${styles.container} rounded-full`}
        resizeMode="cover"
        accessibilityLabel={name || 'Avatar'}
      />
    );
  }

  return (
    <View
      className={`${styles.container} rounded-full bg-primary/10 items-center justify-center`}
      accessibilityLabel={name || 'Avatar'}
    >
      <Typography variant="label-lg" color="primary">
        {getInitials(name)}
      </Typography>
    </View>
  );
}
