import { useRouter, useSearchParams } from 'expo-router';
import { View, Text, Button, StyleSheet } from 'react-native';

const products = [
  { id: '1', name: 'Laptop', price: 8000000, description: 'Laptop dengan spesifikasi tinggi' },
  { id: '2', name: 'Smartphone', price: 5000000, description: 'Smartphone dengan kamera terbaik' },
  { id: '3', name: 'Headphone', price: 1000000, description: 'Headphone berkualitas tinggi' },
];

export default function ProductDetailScreen() {
  const { id } = useSearchParams(); // Mendapatkan parameter id produk dari URL
  const product = products.find((item) => item.id === id);

  const handleBuyNow = () => {
    alert(`Anda telah membeli ${product?.name}!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{product?.name}</Text>
      <Text>Harga: Rp {product?.price.toLocaleString()}</Text>
      <Text>{product?.description}</Text>
      <Button title="Beli Sekarang" onPress={handleBuyNow} />
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
});
