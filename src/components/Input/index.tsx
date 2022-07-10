import React, { SetStateAction } from "react";
import { theme } from "../../theme";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import {
    Input, InputLabel, InputWrapper,
    TogglePasswordView, ViewPassword
} from "./styles";

interface Props {
    password: string;
    setPassword: (e: SetStateAction<string>) => void;
    showPassword: boolean;
    setShowPassword: (e: SetStateAction<boolean>) => void;
    isFocused: boolean;
    setIsFocused: (e: SetStateAction<boolean>) => void;
}

const PasswordInput: React.FC<Props> = ({
    password,
    setPassword,
    showPassword,
    setShowPassword,
    isFocused,
    setIsFocused
}) => {

    return (
        <InputWrapper>
            <InputLabel>Crie uma senha forte</InputLabel>
            <ViewPassword>
                <Input
                    value={password}
                    placeholder="*****"
                    placeholderTextColor="#999"
                    secureTextEntry={showPassword ? false : true}
                    onChangeText={setPassword}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
                <TogglePasswordView onPress={() => setShowPassword(!showPassword)}>
                    <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} color={theme.colors.primary} size={25} />
                </TogglePasswordView>
            </ViewPassword>
        </InputWrapper>
    )
}

export default PasswordInput;