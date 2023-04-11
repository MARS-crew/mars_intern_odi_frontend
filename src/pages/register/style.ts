import constant from '../../common/constant'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF49A'
  },
  topBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomBox: {
    flex: 4,
    backgroundColor: 'white',
    borderRadius: 50
  },
  bottomBoxH1View: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomBoxH1: {
    marginTop: 25,
    fontSize: 25
  },
  bottomBoxLabel: {
    marginTop: 25,
    marginLeft: 35
  },
  bottomBoxInput: {
    width: constant.width * 0.8,
    height: 60,
    backgroundColor: '#EFEFEF',
    marginLeft: 35,
    borderRadius: 10,
    marginTop: 10,
    paddingLeft: 10
  },
  bottomBoxBtn: {
    width: constant.width * 0.8,
    height: 60,
    marginLeft: 35,
    borderRadius: 10,
    marginTop: 40,
    backgroundColor: '#FEF49A',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomBoxBtnText: {
    fontSize: 20
  },
  bottomBoxSubView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomBoxSubText: {
    marginRight: 20,
    marginLeft: 10,
    marginTop: 20
  }
})

export default styles
