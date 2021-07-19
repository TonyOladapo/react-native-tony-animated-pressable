import React from "react";
import { PressableProps, ViewStyle } from "react-native";
interface Props extends PressableProps {
    children?: React.ReactNode;
    scaleValue?: number;
    friction?: number;
    tension?: number;
    style?: ViewStyle | ViewStyle[];
}
declare const RNTAnimatedPressable: ({ children, scaleValue, friction, tension, style, ...restProps }: Props) => JSX.Element;
export default RNTAnimatedPressable;
