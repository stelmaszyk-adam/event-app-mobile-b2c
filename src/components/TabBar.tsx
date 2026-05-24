import React from 'react';
import { Pressable, View } from 'react-native';
import { Typography } from './Typography';

interface TabItem {
  key: string;
  label: string;
  icon: string;
}

interface TabBarProps {
  tabs: TabItem[];
  activeTab: string;
  onTabPress: (key: string) => void;
}

export function TabBar({ tabs, activeTab, onTabPress }: TabBarProps) {
  return (
    <View className="flex-row bg-surface-container-lowest/70 h-16 items-center border-t border-outline-variant/15">
      {tabs.map((tab) => {
        const isActive = tab.key === activeTab;
        return (
          <Pressable
            key={tab.key}
            className="flex-1 items-center justify-center h-full"
            onPress={() => onTabPress(tab.key)}
            accessibilityRole="tab"
            accessibilityState={{ selected: isActive }}
            accessibilityLabel={tab.label}
          >
            <Typography
              variant="title-md"
              color={isActive ? 'primary' : 'variant'}
              className="text-[24px]"
            >
              {tab.icon}
            </Typography>
            <Typography
              variant="label-sm"
              color={isActive ? 'primary' : 'variant'}
            >
              {tab.label}
            </Typography>
          </Pressable>
        );
      })}
    </View>
  );
}
