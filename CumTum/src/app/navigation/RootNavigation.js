// @ts-nocheck
import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

/**
 *
 *
 * @export
 * @param {*} name
 * @param {*} params

  Root navigation

  link: https://reactnavigation.org/docs/navigating-without-navigation-prop#:~:text=import%20%7B%20NavigationContainer,%3B%0A%20%20%7D%0A%7D
 */
export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
