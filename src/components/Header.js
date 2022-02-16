import styled from "styled-components"
import { Route, Link,  Routes } from "react-router-dom"
import Contacto from "./Contacto.js"
import { Main } from './Main';
//import { NotFound } from "./NotFound.js";
import { StyledHeader, DivCentrado, H3, TopHeader } from "./Styles.js";

const StyledLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    padding: 5px 10px 5px 10px;
    :hover {
    background-color:#fff;
    color: #231f2d;
}
    
`

export const Header = () => {
    return (
    <div>

        <TopHeader />
        <StyledHeader>
            

            <H3>
                Gonzalo Bonilla
            </H3>

            <H3>
                <StyledLink to={"/PortfolioReact/"}>
                    My landing page
                </StyledLink>
            </H3>

            <H3>

                <StyledLink to={"/contacto"}>
                    Contact Me
                </StyledLink>

            </H3>
        </StyledHeader>

        <DivCentrado>
                <Routes>
                    <Route  path="*" element={<Main />} />  
                    <Route  exact path="/contacto" element={<Contacto />}  />
                    
                </Routes>
        </DivCentrado>

       


    </div>
        
    )
}

export default Header