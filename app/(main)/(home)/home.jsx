import Button from '@/components/Button';
import ScreenWrapper from '@/components/ScreenWrapper';
import { supabase } from '@/lib/supabase';
import { Alert, Text } from 'react-native';


const Home = () => {
    
    const onLogout = async () => {
        
        const { error } = await supabase.auth.signOut();
        if(error) {
            Alert.alert('Logout', error.message)
        }
    }

  return (
    <ScreenWrapper>
      
      <Text>Odeio react native</Text>
      <Button title='Logout' onPress={onLogout} />
    </ScreenWrapper>
    
  )
}

export default Home

