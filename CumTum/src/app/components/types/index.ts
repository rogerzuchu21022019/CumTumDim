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
  navigation: any;
  onTapImage: (index: number) => void;
  onDrag?: (x: number, y: number) => void;
  onDrop?: (x: number, y: number, index: number) => void;
}

export interface ILoading {
  isLoading: boolean;
}
