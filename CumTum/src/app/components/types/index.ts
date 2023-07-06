import {Dispatch} from 'react';

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

export interface ILoading {
  isLoading: boolean;
}
