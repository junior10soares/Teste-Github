import { ButtonSearch } from "./styles";

type Props = {
    title: string
    onClick: () => void
}

export function Button({ title, onClick }: Props) {
    return (
        <ButtonSearch type="submit" onClick={onClick}>
            {title}
        </ButtonSearch>
    )
}