import {CommonActions, StackActions} from '@react-navigation/native';

export function navigate(screenName, params) {
  return CommonActions.navigate({
    name: screenName,
    params,
  });
}
export function reset(routeStack: Array<any>, params: any, index = 0) {
  const newStack = [];
  routeStack.forEach(item =>
    newStack.push(CommonActions.navigate({name: item, params})),
  );
  return StackActions.replace('', {
    index,
    actions: newStack,
    key: null,
  });
}
export function goBack(screen, navState = null) {
  // screen: screen after screen want to go back
  let screenKey = screen;
  if (navState) {
    // eslint-disable-next-line array-callback-return
    navState.routes.map(navData => {
      console.log('navData', navData);
      if (navData.routeName === screen) {
        console.log('navData.key', navData.key);
        screenKey = navData.key;
      }
    });
  }
  console.log('screenKey', screenKey);
  return CommonActions.goBack();
}
