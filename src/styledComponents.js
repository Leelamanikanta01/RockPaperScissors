import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  width: 100%;
`
export const RockPaperContainer = styled.div`
  background-color: transparent;
  padding: 15px;
  border: 1px solid #ffffff;
  width: 70%;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
`
export const NamesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 14px;
`
export const NameHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 22px;
  margin-bottom: 0px;
  font-weight: 500;
`
export const ScoreContainer = styled.div`
  background-color: #ffffff;
  height: 80px;
  width: 100px;
  border-radius: 6px;
  text-align: center;
  color: #223a5f;
`
export const ScoreName = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
`
export const ScoreValue = styled.p`
  font-family: 'Roboto';
  font-size: 30px;
  margin-top: -14px;
  font-weight: 600;
`
export const UlContainer = styled.ul`
  display: flex;
  width: 35%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  list-style-type: none;
  margin-top: 70px;
`
export const PopupContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 10px;
`

export const PopupBtn = styled.button`
  border: 0;
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Roboto';
  font-size: 15px;
  padding: 10px;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  text-align: right;
  @media screen and (min-width: 768px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`
export const RulesImgContainer = styled.div``

export const RulesImg = styled.img`
  width: 100%;
  height: 100%;
`
export const CloseBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const CloseBtn = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
  font-size: 25px;
`
