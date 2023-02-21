import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #223a5f;
  justify-content: space-between;
`

export const GameTabsContainer = styled.ul`
  display: flex;
  width: 80%;
  max-width: 600px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0;
`

export const GameTabItem = styled.li`
  list-style-type: none;
  width: 48%;
  margin: 1%;
`

export const GameTabButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
`

export const GameTabImg = styled.img`
  width: 80%;
`

export const RulesButton = styled.button`
  outline: none;
  border: none;
  background-color: #ffffff;
  align-self: flex-end;
  color: #223a5f;
  padding: 10px;
  padding-right: 15px;
  padding-left: 15px;
  font-size: 15px;
`

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 60vh;
  background-color: #223a5f;
  justify-content: space-between;
`
export const PopupView = styled.div``

export const PopupHeading = styled.h1`
  color: #ffffff;
`

export const PopupImg = styled.img`
  width: 60%;
`

export const ResultPage = styled(GameTabsContainer)``

export const ResultTab = styled(GameTabItem)``

export const ResultName = styled(PopupHeading)``

export const ResultIcon = styled(GameTabImg)``
