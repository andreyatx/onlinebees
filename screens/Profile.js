import { Pressable, Text, View } from 'react-native';

export const Profile = ({ navigation }) => {
  const pressHandler = () => {
    navigation.navigate('PaymentOptions');
  };

  return (
    <View>
      <View>
        <Text>Profile</Text>
      </View>
      <Pressable onPress={pressHandler}>
        <Text>GO TO PAYMENT</Text>
      </Pressable>
    </View>
  );
};
