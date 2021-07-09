import React from "react";
import { PressableProps, ViewStyle } from "react-native";
interface Props extends PressableProps {
    onPress?: () => {};
    children?: React.ReactNode;
    scaleValue?: number;
    friction?: number;
    tension?: number;
    style?: ViewStyle | ViewStyle[];
}
declare const RNTAnimatedPressable: ({ children, onPress, scaleValue, friction, tension, style, ...restProps }: Props) => JSX.Element;
export default RNTAnimatedPressable;
