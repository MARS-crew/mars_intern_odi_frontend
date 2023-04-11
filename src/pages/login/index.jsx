// ** RN Imports
import { Alert } from 'react-native'

// ** Other View Imports
import LoginScreenView from 'pages/login/login'
import { useState } from 'react'

// ** Rtk Query Imports
import { useLoginMutation } from '../../services'

const LoginScreen = ({ navigation }) => {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')

  const [loginApi] = useLoginMutation()

  const handleMoveRegister = () => navigation.navigate('Register')

  const handleLogin = () => {
    if (id === '' || password === '') {
      Alert.alert('ID와 Password를 입력해주세요.')

      return
    }

    loginApi({ id, password })
      .unwrap()
      .then(res => {
        console.log(res)
        if (res.status === 200) {
          Alert.alert('로그인 성공!')

          return
        }

        Alert.alert(res.message)
      })
      .catch(err => console.log(err))
  }
  return (
    <LoginScreenView
      handleMoveRegister={handleMoveRegister}
      handleLogin={handleLogin}
      id={id}
      setId={setId}
      password={password}
      setPassword={setPassword}
    />
  )
}

export default LoginScreen
