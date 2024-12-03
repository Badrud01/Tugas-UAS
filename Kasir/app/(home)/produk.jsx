import { Link } from 'expo-router';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const products = [
  { id: '1', name: 'peralatan dapur', price: 8000000 },
  { id: '2', name: 'bahan pangan', price: 5000000 },
  { id: '3', name: 'kebutuhan pokok', price: 1000000 },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Daftar Produk</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Text>{item.name}</Text>
            <Text>Rp {item.price.toLocaleString()}</Text>
            <Link
              href={{
                pathname: '/product/[id]',
                params: { id: item.id },
              }}
            >
              <Button title="Lihat Detail" />
            </Link>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  productContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    width: 250,
    alignItems: 'center',
  },
});
