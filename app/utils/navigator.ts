import {
  NavigationActions,
  NavigationDispatch,
  NavigationContainerComponent
} from 'react-navigation'
let navigator: {
  dispatch: NavigationDispatch
}

function setTopLevelNavigator(navigatorRef: NavigationContainerComponent) {
  navigator = navigatorRef
}

function navigate(routeName: string, params?: object) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  )
}

// add other navigation functions that you need and export them

export default {
  navigate,
  setTopLevelNavigator
}
