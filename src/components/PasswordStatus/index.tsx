import React, { useEffect, useState } from "react";
import { theme } from "../../theme";
import TextAlert from "../TextAlert";
import {
    Bar, PasswordFlow, PasswordRequirements, ProgreesStatus
} from "./styles";

type Props = {
    password: string;
}

const PasswordStatus: React.FC<Props> = ({ password }) => {
    const [isOkCharacters, setIsOkCharacters] = useState(false);
    const [isOkUppercase, setIsOkUppercase] = useState(false);
    const [isOkNumbers, setIsOkNumbers] = useState(false);
    const [isOkSpecialChar, setIsOkSpecialChar] = useState(false);

    const checkPassword = () => {

        if (password.length >= 8) {
            setIsOkCharacters(true);
        } else {
            setIsOkCharacters(false);
        }

        if (/[A-Z]/.test(password)) {
            setIsOkUppercase(true);
        } else {
            setIsOkUppercase(false);
        }

        if (password.match(/[0-9].*[0-9]/)) {
            setIsOkNumbers(true);
        } else {
            setIsOkNumbers(false);
        }

        if (/\W|_/.test(password)) {
            setIsOkSpecialChar(true);
        } else {
            setIsOkSpecialChar(false);
        }
    }

    useEffect(() => {
        checkPassword()
    }, [password])

    const handleShowBar = (index: number) => {
        if (index === 0 && isOkCharacters) {
            return theme.colors.success;
        } else if (index === 1 && isOkUppercase) {
            return theme.colors.success;
        } else if (index === 2 && isOkNumbers) {
            return theme.colors.success;
        } else if (index === 3 && isOkSpecialChar) {
            return theme.colors.success;
        } else {
            return "#636363";
        }
    }

    return (
        <PasswordFlow>
            <ProgreesStatus>
                {
                    [...Array(4)].map((e, i) => <Bar key={i} color={handleShowBar(i)} />)
                }
            </ProgreesStatus>
            <PasswordRequirements>
                <TextAlert
                    label="Pelo menos 8 caracteres"
                    checker={isOkCharacters}
                />
                <TextAlert
                    label="1 caracter com letra maiúscula"
                    checker={isOkUppercase}
                />
                <TextAlert
                    label="Pelo menos 2 números"
                    checker={isOkNumbers}
                />
                <TextAlert
                    label="Pelo menos 1 caracter especial"
                    checker={isOkSpecialChar}
                />
            </PasswordRequirements>
        </PasswordFlow>
    )
}

export default PasswordStatus;