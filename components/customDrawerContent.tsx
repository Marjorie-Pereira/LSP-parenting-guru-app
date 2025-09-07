import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';



export default function CustomDrawerContent(props:any) {
    const { bottom } = useSafeAreaInsets();

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    
        <Pressable 
        // style={{padding: 20, paddingBottom: 20}} 
        >
                <Text>
                    Logout
                </Text>
        </Pressable>

    </View>
  )
}