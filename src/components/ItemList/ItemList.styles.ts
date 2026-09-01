import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f4ee',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f7f4ee',
  },
  message: {
    fontSize: 16,
    color: '#5a4a3e',
    textAlign: 'center',
    marginTop: 12,
    fontStyle: 'italic',
  },
  errorMessage: {
    color: '#8c2d19',
    fontStyle: 'normal',
    fontWeight: '600',
  },
  listContent: {
    paddingVertical: 10,
  },
});