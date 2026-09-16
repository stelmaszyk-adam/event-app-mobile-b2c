import React, { useCallback, useMemo, useRef } from 'react';
import { View } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

interface BottomSheetWrapperProps {
  children: React.ReactNode;
  snapPoints?: (string | number)[];
  initialIndex?: number;
  onClose?: () => void;
}

export function BottomSheetWrapper({
  children,
  snapPoints: customSnapPoints,
  initialIndex = 0,
  onClose,
}: BottomSheetWrapperProps) {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(
    () => customSnapPoints || ['25%', '50%', '90%'],
    [customSnapPoints],
  );

  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === -1) {
        onClose?.();
      }
    },
    [onClose],
  );

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={initialIndex}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      enablePanDownToClose
      backgroundStyle={{ backgroundColor: '#fcf8ff' }}
      handleIndicatorStyle={{ backgroundColor: '#cbc4d0' }}
    >
      <View className="flex-1 p-4">{children}</View>
    </BottomSheet>
  );
}
