import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
`
export const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 100px;
  background-color: #cbd5e1;
`

export const NavbarLogo = styled.img`
  height: 60px;
  width: 180px;
  margin-left: 40px;
`
export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 40px;
`
export const SelectEl = styled.select`
  width: 30%;
  height: 40px;
  padding-left: 20px;
  border: 1px solid #e2e8f0;
  border-radius: 5px;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: #475569;
  margin-bottom: 15px;
`
export const OptionsEl = styled.option`
  font-size: 16px;
  font-weight: 500;
  color: #475569;
`

export const ProjectUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`
export const ProjectLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 300px;
  width: 23%;
  margin: 10px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
`
export const ProjectsImage = styled.img`
  height: 200px;
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-bottom: 15px;
`
export const ProjectsInfo = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 500;
  margin-left: 20px;
`

export const LoaderContainer = styled.div`
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`
export const FailureContainer = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: 15px;
`
export const FailureImage = styled.img`
  height: 300px;
`
export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 40px;
  font-weight: 700;
  color: #475569;
  margin-bottom: 10px;
`
export const FailureDescription = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: #475569;
  margin-bottom: 20px;
`
export const RetryButton = styled.button`
  height: 40px;
  width: 120px;
  background-color: #328af2;
  border: none;
  border-radius: 7px;
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  cursor: pointer;
`
