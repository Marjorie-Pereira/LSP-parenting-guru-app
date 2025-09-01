import Button from '@/components/Button';
import ScreenWrapper from '@/components/ScreenWrapper';
import { theme } from '@/constants/theme';
import { hp, wp } from '@/helpers/common';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
const Welcome = () => {
  const router = useRouter();
  return (
    <ScreenWrapper>
      <StatusBar style="dark" />
      <View style={styles.container}>
        {/* image */}
        {/* title */}
        <View style={{gap: 20}}>
          <Text style={styles.title}>Parenting Guru</Text>
          <Text style={styles.punchline}>
            Parenthood doesn&apos;t have to be hard so...
            I&apos;m here to help!
          </Text>
        </View> 

        {/* footer */}
        <View style={styles.footer}>
          <Button 
          title='Get Started'
          buttonStyle={{marginHorizontal: wp(3)}}
          onPress={()=>{router.push('./signUp')}}
           />

          <View style={styles.bottomTextContainer}>
            <Text style={styles.loginText}>
              Already have an account?
            </Text>
            <Pressable onPress={() => router.push('./login')}>
              <Text style={[styles.loginText, {color: theme.colors.primary, fontWeight: theme.fonts.semibold}]}>
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: wp(4)
  },
  title: {
    color: theme.colors.text,
    fontSize: hp(4),
    textAlign: 'center',
    fontWeight: theme.fonts.extrabold
  },
  punchline: {
    textAlign: 'center',
    paddingHorizontal: wp(10),
    fontSize: hp(1.7),
    color: theme.colors.text
  },
  footer: {
    gap: 30,
    width: '100%',

  },
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5
  },
  loginText: {
    textAlign: 'center',
    color: theme.colors.text,
    fontSize: hp(1.7)
  }
})