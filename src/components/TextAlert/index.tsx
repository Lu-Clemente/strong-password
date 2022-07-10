import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { theme } from "../../theme";
import { Container, Label } from "./styles";

interface Props {
    label: string;
    checker: boolean;
}

const TextAlert: React.FC<Props> = ({ label, checker }) => {
    return (
        <Container>

            <FontAwesomeIcon icon={faCircleDot} size={16} color={checker ? theme.colors.success : theme.colors.error} style={{ marginRight: 15 }} />

            <Label style={checker ? { color: theme.colors.success } : { color: theme.colors.error }}>
                {label}
            </Label>

        </Container>
    )
}

export default TextAlert;