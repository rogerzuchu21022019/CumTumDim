import React from 'react';
import {Banner} from '../../../redux/api/types';

export interface PropsModalProgress {
  isShowProgress: boolean;
  isLoading: boolean;
}

export interface PropsModalSearch {
  isVisible: boolean;
  navigation: any;
  onCancel: () => void;
  onDone: () => void;
  setIsVisible: React.Dispatch<React.SetStateAction<Boolean>>;
}

export interface PropsItemBanner {
  item: Banner;
  index: number;
  indexSelected: number;
  navigation: any;
  isLoading?: boolean;
  handleSwipeableOpen: (index: number) => void;
  handleRemove?: (item: Banner | any) => void;
}

export interface ILoading {
  isLoading: boolean;
}
