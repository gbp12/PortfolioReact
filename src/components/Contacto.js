import {ImgContact, DivContact, P2 } from "./Styles"

const Contacto = () => {
    return (
        <div>
            <P2>
                You can contact me by:
            </P2>

            <DivContact>
                <ImgContact src="/images/gmail logo.png" onClick={() => {alert("gmail")}} /> 
                <ImgContact src="/images/discord logo.png" onClick={() => {console.log("click")}} /> 
            </DivContact>
            <P2>
                Ó
            </P2>
            <DivContact>
                <ImgContact src="/images/github logo.png" onClick={() => {console.log("click")}} /> 
                <ImgContact src="/images/mobile logo.png" onClick={() => {console.log("click")}} /> 
            </DivContact>

        </div>
    )
}

export default Contacto
