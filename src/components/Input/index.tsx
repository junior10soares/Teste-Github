import { useState } from "react";

import { InputSearch, InputContainer, MagnifyingGlassIcon } from "./styles";

type Props = {
    title: string
    onInputChange: (value: string) => void
}

export function Input({ title, onInputChange }: Props) {

    const [inputText, setInputText] = useState<string>('')

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const newValue = e.target.value;
        setInputText(newValue)
        onInputChange(newValue)
    }

    return (
        <InputContainer>
            <InputSearch
                type="text"
                value={inputText}
                onChange={handleInputChange}
                onBlur={handleInputChange}
                placeholder={title}
            />
            <MagnifyingGlassIcon />
        </InputContainer>
    )
}
