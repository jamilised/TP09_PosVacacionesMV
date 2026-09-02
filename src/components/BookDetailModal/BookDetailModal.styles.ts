import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(44, 34, 30, 0.65)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  backdropTouchable: {
    ...StyleSheet.absoluteFillObject,
  },
  modalCard: {
    width: '100%',
    maxWidth: 500,
    maxHeight: '85%',
    backgroundColor: '#f7f4ee',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#c5a059',
    overflow: 'hidden',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  header: {
    backgroundColor: '#2a1b17',
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#c5a059',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f3e9d2',
    flex: 1,
    marginRight: 10,
  },
  closeBtn: {
    padding: 4,
  },
  closeText: {
    color: '#f3e9d2',
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 22,
  },
  scrollContent: {
    padding: 16,
  },
  bodyRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  coverImage: {
    width: 100,
    height: 150,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#e2d7c5',
  },
  infoCol: {
    flex: 1,
    marginLeft: 14,
    justifyContent: 'flex-start',
  },
  infoText: {
    fontSize: 14,
    color: '#5a4a3e',
    marginBottom: 6,
  },
  boldLabel: {
    fontWeight: 'bold',
    color: '#2a1b17',
  },
  quoteContainer: {
    backgroundColor: '#efeae1',
    borderLeftWidth: 3,
    borderLeftColor: '#c5a059',
    padding: 10,
    borderRadius: 4,
    marginBottom: 14,
  },
  quoteText: {
    fontStyle: 'italic',
    color: '#2c221e',
    fontSize: 13,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2a1b17',
    marginBottom: 6,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  tag: {
    backgroundColor: '#e2d7c5',
    borderRadius: 12,
    paddingVertical: 3,
    paddingHorizontal: 8,
  },
  tagText: {
    fontSize: 12,
    color: '#2c221e',
  },
  footer: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: '#e2d7c5',
    alignItems: 'flex-end',
    backgroundColor: '#f7f4ee',
  },
  favoriteBtn: {
    padding: 6,
  },
});