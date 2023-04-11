// ** RN Imports
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

// ** Style Imports
import styles from './style'

const RegisterScreenView = ({
  regContent,
  id,
  setId,
  password,
  setPassword,
  passwordC,
  setPasswordC,
  name,
  setName
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topBox} />
      <View style={styles.bottomBox}>
        <View style={styles.bottomBoxH1View}>
          <Text style={styles.bottomBoxH1}>회원가입</Text>
        </View>
        <Text style={styles.bottomBoxLabel}>id</Text>
        <TextInput style={styles.bottomBoxInput} value={id} onChangeText={setId} />
        <Text style={styles.bottomBoxLabel}>password</Text>
        <TextInput style={styles.bottomBoxInput} value={password} onChangeText={setPassword} secureTextEntry />
        <Text style={styles.bottomBoxLabel}>password Check</Text>
        <TextInput style={styles.bottomBoxInput} value={passwordC} onChangeText={setPasswordC} secureTextEntry />
        <Text style={styles.bottomBoxLabel}>name </Text>
        <TextInput style={styles.bottomBoxInput} value={name} onChangeText={setName} />
        <TouchableOpacity style={styles.bottomBoxBtn} onPress={regContent}>
          <Text style={styles.bottomBoxBtnText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default RegisterScreenView
