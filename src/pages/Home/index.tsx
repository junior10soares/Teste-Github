import { useState } from "react"
import { AxiosError } from "axios"

import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Loading } from "../../components/Loading"
import { CardRepo } from "../../components/CardRepo"

import { api } from "../../lib/axios"

import { HomeContainer, InputsContainer, TextHome } from "./styles"

type UserProps = {
    name: string
    public_repos: number
}

type RepoProps = {
    name: string
    html_url: string
    description: string
    visibility: string
}

export function Home() {
    const [dataUser, setDataUser] = useState<UserProps | null>(null)
    const [dataRepo, setRepo] = useState<RepoProps[]>([])
    const [inputValue, setInputValue] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [showWarning, setShowWarning] = useState<boolean>(false)
    const [userNotFound, setUserNotFound] = useState<boolean>(false)

    function handleInputChange(value: string) {
        setInputValue(value)
        setShowWarning(false)
        setUserNotFound(false)
    }

    async function fetchUserData() {
        setIsLoading(true)
        setShowWarning(false)
        setUserNotFound(false)

        if (!inputValue.trim()) {
            setDataUser(null)
            setRepo([])
            setIsLoading(false)
            setShowWarning(true)
            return
        }

        try {
            const responseUser = await api.get(`/users/${inputValue}`)
            const dataUser = responseUser.data
            setDataUser(dataUser)

            const responseRepo = await fetchAllRepos(`/users/${inputValue}/repos?per_page=100`)
            setRepo(responseRepo)
        } catch (error) {
            setDataUser(null)
            setRepo([])

            if ((error as AxiosError)?.response?.status === 404) {
                setUserNotFound(true)
            }
        } finally {
            setIsLoading(false)
        }
    }

    async function fetchAllRepos(url: string): Promise<RepoProps[]> {
        let allRepos: RepoProps[] = []
        let nextPage = url

        while (nextPage) {
            const responseRepo = await api.get(nextPage)
            const dataRepo = responseRepo.data

            allRepos = [...allRepos, ...dataRepo]

            const linkHeader = responseRepo.headers.link
            nextPage = extractNextPageUrl(linkHeader) ?? ''
        }

        return allRepos
    }

    function extractNextPageUrl(linkHeader: string | undefined): string | null {
        if (!linkHeader)
            return null

        const match = linkHeader.match(/<([^>]+)>;\s*rel="next"/)
        return match ? match[1] : null
    }

    return (
        <HomeContainer>
            <Header />
            <TextHome>Home</TextHome>

            <InputsContainer>
                <Input title="Procurar o usuário" onInputChange={handleInputChange} />
                <Button title="Procurar" onClick={fetchUserData} />
            </InputsContainer>

            {showWarning && (
                <strong style={{ display: 'flex', color: 'red', fontSize: '12px', margin: '10px 0 0 470px' }}>
                    Preencha o campo.
                </strong>
            )}
            {userNotFound && (
                <strong style={{ display: 'flex', color: 'red', fontSize: '12px', margin: '10px 0 0 470px' }}>
                    Usuário não encontrado. Por favor, digite um usuário válido!
                </strong>
            )}

            {isLoading ? (
                <Loading />
            ) : (
                <>
                    {dataUser ? (
                        <main>
                            <strong>{dataUser?.name}</strong>
                            <strong>Repositório {dataUser?.public_repos}</strong>
                        </main>
                    ) : null}

                    {dataRepo.length > 0 ? (
                        <ul>
                            {dataRepo.map((item, index) => (
                                <CardRepo
                                    key={index}
                                    href={item.html_url}
                                    title={item.name}
                                    visibility={item.visibility}
                                    description={item.description}
                                />
                            ))}
                        </ul>
                    ) : (
                        <p>Que tal procurar por repositórios hoje?</p>
                    )}
                </>
            )}
        </HomeContainer>
    )
}
