// ** RN Imports
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

// ** Style Imports
import styles from './style'

const LoginScreenView = ({ handleMoveRegister, handleLogin, id, setId, password, setPassword }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topBox}>{/* <Image source={require('../../../assets/Login.png')} /> */}</View>
      <View style={styles.bottomBox}>
        <Text style={styles.bottomBoxLabel}>id</Text>
        <TextInput style={styles.bottomBoxInput} value={id} onChangeText={setId} />
        <Text style={styles.bottomBoxLabel}>password</Text>
        <TextInput style={styles.bottomBoxInput} value={password} onChangeText={setPassword} secureTextEntry />
        <TouchableOpacity style={styles.bottomBoxBtn} onPress={handleLogin}>
          <Text style={styles.bottomBoxBtnText}>LOGIN</Text>
        </TouchableOpacity>
        <View style={styles.bottomBoxSubView}>
          <Text style={styles.bottomBoxSubText}>아직 회원이 아니라면??</Text>
          <Text style={styles.bottomBoxSubText} onPress={handleMoveRegister}>
            회원가입
          </Text>
        </View>
      </View>
    </View>
  )
}

export default LoginScreenView
