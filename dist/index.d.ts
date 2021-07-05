import React from "react";
import { PressableProps } from "react-native";
interface Props extends PressableProps {
    onPress?: () => {};
    children?: React.ReactNode;
    scaleValue?: number;
    friction?: number;
    tension?: number;
}
declare const RNTAnimatedPressable: ({ children, onPress, scaleValue, friction, tension, ...restProps }: Props) => JSX.Element;
export default RNTAnimatedPressable;
