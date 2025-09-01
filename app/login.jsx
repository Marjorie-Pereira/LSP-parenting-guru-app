import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import { Alert, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import Mail from '../assets/icons/Mail';
import ViewIcon from '../assets/icons/ViewIcon';
import ViewIconSlash from '../assets/icons/ViewIconSlash';
import BackButton from '../components/BackButton';
import Button from '../components/Button';
import Input from '../components/Input';
import ScreenWrapper from '../components/ScreenWrapper';
import { theme } from '../constants/theme';
import { hp, wp } from '../helpers/common';

const Login = () => {
  const router = useRouter();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [loading, setLoading] = useState(false)
  const [eyeIcon, setEyeIcon] = useState("hide")

  const onSubmit = () => {
    if(!emailRef.current || !passwordRef.current) {
      Alert.alert("Please fill all the fields")
      return;
    }
  }
  return (
    <ScreenWrapper bg='#E3E2EB'>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <BackButton router={router} />

        {/* title */}
        <View>
          <Text style={styles.welcomeText}>Welcome Back</Text>
        </View>

        {/* form */}
        <View style={styles.form}>
          <Text style={{fontSize: hp(2), color: theme.colors.text}}>
            Please login to continue
          </Text>

          <Input 
            placeholder="Email address"
            icon={<Mail />}
            onChangeText={(value) => emailRef.current = value}
          />
          <Input 
            placeholder="Password"
            icon={eyeIcon === "hide" ? <ViewIcon /> : <ViewIconSlash />}
            onChangeText={(value) => passwordRef.current = value}
            togglePassword={() => {
              setEyeIcon(eyeIcon === "hide" ? "show" : "hide")
            }}
            type="password"
            secureTextEntry={eyeIcon === "hide" ? true : false}
          />
          <Text style={styles.forgotPassword}>
            Forgot Password?
          </Text>
          <Button title='Login' loading={loading} onPress={onSubmit} />
          
        </View>
        {/* footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Don&apos;t have an account? </Text>
          <Pressable onPress={() => router.push("./signUp")}>
            <Text style={[styles.footerText, {color: theme.colors.primary, fontWeight: theme.fonts.semibold}]}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 45,
        paddingHorizontal: wp(5)
    },
    welcomeText: {
      fontSize: hp(4),
      fontWeight: theme.fonts.bold,
      color: theme.colors.text
    },
    form: {
      gap: 20
    },
    forgotPassword: {
      textAlign: 'right',
      fontWeight: theme.fonts.semibold,
      color: theme.colors.text,
      fontSize: hp(2)
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 5
    },
    footerText: {
      textAlign: 'center',
      color: theme.colors.text,
      fontSize: hp(1.6)
    }

})