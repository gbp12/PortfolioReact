import styled from "styled-components"
import { Route, Link,  Routes } from "react-router-dom"
import Contacto from "./Contacto.js"
import { Main } from './Main';
import { NotFound } from "./NotFound.js";


const StyledHeader = styled.header`
    background-color: black;
    display: flex;
    justify-content: space-between;
    `

const P = styled.p`
    color: #fff;
    margin-top: auto;
    padding: 20px 30px 10px 30px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

`
const StyledLink = styled(Link)`
    color: #fff;
`



export const DivCentrado = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`





export const Header = () => {
    return (
    <div>
        <StyledHeader>

            <P>
                GB
            </P>

            <P>
                <StyledLink to={"/"}>
                    Mi landing page
                </StyledLink>
            </P>

            <P>

                <StyledLink to={"/formulario"}>
                    Deja tu contacto
                </StyledLink>

            </P>
        </StyledHeader>

        <DivCentrado>
        <Routes>
            <Route exact path="/" element={<Main />} />
            <Route  exact path="/formulario" element={<Contacto />}  />
            <Route  path="*" element={<NotFound />} />
        </Routes>
        </DivCentrado>

       


    </div>
        
    )
}

export default Header