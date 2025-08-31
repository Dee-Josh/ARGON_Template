import { Stack, useRouter, useSegments } from "expo-router";
import { AuthProvider, useAuth } from "@/lib/context/AuthContext";
import { useEffect } from "react";


function RouteGuard({children}: {children: React.ReactNode}){
  const router = useRouter();
  const {user} = useAuth();
  const segments = useSegments();


  useEffect(()=>{
    const inAuthGroup = segments[0] === "login";
    if(!user && !inAuthGroup){
      router.replace("/login");
    }else if(user && inAuthGroup){
      router.replace("/");
    } 
  }), [user, segments];
  

  return <>{children}</>
} // - find the alternative for this in JS

const isAuth = false;



export default function RootLayout() {

  // const [isAuth, setIsAuth] = useState(false);
  // Use code from chatgpt to update the splashscreen and the authentication screen display logic

  return(
    <AuthProvider>
      <Stack>
        <Stack.Screen  name={!isAuth ? "login" : "(tabs)" } options={{headerShown: false}} />
        {/* <Stack.Screen name="(tabs)" options={{headerShown: false}} /> */}
      </Stack>
    </AuthProvider>
  )
}
