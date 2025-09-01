import { Pressable, StyleSheet } from 'react-native'
import 'react-native-svg'
import ArrowLeftIcon from '../assets/icons/ArrowLeft'
import { theme } from '../constants/theme'
export default function BackButton({router}) {
  return (
    <Pressable onPress={() => router.back()} style={styles.button}>
        <ArrowLeftIcon  />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-start',
    padding: 5,
    borderRadius: theme.radius.sm,
    backgroundColor: 'rgba(0, 0, 0, 0.07)'
  }
})