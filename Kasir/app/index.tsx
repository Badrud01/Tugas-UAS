// index.tsx
import { useRouter } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default function HomeScreen() {
  const { push } = useRouter(); // The push method to navigate to other routes

  const handleNavigate = () => {
    const userId = 123; // Example user ID
    push(`/details?id=${userId}`); // Navigate to the DetailsScreen with the 'id' parameter
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the Home Screen!</Text>
      <Button title="Go to User Details" onPress={handleNavigate} />
    </View>
  );
}
