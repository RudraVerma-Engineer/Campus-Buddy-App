import { UserAsyncStorage } from "@/lib/services/async-storage/user.async-storage";
import { api, setToken } from "@/lib/services/axios";
import * as AuthSession from "expo-auth-session";
import * as Google from "expo-auth-session/providers/google";
import { router } from "expo-router";
import { useEffect } from "react";
import { Alert, TouchableOpacity } from "react-native";
import { useTheme } from "../contexts/theme-context";
import { AnimatedAntDesign } from "../ui/animated";

export function GoogleLoginBtn() {
    const { animatedStyles } = useTheme();
    const redirectUri = AuthSession.makeRedirectUri({
        native: "com.anonymous.rnchatapp:/oauthredirect",
    });

    const [_, response, promptAsync] = Google.useAuthRequest({
        androidClientId: process.env.EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID,
        iosClientId: process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID,
        redirectUri,
    });

    useEffect(() => {
        registerUser(response);
    }, [response]);

    async function registerUser(response) {
        if (response?.type == "success") {
            try {
                const { authentication } = response;
                if (authentication?.idToken) {
                    const res = await api.post(/api/auth/google, {
                        idToken: authentication?.idToken
                    });
                    if (res?.data) {
                        await UserAsyncStorage.setCurrentUser(res?.data?.user);
                        await UserAsyncStorage.setUserToken(res?.data?.token);
                        setToken(res?.data?.token);
                        router.replace("/");
                    }
                } else {
                    Alert.alert("Error", "No token found");
                }
            } catch (error) {
                Alert.alert("Error", "Something went wrong");
            }
        }
    }

    return (
        <TouchableOpacity
            onPress={() => promptAsync()}
        >
            <AnimatedAntDesign
                name="google"
                size={32}
                style={animatedStyles.textPrimary}
            />
        </TouchableOpacity>
    )
}