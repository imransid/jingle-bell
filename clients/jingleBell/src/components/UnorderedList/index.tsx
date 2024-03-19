import React from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { Col, Row } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { TextItem } from '@/components';
import { colors } from '@/theme/colors';

import Styles from './Style';

interface IUnorderedListProps {
  data: string[];
}
interface ItemProps {
  title: string;
}

const UnorderedList: React.FC<IUnorderedListProps> = ({ data }) => {
  const Item = ({ title }: ItemProps): JSX.Element => (
    <View style={Styles.item}>
      <Row>
        <Col style={Styles.icon}>
          <Icon name="circle-medium" size={13} color={colors.iconEye} />
        </Col>
        <Col>
          <TextItem txt={title} variant="bodyMedium" color={colors.text} />
        </Col>
      </Row>
    </View>
  );

  return (
    <SafeAreaView style={Styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item title={item} />}
        keyExtractor={(item, i) => `${item}${i}`}
      />
    </SafeAreaView>
  );
};

export default UnorderedList;
