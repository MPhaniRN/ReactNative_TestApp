import {
    NativeModules,
    Platform,
    Animated,
    Easing,
    UIManager,
    LayoutAnimation,
    PixelRatio,
    Dimensions
} from "react-native";
import { NavigationActions,StackActions } from '@react-navigation/compat';
import {rootSwitch} from './../config/navigator';
import { CommonActions } from '@react-navigation/native';

const scaleValue = PixelRatio.get() / 2;

export const enableExperimental = () => {
    if (Platform.OS === "android") {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
};

export const scaleWithPixel = (size, limitScale = 1.2) => {
    /* setting default upto 20% when resolution device upto 20% with defalt iPhone 7 */
    const value = scaleValue > limitScale ? limitScale : scaleValue;
    return size * value;
};

export const heightHeader = () => {
    const OS = Platform.OS;
    const landscape =
        Dimensions.get("window").width > Dimensions.get("window").height;
    let model = DeviceInfo.getModel();
    if (model.includes("iPad")) model = "iPad";
    if (OS === "ios") {
        switch (model) {
            case "iPhone X":
            case "iPhone XS":
            case "iPhone XS Max":
            case "iPhone XR":
                return landscape ? 45 : 88;
            case "iPad":
                return 65;
            default:
                return landscape ? 45 : 65;
        }
    } else {
        return 35;
    }
};

export const getWidthDevice = () => {
    return Dimensions.get("window").width;
};

export const getHeightDevice = () => {
    return Dimensions.get("window").height;
};

export const scrollEnabled = (contentWidth, contentHeight) => {
    return contentHeight > Dimensions.get("window").height - heightHeader();
};

// Animation navigation between screen react-navigation
export function fromLeft(duration = 300) {
    return {
        transitionSpec: {
            duration,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
            useNativeDriver: true
        },
        screenInterpolator: ({ layout, position, scene }) => {
            const { index } = scene;
            const { initWidth } = layout;

            const translateX = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [-initWidth, 0, 0]
            });

            const opacity = position.interpolate({
                inputRange: [index - 1, index - 0.99, index],
                outputRange: [0, 1, 1]
            });

            return { opacity, transform: [{ translateX }] };
        }
    };
}

/**
 * @description Transition animation screen expand from on the top of screen
 * @author Passion UI <passionui.com>
 * @date 2019-08-03
 * @export
 * @param {number} [duration=300]
 * @returns
 */
export function fromTop(duration = 300) {
    return {
        transitionSpec: {
            duration,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
            useNativeDriver: true
        },
        screenInterpolator: ({ layout, position, scene }) => {
            const { index } = scene;
            const { initHeight } = layout;

            const translateY = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [-initHeight, 0, 0]
            });

            const opacity = position.interpolate({
                inputRange: [index - 1, index - 0.99, index],
                outputRange: [0, 1, 1]
            });

            return { opacity, transform: [{ translateY }] };
        }
    };
}

/**
 * @description Transition animation screen expand from on the right to left
 * @author Passion UI <passionui.com>
 * @date 2019-08-03
 * @export
 * @param {number} [duration=300]
 * @returns
 */
export function fromRight(duration = 300) {
    return {
        transitionSpec: {
            duration,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
            useNativeDriver: true
        },
        screenInterpolator: ({ layout, position, scene }) => {
            const { index } = scene;
            const { initWidth } = layout;

            const translateX = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [initWidth, 0, 0]
            });

            const opacity = position.interpolate({
                inputRange: [index - 1, index - 0.99, index],
                outputRange: [0, 1, 1]
            });

            return { opacity, transform: [{ translateX }] };
        }
    };
}

/**
 * @description Transition animation screen expand from on the bottom to top
 * @author Passion UI <passionui.com>
 * @date 2019-08-03
 * @export
 * @param {number} [duration=300]
 * @returns
 */
