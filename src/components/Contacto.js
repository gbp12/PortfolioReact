import {ImgContact, DivContact, P2 } from "./Styles"
import { useState} from "react";
import styled from "styled-components";
import 'animate.css';


var mail = "Mail me at gonzalobonilla2709@gmail.com"
var discord = "Message me in discord: Gonsalo#9106"
var tlf = "Message me at 609 95 36 87"

const Div = styled.div`
    position: absolute;
left: 0;
right: 0;
margin: auto;

`


const Contacto = () => {
    const [valor, setValor] = useState("")
    console.log(valor)
    
    const Aparition = (tipo) => {
        if (valor === tipo) {
            setValor("")
        } else {
            switch (tipo) {
                case mail:
                    setValor(mail)
                    break;
            
                case discord:
                    setValor(discord)
                    break;

                case tlf:
                    setValor(tlf)
                    break;
            }
        }
    
    }

    

    return (
        
        
        <div>
            
            <P2>
                You can contact me by:
            </P2>
            
            <DivContact>


                <ImgContact src="/images/gmail logo.png" onClick={() => {Aparition(mail)}}/> 

                <ImgContact src="/images/discord logo.png" onClick={() => {Aparition(discord)}} />
                
            </DivContact>
            <P2>
                Ó
            </P2>
            <DivContact>
                
                <a target="blank"  href="https://github.com/gbp12"><ImgContact src="/images/github logo.png"  /> </a>
                <ImgContact src="/images/mobile logo.png" onClick={() => {Aparition(tlf)}} /> 
                

            </DivContact>

            <Div>
                <P2 className="animate__animated animate__fadeInDown animate__delay-1s">
                    {valor}
                </P2>
            </Div>


            
        </div>
       
    )
}

export default Contacto
