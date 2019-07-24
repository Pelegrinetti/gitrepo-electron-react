import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

import { 
  Container,
  SearchContainer,
  SearchLabel,
  SearchInput,
  SearchSubmit,
  ReposContainer,
  Table
} from './styles'

export default function Home () {
  const [ username, setUsername ] = useState('')
  const [ repos, setRepos ] = useState([])

  function handleOnTyping (e) {
    setUsername(e.target.value)
  }

  async function handleOnSubmit () {
    const response = await fetch(`https://api.github.com/users/${username}/repos`)

    const responseJson = await response.json()

    if (responseJson.message) {
      alert(responseJson.message)
    } else {
      setRepos(responseJson)
    }

  }

  return (
    <Container>
      <SearchContainer>
        <SearchLabel>Username:</SearchLabel>
        <SearchInput type="text" onChange={handleOnTyping} />
        <SearchSubmit onClick={handleOnSubmit}>Search</SearchSubmit>
      </SearchContainer>
      <ReposContainer>
      { repos.length > 0 && (
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Language</th>
              <th>Stars</th>
            </tr>
          </thead>
          <tbody>
            { repos.map(repo => {
              return (
                <tr key={repo.id}>
                  <td>{repo.name}</td>
                  <td>{repo.description}</td>
                  <td>{repo.language}</td>
                  <td><FaStar color="yellow"/> {repo.stargazers_count}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      ) }
      </ReposContainer>
    </Container>
  )
}