export function fromBottom(duration = 300) {
    return {
        transitionSpec: {
            duration,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
            useNativeDriver: true
        },
        screenInterpolator: ({ layout, position, scene }) => {
            const { index } = scene;
            const { initHeight } = layout;

            const translateY = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [initHeight, 0, 0]
            });

            const opacity = position.interpolate({
                inputRange: [index - 1, index - 0.99, index],
                outputRange: [0, 1, 1]
            });

            return { opacity, transform: [{ translateY }] };
        }
    };
}

/**
 * @description Transition animation fadeIn
 * @author Passion UI <passionui.com>
 * @date 2019-08-03
 * @export
 * @param {number} [duration=300]
 * @returns
 */
export function fadeIn(duration = 300) {
    return {
        transitionSpec: {
            duration,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
            useNativeDriver: true
        },
        screenInterpolator: ({ position, scene }) => {
            const { index } = scene;

            const opacity = position.interpolate({
                inputRange: [index - 1, index],
                outputRange: [0, 1]
            });

            return { opacity };
        }
    };
}

/**
 * @description Transition animation zoomIn
 * @author Passion UI <passionui.com>
 * @date 2019-08-03
 * @export
 * @param {number} [duration=300]
 * @returns
 */
export function zoomIn(duration = 300) {
    return {
        transitionSpec: {
            duration,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
            useNativeDriver: true
        },
        screenInterpolator: ({ position, scene }) => {
            const { index } = scene;
            let start = 0;

            if (Platform.OS !== "ios") {
                start = 0.005;
            }

            const scale = position.interpolate({
                inputRange: [index - 1, index],
                outputRange: [start, 1]
            });

            return { transform: [{ scale }] };
        }
    };
}

/**
 * @description Transition animation zoomOut
 * @author Passion UI <passionui.com>
 * @date 2019-08-03
 * @export
 * @param {number} [duration=300]
 * @returns
 */
export function zoomOut(duration = 300) {
    return {
        transitionSpec: {
            duration,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
            useNativeDriver: true
        },
        screenInterpolator: ({ position, scene }) => {
            const { index } = scene;

            const scale = position.interpolate({
                inputRange: [index - 1, index],
                outputRange: [10, 1]
            });

            return { transform: [{ scale }] };
        }
    };
}

/**
 * @description Animation effect flip with vertical
 * @author Passion UI <passionui.com>
 * @date 2019-08-03
 * @export
 * @param {number} [duration=300]
 * @returns
 */
export function flipY(duration = 300) {
    return {
        transitionSpec: {
            duration,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
            useNativeDriver: true
        },
        screenInterpolator: ({ position, scene }) => {
            const { index } = scene;

            const rotateY = position.interpolate({
                inputRange: [index - 1, index],
                outputRange: ["180deg", "0deg"]
            });

            return { transform: [{ rotateY }], backfaceVisibility: "hidden" };
        }
    };
}

/**
 * @description Animation effect flip with horizontal
 * @author Passion UI <passionui.com>
 * @date 2019-08-03
 * @export
 * @param {number} [duration=300]
 * @returns
 */
export function flipX(duration = 300) {
    return {
        transitionSpec: {
            duration,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
            useNativeDriver: true
        },
        screenInterpolator: ({ position, scene }) => {
            const { index } = scene;

            const rotateX = position.interpolate({
                inputRange: [index - 1, index],
                outputRange: ["180deg", "0deg"]
            });

            return { transform: [{ rotateX }], backfaceVisibility: "hidden" };
        }
    };
}



let _navigator;

export function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

export function navigate(routeName, params = {}) {
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        }),
    );
}
export function goBack() {
    _navigator.dispatch(NavigationActions.back());
}

export function isEmailValid(email) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(email) == 0;
}

export function isValidPassword(password) {
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    var A = false
    if (password.length > 0 && password.length >= 8) {
        A = format.test(password)
    } else {
        A = false
    }
    return A;
}

export function resetStack(navigation){
    navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            { name: rootSwitch.loading },
          ],
        })
      );
}

// export function showSnackBar(message){
//     Snackbar.show({
//         text: message,
//         textColor:'rgb(1,245,255)',
//         fontFamily:'Toriga-Medium',
//         duration: Snackbar.LENGTH_SHORT,
//       });
// }
