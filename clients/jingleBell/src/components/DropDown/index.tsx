// import { useSharedValue } from 'react-native-reanimated';
// import { DropdownItemType, DropdownListItem } from './drop-down-list';
// import React from 'react';

// type DropdownProps = {
//     header: DropdownItemType;
//     options: DropdownItemType[];
// };

// const Dropdown: React.FC<DropdownProps> = ({ header, options }) => {
//     const dropdownItems = [header, ...options];
//     const isExpanded = useSharedValue(false);
//     const optionsChild = [
//         { label: 'Charts', iconName: 'barschart' },
//         { label: 'Book', iconName: 'book' },
//         { label: 'Calendar', iconName: 'calendar' },
//         { label: 'Camera', iconName: 'camera' },
//     ];

//     return (
//         <>
//             {dropdownItems.map((item, index) => {
//                 return (
//                     <DropdownListItem
//                         isHairercy={true} key={index}
//                         index={index}
//                         {...item}
//                         isExpanded={isExpanded}
//                         dropdownItemsCount={dropdownItems.length}
//                         children={index === 1 ? optionsChild : []}
//                     />
//                 );
//             })}
//         </>
//     );
// };

// export { Dropdown };
