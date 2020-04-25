import React, {useState, useEffect, useRef} from 'react';
import MainForm from '../../components/main/MainForm';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconWrapper from '../../components/common/IconWrapper';
import Animated from 'react-native-reanimated';

const MainStack = createStackNavigator();

const MainContainer = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [menuToggle, setMenuToggle] = useState(false);
  const [menu, setMenu] = useState([
    {value: 'login'},
    {value: 'register'},
    {value: 'logout'},
  ]);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      delay: 200,
    }).start();
  }, [fadeAnim]);

  const navigationOptions = () => {
    return {
      // headerLeft: () => (
      //   <Ionicons
      //     name={'ios-home'}
      //     size={30}
      //     color={'tomato'}
      //     style={{paddingLeft: 20}}
      //   />
      // ),
      headerTitleStyle: {
        fontWeight: 'bold',
        flexGrow: 1,
        justifyContent: 'center',
        marginTop: 11,
      },
      headerStyle: {
        backgroundColor: '#333',
      },
      headerTintColor: 'white',
      headerTitleAlign: 'center',
      headerRight: () => (
        <IconWrapper
          menu={menu}
          fadeAnim={fadeAnim}
          onToggle={onToggle}
          menuToggle={menuToggle}
        />
      ),
    };
  };

  const onToggle = () => {
    setMenuToggle(() => !menuToggle);
  };
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
        component={MainForm}
        options={navigationOptions}
      />
    </MainStack.Navigator>
  );
};

export default MainContainer;
