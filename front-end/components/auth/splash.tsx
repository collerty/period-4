import { SplashScreen } from 'expo-router';
import {useSession} from "@/lib/ctx";

export function SplashScreenController() {
  const { isLoading } = useSession();

  if (!isLoading) {
    SplashScreen.hideAsync();
  }

  return null;
}
