import { Tabs } from "expo-router";

import Entypo from '@expo/vector-icons/Entypo';


export default function TabsLayout() {
  return(
    <Tabs screenOptions={{tabBarActiveTintColor: "#009688"}}>
      <Tabs.Screen 
        name="index" 
        options={{title: 'Home',
        tabBarIcon: ({color, focused})=>
        {return focused ? <Entypo name='home' size={24}color={color} /> : <Entypo name='key' size={24}color={color} /> }}} 
      />
      <Tabs.Screen 
        name="resources" 
        options={{title: 'Resources',
        tabBarIcon: ({color})=>
        (<Entypo name='book' size={24}color={color} />)}} 
      />
    </Tabs>
  )
}


// export default function TabsLayout() {
//   return(
//     <Tabs screenOptions={{tabBarActiveTintColor: "#009688"}}>
//       <Tabs.Screen 
//         name="index" 
//         options={{title: 'Home',
//         tabBarIcon: ({color, focused})=>
//         {return focused ? <Entypo name='home' size={24}color={color} /> : <Entypo name='key' size={24}color={color} /> }}} 
//       />
//       <Tabs.Screen 
//         name="resources" 
//         options={{title: 'Resources',
//         tabBarIcon: ({color})=>
//         (<Entypo name='book' size={24}color={color} />)}} 
//       />
//     </Tabs>
//   )
// }




 