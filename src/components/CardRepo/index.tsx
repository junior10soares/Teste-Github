import { LinkContainer } from "./styles";

type Props = {
    title: string
    description: string
    href: string
    visibility: string
}

export function CardRepo({ title, description, href, visibility }: Props) {
    return (
        <LinkContainer
            target="_blank"
            href={href}
        >
            <div>
                <h2>{title}</h2>
                <strong>{visibility}</strong>
            </div>
            <h6>{description}</h6>
        </LinkContainer>
    )
}