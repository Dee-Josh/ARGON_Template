import { Stack } from "expo-router";
import { AuthProvider } from "@/lib/context/AuthContext";

// function RouteGuard({children}: {children: React.ReactNode}){
//   useEffect(()=>{
//     const isAuth = false;
    
//     useEffect(()=>{
//       if(!isAuth){
//         router.replace("/login")
//       }
//     })
//   })

//   return <>{children}</>
// }

const isAuth = false;



export default function RootLayout() {

  // const [isAuth, setIsAuth] = useState(false);


  return(
    <AuthProvider>
      <Stack>
        <Stack.Screen  name={!isAuth ? "login" : "(tabs)" } options={{headerShown: false}} />
        {/* <Stack.Screen name="(tabs)" options={{headerShown: false}} /> */}
      </Stack>
    </AuthProvider>
  )
}
