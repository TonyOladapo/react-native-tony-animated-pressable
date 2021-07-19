import React, { useState } from "react";
import { Pressable as RNPressable, Animated, } from "react-native";
const AnimatedPressable = Animated.createAnimatedComponent(RNPressable);
const RNTAnimatedPressable = ({ children, scaleValue, friction, tension, style, ...restProps }) => {
    const [scale] = useState(new Animated.Value(1));
    const animatedStyles = {
        transform: [
            {
                //@ts-ignore
                scale,
            },
        ],
    };
    const shrinkView = () => {
        Animated.spring(scale, {
            toValue: scaleValue ? scaleValue : 0.9,
            useNativeDriver: true,
            friction: 7,
            tension: 40,
        }).start();
    };
    const scaleView = () => {
        Animated.spring(scale, {
            toValue: 1,
            useNativeDriver: true,
            friction: friction ? friction : 7,
            tension: tension ? tension : 40,
        }).start();
    };
    return (React.createElement(AnimatedPressable, { ...restProps, style: [animatedStyles, style], onPressIn: () => shrinkView(), onPressOut: () => scaleView() }, children));
};
export default RNTAnimatedPressable;
//# sourceMappingURL=index.js.map