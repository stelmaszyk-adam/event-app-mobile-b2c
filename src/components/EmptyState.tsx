import React from 'react';
import { View } from 'react-native';
import { Typography } from './Typography';
import { Button } from './Button';

type EmptyStateType = 'no-results' | 'no-connection' | 'error';

interface EmptyStateProps {
  type?: EmptyStateType;
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState({
  type = 'no-results',
  title,
  description,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <View className="flex-1 items-center justify-center px-8 py-12">
      <View className="w-16 h-16 rounded-full bg-surface-container-low items-center justify-center mb-6">
        <Typography variant="display-sm">
          {type === 'no-results' ? '🔍' : type === 'no-connection' ? '📡' : '⚠️'}
        </Typography>
      </View>
      <Typography variant="headline-sm" className="text-center">
        {title}
      </Typography>
      {description && (
        <Typography variant="body-md" color="variant" className="text-center mt-2">
          {description}
        </Typography>
      )}
      {actionLabel && onAction && (
        <View className="mt-6">
          <Button variant="secondary" onPress={onAction}>
            {actionLabel}
          </Button>
        </View>
      )}
    </View>
  );
}
