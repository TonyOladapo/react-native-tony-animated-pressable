
# React Native Tony Animated Pressable

A custom React Native package with an aweful name which animates onPressIn and onPressOut of the React Native Pressable component.

<img src="https://github.com/TonyOladapo/react-native-tony-animated-pressable/blob/master/screenshots/1.gif?raw=true" width="300"/>
<img src="https://github.com/TonyOladapo/react-native-tony-animated-pressable/blob/master/screenshots/2.gif?raw=true" width="300"/>

## Installation
Run
```bash
yarn add rn-tony-animated-pressable
```
Or
```bash
npm install rn-tony-animated-pressable
```

## Usage

```javascript
import RNTAnimatedPressable from 'rn-tony-animated-pressable'
```
```javascript
<RNTAnimatedPressable
   scaleValue={0.9}
   onPress={() => {
     //do something
   }}>
     <Text>Press Me!</Text>
</RNTAnimatedPressable>
```

## Props

Inherits [PressableProps](https://reactnative.dev/docs/pressable#props)

Property | Type | Default value | Description
------------ | ------------- | ------------ | ------------- 
onPress | PressEvent |  | Called when the touch is released.
scaleValue | Number | 0.9 | Specifies the value to which the animated view is scaled to.
friction | Number | 7 | Controls "bounciness"/overshoot of animated view.
tension | Number | 40 | Controls speed of the animation.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
