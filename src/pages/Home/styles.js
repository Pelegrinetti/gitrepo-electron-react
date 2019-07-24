import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  background-color: #333;
  color: #fff;
`

export const SearchContainer = styled.div`
  width: 100%;
  padding: 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SearchLabel = styled.label``

export const SearchInput = styled.input`
  width: 100%;
  padding: 5px;
  margin: 5px;

  border: solid 1px #ddd;
  border-radius: 5px;
`

export const SearchSubmit = styled.button`
  padding: 0.4rem;

  background-color: #2ecc71;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #2ecc60;
  }
`

export const ReposContainer = styled.div`
  height: 64.7vh;
  max-height: 64.7vh;

  overflow-y: auto;
`

export const Table = styled.table`
  width: 100%;

  text-align: center;
`