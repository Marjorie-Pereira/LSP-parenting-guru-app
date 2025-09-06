import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import { Alert, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import Mail from '../assets/icons/Mail';
import User from '../assets/icons/User';
import ViewIcon from '../assets/icons/ViewIcon';
import ViewIconSlash from '../assets/icons/ViewIconSlash';
import BackButton from '../components/BackButton';
import Button from '../components/Button';
import Input from '../components/Input';
import ScreenWrapper from '../components/ScreenWrapper';
import { theme } from '../constants/theme';
import { hp, wp } from '../helpers/common';
import { supabase } from '../lib/supabase';

const SignUp = () => {
  const router = useRouter();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const nameRef = useRef("");
  const [loading, setLoading] = useState(false)
  const [eyeIcon, setEyeIcon] = useState("hide")

  const onSubmit = async () => {
    if(!emailRef.current || !passwordRef.current) {
      Alert.alert("Por favor preencha todos os campos")
      return;
    }

    let name = nameRef.current.trim()
    let email = emailRef.current.trim()
    let password = passwordRef.current.trim()

    setLoading(true)

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name
        }
      }
      
    });
    setLoading(false)
    
    if(error) {
      Alert.alert('Sign Up', error.message)
      
    }
  }
  return (
    <ScreenWrapper bg='#E3E2EB'>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <BackButton router={router} />

        {/* title */}
        <View>
          <Text style={styles.welcomeText}>Crie sua conta</Text>
        </View>

        {/* form */}
        <View style={styles.form}>
          <Text style={{fontSize: hp(2), color: theme.colors.text}}>
            Por favor crie uma conta para continuar
          </Text>

          <Input 
            placeholder="Seu nome aqui"
            icon={<User />}
            onChangeText={(value) => nameRef.current = value}
          />
          <Input 
            placeholder="Endereco de email"
            icon={<Mail />}
            onChangeText={(value) => emailRef.current = value}
          />
          <Input 
            placeholder="Senha"
            icon={eyeIcon === "hide" ? <ViewIcon /> : <ViewIconSlash />}
            onChangeText={(value) => passwordRef.current = value}
            togglePassword={() => {
              setEyeIcon(eyeIcon === "hide" ? "show" : "hide")
            }}
            secureTextEntry={eyeIcon === "hide" ? true : false}
            type="password"
          />
          
          <Button title='Sign Up' loading={loading} onPress={onSubmit} />
          
        </View>
        {/* footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Já tem uma conta? </Text>
          <Pressable onPress={() => router.push("./login")}>
            <Text style={[styles.footerText, {color: theme.colors.primary, fontWeight: theme.fonts.semibold}]}>Entrar</Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default SignUp

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