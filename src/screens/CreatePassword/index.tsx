import React, { useEffect, useState } from "react";
import { Image, Keyboard } from "react-native";
import Button from "../../components/Button";
import PasswordInput from "../../components/Input";
import PasswordStatus from "../../components/PasswordStatus";
import { Container, PasswordView } from "./styles";

const CreatePassword = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true); // or some other action
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false); // or some other action
            }
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    return (
        <Container>
            {
                !isKeyboardVisible && (
                    <Image
                        source={require("../../../assets/img/undraw_Mobile_login.png")}
                        style={{ height: 270, width: "100%" }}
                        resizeMode="cover"
                    />
                )
            }
            <PasswordView>
                <PasswordInput
                    password={password}
                    setPassword={setPassword}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                    isFocused={isFocused}
                    setIsFocused={setIsFocused}
                />
                {
                    (isKeyboardVisible || password.length > 0) && (
                        <PasswordStatus
                            password={password}
                        />
                    )
                }
                <Button />
            </PasswordView>
        </Container>
    )
}

export default CreatePassword;