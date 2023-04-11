// ** RN Imports
import { Alert } from 'react-native'

// ** React Imports
import { useState } from 'react'

// ** Other View Imports
import RegisterScreenView from './register'

// ** Rtk Query Imports
import { useRegisterMutation } from '../../services'

const RegisterScreen = ({ navigation }) => {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const [passwordC, setPasswordC] = useState('')
  const [name, setName] = useState('')

  const [registerApi] = useRegisterMutation()

  const handleMoveRegister = () => navigation.navigate('Login')

  const regContent = () => {
    if (id === '' || password === '') {
      Alert.alert('id와 password를 입력해주세요.')

      return
    }

    if (password !== passwordC) {
      Alert.alert('password와 password Check를 확인 해주세요.')

      return
    }

    registerApi({ id, password, name })
      .unwrap()
      .then(res => {
        if (res.status === 200) {
          Alert.alert('회원가입 성공!', '회원가입에 성공하였습니다.', [{ text: '확인', onPress: handleMoveRegister }], {
            cancelable: false
          })

          return
        }

        Alert.alert(res.message)
      })
      .catch(err => console.log(err))
  }

  return (
    <RegisterScreenView
      regContent={regContent}
      id={id}
      setId={setId}
      password={password}
      setPassword={setPassword}
      passwordC={passwordC}
      setPasswordC={setPasswordC}
      name={name}
      setName={setName}
    />
  )
}

export default RegisterScreen
