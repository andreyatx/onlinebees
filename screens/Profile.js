import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';
import { GlobalStyles, globalStyles } from '../constants/styles';
import { Ionicons } from '@expo/vector-icons';

export const Profile = ({ navigation }) => {
  const pressHandler = () => {
    navigation.navigate('PaymentOptions');
  };

  return (
    <View style={globalStyles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.userContainer}>
          <View>
            <Image
              style={styles.profileAvatar}
              source={require('../assets/UserPhoto.png')}
            />
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Dmitry Saitov</Text>

            <Text style={styles.userReviews}>
              <Ionicons
                style={styles.profileIcon}
                name='star'
                color={GlobalStyles.colors.yellow}
              />
              0 0 review
            </Text>

            <Text style={styles.userVerification}>
              <Ionicons
                style={styles.profileIcon}
                name='shield-checkmark-outline'
                color={GlobalStyles.colors.green}
              />
              Account verified
            </Text>
          </View>
        </View>

        <View>
          <Text style={styles.userLevel}>Beginner</Text>
        </View>
      </View>

      <TouchableHighlight
        underlayColor={GlobalStyles.colors.background.primary}
        onPress={pressHandler}
      >
        <View style={styles.paymentOptionsLink}>
          <View style={styles.text}>
            <Text style={styles.paymentOptionsLinkHeader}>Payment options</Text>
            <Text>Find out current, choose a new</Text>
          </View>
          <Ionicons
            style={{ alignSelf: 'center' }}
            size={15}
            name='chevron-forward-outline'
          />
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    maxHeight: 72,
    marginBottom: 26,
  },
  profileAvatar: {
    width: 72,
    height: 72,
    marginRight: 16,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  userLevel: {
    width: 78,
    color: GlobalStyles.colors.green,
    backgroundColor: GlobalStyles.colors.background.green,
    textAlign: 'center',
    borderRadius: 8,
  },
  paymentOptionsLink: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  paymentOptionsLinkHeader: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
