import { Text, View } from "react-native";
import { theme } from "../../theme";
import styled from "styled-components";

export const Container = styled(View)`
    padding: 15px;
    background-color: ${theme.colors.primary};
    border-radius: 12px;
    margin-top: 20px;
`;

export const Label = styled(Text)`
    color: #fff;
    font-weight: 600;
    font-size: 20px;
`;