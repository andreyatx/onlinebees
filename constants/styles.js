import { StyleSheet } from 'react-native';

export const Variables = {
  colors: {
    background: {
      primary: '#EFF0F7',
      secondary: '#F7F7FC',
      green: '#DFFFF6',
    },
    font: {
      primary: '#14142B',
      secondary: '#4E4B66',
    },

    purple: '#5F2EEA',
    pink: '#ED2E7E',
    green: '#00966D',
    yellow: '#F4B740',
  },
};

export const globalStyles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingHorizontal: 16,
    backgroundColor: Variables.colors.background.secondary,
    flex: 1,
  },
});
