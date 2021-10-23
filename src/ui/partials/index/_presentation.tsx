import { useEffect, useState } from "react";
import {
    SectionContainer,
    ContainerStyled,
    SectionTitle,
    SectionButton,
    SectionDescription,
    SectionPictureContainer,
    BottomButton,
} from "./_presentation.styled";

const Presentation = () => {
    const [cleanerPicture, setCleanerPicutre] = useState("");
    useEffect(() => {
        const newCleanerPicture =
            Math.random() < 0.5
                ? "/img/home/housekeeper.png"
                : "/img/home/janitor.png";
        setCleanerPicutre(newCleanerPicture);
    }, []);
    return (
        <div>
            <SectionContainer>
                <ContainerStyled>
                    <SectionTitle>
                        Encontre agora mesmo um(a) <em>diarista</em>
                        <i className={"twf-search"} />
                    </SectionTitle>
                    <SectionDescription>
                        São mais de 5.000 profissionais esperando por voçê!
                    </SectionDescription>
                    <SectionButton
                        mui={{ variant: "contained" }}
                        href={"/encontrar-diarista"}
                    >
                        Encontrar um(a) diarista
                    </SectionButton>
                    <SectionPictureContainer>
                        <img src={cleanerPicture} />
                    </SectionPictureContainer>
                </ContainerStyled>
                <BottomButton>
                    <i className={"twf-caret-down"} />
                </BottomButton>
            </SectionContainer>
        </div>
    );
};

export default Presentation;
