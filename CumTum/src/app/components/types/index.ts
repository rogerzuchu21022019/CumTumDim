export interface PropsModalProgress {
  isShowProgress: boolean;
  isLoading: boolean;
}

export interface PropsModalSearch {
  isVisible: boolean;
  navigation: any;
  onCancel: () => void;
  onDone: () => void;
}

export interface ILoading {
  isLoading: boolean;
}
