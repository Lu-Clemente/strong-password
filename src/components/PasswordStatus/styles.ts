import { View } from "react-native";
import styled from "styled-components";

export const PasswordFlow = styled(View)`
    margin-top: 15px;
`;

export const ProgreesStatus = styled(View)`
    flex-direction: row;
`;

export const Bar = styled(View)`
    background-color: ${(props: { color: string; }) => (props.color && `${props.color}`)};
    height: 5px;
    width: 60px;
    border-radius: 6px;
    margin-right: 3px;
`;

export const PasswordRequirements = styled(View)`
    margin: 15px 0;
`;