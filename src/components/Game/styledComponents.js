import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #223a5f;
  justify-content: space-between;
  padding-bottom: 3%;
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
  border-radius: 8px;
  margin: 10px;
  font-family: bree serif;
  font-size: 18px;
`

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  margin-bottom: 15px;
  max-width: 600px;
  align-self: center;
`
export const PopupView = styled.div`
  background-color: #ffffff;
  padding: 2%;
  margin: 5%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const PopupHeading = styled.h1`
  color: #ffffff;
  font-family: bree serif;
  font-size: 30px;
  font-weight: 500;
`

export const PopupImg = styled.img`
  width: 100%;
`

export const ResultPage = styled(GameTabsContainer)``

export const ResultTab = styled(GameTabItem)`
  text-align: center;
  margin: 0;
`

export const ResultName = styled(PopupHeading)`
  font-family: Roboto;
  font-size: 25px;
  font-weight: 600px;
`

export const ResultIcon = styled(GameTabImg)``
