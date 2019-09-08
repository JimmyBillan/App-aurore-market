import { StyleSheet, Platform, StatusBar } from 'react-native';


export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: { flex: 1, width: "50%" },
  input: { backgroundColor: "grey", borderColor: "black", borderWidth: 1, marginBottom: 10 }
});