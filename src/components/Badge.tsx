import React from 'react';
import { View } from 'react-native';
import { Typography } from './Typography';
import { type Category } from '../theme/tokens';

interface CategoryBadgeProps {
  category: Category;
  label: string;
}

const categoryBgMap: Record<Category, string> = {
  music: 'bg-primary/10',
  nightlife: 'bg-tertiary/10',
  performing_arts: 'bg-success/10',
  food_drink: 'bg-warning/10',
  sport_fitness: 'bg-info/10',
  arts_culture: 'bg-secondary/10',
  education: 'bg-info/10',
  business: 'bg-surface-container-high',
  family: 'bg-warning/10',
  festival: 'bg-tertiary/10',
  wellness: 'bg-surface-container-high',
  other: 'bg-surface-container-high',
};

export function CategoryBadge({ category, label }: CategoryBadgeProps) {
  return (
    <View className={`rounded-md px-3 py-1 ${categoryBgMap[category]}`}>
      <Typography variant="label-sm" className="text-on-surface">
        {label}
      </Typography>
    </View>
  );
}

type StatusType = 'active' | 'upcoming' | 'ended' | 'cancelled';

interface StatusBadgeProps {
  status: StatusType;
  label: string;
}

const statusStyles: Record<StatusType, { bg: string; text: string }> = {
  active: { bg: 'bg-success-container', text: 'text-success' },
  upcoming: { bg: 'bg-info-container', text: 'text-info' },
  ended: { bg: 'bg-surface-container-high', text: 'text-on-surface-variant' },
  cancelled: { bg: 'bg-error-container', text: 'text-error' },
};

export function StatusBadge({ status, label }: StatusBadgeProps) {
  const styles = statusStyles[status];
  return (
    <View className={`rounded-md px-3 py-1 ${styles.bg}`}>
      <Typography variant="label-sm" className={styles.text}>
        {label}
      </Typography>
    </View>
  );
}
