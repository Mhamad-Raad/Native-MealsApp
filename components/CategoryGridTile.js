import { Pressable, View, Text, StyleSheet } from 'react-native';

const CategoryGridTile = ({ title, tolor }) => {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;
