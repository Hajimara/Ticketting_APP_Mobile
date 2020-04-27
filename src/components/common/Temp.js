// const fadeAnim = useRef(new Animated.Value(0)).current;
//   const [division, setDivision] = useState(false);
//   const [menuToggle, setMenuToggle] = useState(false);

//   const onFade = () => {
//     if (division) {
//       Animated.timing(fadeAnim, {
//         toValue: 0,
//         duration: 500,
//         useNativeDriver: true,
//       }).start();
//     } else {
//       Animated.timing(fadeAnim, {
//         toValue: 1,
//         duration: 500,
//         useNativeDriver: true,
//       }).start();
//     }
//     setDivision(() => !division);
//   };

//   const onToggle = () => {
//     setMenuToggle(() => !menuToggle);
//     onFade();
//   };

//   const navigationOptions = () => {
//     return {
//       // headerLeft: () => (
//       //   <Ionicons
//       //     name={'ios-home'}
//       //     size={30}
//       //     color={'tomato'}
//       //     style={{paddingLeft: 20}}
//       //   />
//       // ),
//       title: 'Home',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//         flexGrow: 1,
//         justifyContent: 'center',
//         marginTop: 11,
//       },
//       headerStyle: {
//         backgroundColor: '#333',
//       },
//       headerTintColor: 'white',
//       headerTitleAlign: 'center',
//       headerRight: () => (
//         <IconWrapper fadeAnim={fadeAnim} onToggle={onToggle} />
//       ),
//     };
//   };