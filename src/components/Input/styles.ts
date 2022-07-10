import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { theme } from "../../theme";

export const InputWrapper = styled(View)`
    width: 80%;
    margin: 5px 0;
`;

export const InputLabel = styled(Text)`
    color: #000;
    align-self: center;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 20px;
`;

export const Input = styled(TextInput)`
    background-color: #fff;
    width: 100%;
    border-radius: 10px;
    padding: 10px 15px;
    font-size: 18px;
    border: 1px solid ${theme.colors.primary};
`;

export const TogglePasswordView = styled(TouchableOpacity)`
    width: 25px;
    position: absolute;
    bottom: 25%;
    right: 20px;
`;

export const ViewPassword = styled(View)`
    width: 100%;
    justify-content: center;
    align-items: center;
`;