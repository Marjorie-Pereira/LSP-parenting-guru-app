import ScreenWrapper from "@/components/ScreenWrapper";
import { useRouter } from "expo-router";
import { Button, Text } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <ScreenWrapper bg={'#E3E2EB'}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Button title="welcome" onPress={() => router.push('./welcome')}/>
    </ScreenWrapper>
  );
}


