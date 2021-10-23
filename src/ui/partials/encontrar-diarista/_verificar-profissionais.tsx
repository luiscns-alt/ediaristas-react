import {
    Button,
    Container,
    Typography,
    CircularProgress,
} from "@material-ui/core";
import useVerificarProfissionais from "data/hooks/pages/useVerificarProfissionais.page";
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
    const {
        cep,
        setCep,
        cepValido,
        buscarProfissionais,
        error,
        diaristas,
        buscaFeita,
        carregando,
        diaristasRestantes,
    } = useVerificarProfissionais();
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
                        value={cep}
                        onChange={(event) => setCep(event.target.value)}
                    />
                    {error && <Typography color={"error"}>{error}</Typography>}
                    <Button
                        variant={"contained"}
                        color={"secondary"}
                        sx={{ width: "220px" }}
                        disabled={!cepValido || carregando}
                        onClick={() => buscarProfissionais(cep)}
                    >
                        {carregando ? <CircularProgress size={20} /> : "Buscar"}
                    </Button>
                </FormElementContainer>

                {buscaFeita &&
                    (diaristas.length > 0 ? (
                        <ProfissionaisPaper>
                            <ProfissionaisContainer>
                                {diaristas.map((item, index) => (
                                    <UserInformation
                                        key={index}
                                        name={item.nome_completo}
                                        picture={item.foto_usuario || ""}
                                        rating={item.reputacao || 0}
                                        description={item.cidade}
                                    />
                                ))}
                            </ProfissionaisContainer>
                            <Container sx={{ textAlign: "center" }}>
                                {diaristasRestantes > 0 && (
                                    <Typography
                                        variant={"body2"}
                                        color={"textSecondary"}
                                        sx={{ mt: 5 }}
                                    >
                                        ...e mais {diaristasRestantes}{" "}
                                        {diaristasRestantes > 1
                                            ? "profissionais atendem"
                                            : "profissional atende"}{" "}
                                        ao seu endereço.
                                    </Typography>
                                )}
                                <Button
                                    variant={"contained"}
                                    color={"secondary"}
                                    sx={{ mt: 5 }}
                                >
                                    Contratar um(a) Profissional
                                </Button>
                            </Container>
                        </ProfissionaisPaper>
                    ) : (
                        <Typography align={"center"} color={"textPrimary"}>
                            Ainda não temos nenhuma(a) diarista disponível em
                            sua região.
                        </Typography>
                    ))}
            </Container>
        </>
    );
};

export default VerificarProfissionais;
