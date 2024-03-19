// import React from 'react';
// import { View, useWindowDimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';
// import Animated, {
//     useAnimatedStyle,
//     useSharedValue,
//     withSpring,
//     withTiming,
// } from 'react-native-reanimated';
// import { Dropdown } from '.';
// import { Col, Grid, Row } from 'react-native-easy-grid';

// type DropdownItemType = {
//     label: string;
//     iconName: string;
// };

// type DropdownListItemProps = DropdownItemType & {
//     index: number;
//     dropdownItemsCount: number;
//     isExpanded: Animated.SharedValue<boolean>;
//     isHairercy: boolean | undefined;
//     children: DropdownItemType[];
// };

// const DropdownListItem: React.FC<DropdownListItemProps> = ({
//     label,
//     iconName,
//     index,
//     dropdownItemsCount,
//     isExpanded,
//     isHairercy,
//     children
// }) => {

//     const { width: windowWidth } = useWindowDimensions();
//     const DropdownListItemHeight = 85;
//     const Margin = 10;

//     const fullDropdownHeight =
//         dropdownItemsCount * (DropdownListItemHeight + Margin);
//     const collapsedTop = fullDropdownHeight / 2 - DropdownListItemHeight;
//     const expandedTop = (DropdownListItemHeight + Margin) * index;
//     const isHeader = index === 0;
//     const nestedDropdown = useSharedValue(false);
//     const rStyle = useAnimatedStyle(() => {
//         return {
//             top: withSpring(isExpanded.value ? expandedTop : collapsedTop),
//         };
//     }, [isExpanded]);

//     console.log("nestedDropdown.value && isHairercy", nestedDropdown.value && isHairercy)

//     return (

//         <>
//             <Animated.View
//                 style={[
//                     {
//                         zIndex: isHeader ? 1 : 0,
//                         position: 'absolute',
//                         width: windowWidth * 0.95,
//                         height: DropdownListItemHeight,
//                         borderRadius: 10,
//                         backgroundColor: '#fff',
//                         transform: [{ translateY: DropdownListItemHeight / 2 }],
//                     },
//                     rStyle,
//                 ]}
//             >
//                 <Grid>
//                     <Row>
//                         <Col>
//                             <TouchableOpacity
//                                 onPress={() => {
//                                     if (index === 0) isExpanded.value = !isExpanded.value;
//                                 }}
//                                 style={{ width: '80%', height: '100%' }}
//                             ></TouchableOpacity>
//                         </Col>
//                     </Row>

//                     <Row>

//                     </Row>
//                 </Grid>
//             </Animated.View>
//         </>
//     );
// };

// export { DropdownListItem };
// export type { DropdownItemType };
