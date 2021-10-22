import { Button, Container, Typography } from "@material-ui/core";
import React from "react";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";

import {
    FormElementContainer,
    ProfissionaisPaper,
    ProfissionaisContainer,
} from "./_verificar-profissionais.styled";

const VerificarProfissionais: React.FC = () => {
    return (
        <>
            <SafeEnvironment />
            <PageTitle
                title={"Conheça os profissionais"}
                subtitle={
                    "Preencha seu endereço e veja todos os profissionais da sua localidade"
                }
            />
            <Container sx={{ mb: 10 }}>
                <FormElementContainer>
                    <TextFieldMask
                        mask={"99.999-999"}
                        label={"Digite seu CEP"}
                        fullWidth
                    />
                    <Typography color={"error"}>CEP não encontrado</Typography>
                    <Button
                        variant={"contained"}
                        color={"secondary"}
                        sx={{ width: "220px" }}
                    >
                        Buscar
                    </Button>
                </FormElementContainer>

                <ProfissionaisPaper>
                    <ProfissionaisContainer>
                        <UserInformation
                            name={"Luis Carlos"}
                            picture={"https://github.com/luiscns-alt.png"}
                            rating={3}
                            description={"Santarem"}
                        />
                        <UserInformation
                            name={"Luis Carlos"}
                            picture={"https://github.com/luiscns-alt.png"}
                            rating={5}
                            description={"Santarem"}
                        />
                        <UserInformation
                            name={"Luis Carlos"}
                            picture={"https://github.com/luiscns-alt.png"}
                            rating={4}
                            description={"Santarem"}
                        />
                    </ProfissionaisContainer>
                    <Container sx={{textAlign: "center"}}>
                        <Typography
                            variant={"body2"}
                            color={"textSecondary"}
                            sx={{ mt: 5 }}
                        >
                            ...e mais 40 profissionais atendem ao seu redor
                        </Typography>
                        <Button
                            variant={"contained"}
                            color={"secondary"}
                            sx={{ mt: 5 }}
                        >
                            Contratar um(a) Profissional
                        </Button>
                    </Container>
                </ProfissionaisPaper>
            </Container>
        </>
    );
};

export default VerificarProfissionais;
