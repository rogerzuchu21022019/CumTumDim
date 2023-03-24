import {constants} from '../../../../../shared/constants';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
     
     
    container: {
        flex: 1,
        backgroundColor: constants.COLOR.RED,
      },
      header: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: constants.COLOR.PRIMARY,
      
        
      },
    
      imageLogo: {
        width: 40,
        height: 40,
      },
      leftHeader: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: constants.COLOR.WHITE,
        // marginLeft: ,
      },
      rightHeader: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        // backgroundColor: constants.COLOR.WHITE,
        marginRight: 20,
      },
      divideLine: {
        height: 2,
        backgroundColor: constants.COLOR.BLACK,
      },
      textTitle: {
        color: 'white',
        marginLeft: 6,
      },
    
      imageReturn: {
        // backgroundColor: constants.COLOR.WHITE,
        marginLeft: 5,
        marginRight: 5,
      },
      mainHeader: {
        flexDirection: 'row',
        // backgroundColor: constants.COLOR.WHITE,
        alignItems: 'center',
      
      },
      textHeader: {
        color: constants.COLOR.WHITE,
        fontSize: 20,
        fontWeight:'700'
       
       
      },
      ViewText:{
      
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        
      
     
      },
      body: {
        flex: 12,
        backgroundColor: constants.COLOR.RED,
      
         
      },

});
export default styles;
