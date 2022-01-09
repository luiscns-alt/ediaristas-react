import { Button, Container, Divider, Typography } from '@material-ui/core';
import React from 'react';
import {
    LoginForm,
    NewContactForm,
    PictureForm,
    UserDataForm,
} from 'ui/components/inputs/UserForm/UserForm';
import { LoginButtonContainer } from './_cadastro-cliente.styled';

// import { Component } from './_cadastro-cliente.styled';

export const CadastroCliente: React.FC<{ onBack: () => void }> = ({
    onBack,
}) => {
    return (
        <>
            <Typography sx={{ fontWeight: 'bold', pb: 2 }}>
                Dados pessoais
            </Typography>
            <UserDataForm cadastro={true} />
            <Divider sx={{ mb: 5 }} />

            <Typography sx={{ fontWeight: 'bold', pb: 2 }}>
                Dados pessoais
            </Typography>
            <PictureForm />
            <Typography sx={{ pt: 1, pb: 5 }}>
                Essa foto não será vista por ninguém
            </Typography>
            <Divider sx={{ mb: 5 }} />

            <Typography sx={{ fontWeight: 'bold', pb: 2 }}>
                Dados de acesso
            </Typography>
            <NewContactForm />

            <Container
                sx={{ display: 'flex', justifyContent: 'space-between' }}
            >
                <Button
                    variant={'outlined'}
                    color={'primary'}
                    type={'button'}
                    onClick={onBack}
                >
                    Voltar para detalhe da diária
                </Button>
                <Button
                    variant={'contained'}
                    color={'secondary'}
                    type={'submit'}
                >
                    Ir para pagamento
                </Button>
            </Container>
        </>
    );
};

export const LoginCliente: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    return (
        <>
            <LoginForm />
            <LoginButtonContainer>
                <Button
                    variant={'outlined'}
                    color={'primary'}
                    type={'button'}
                    onClick={onBack}
                >
                    Voltar para detalhe da diária
                </Button>
                <Button
                    variant={'contained'}
                    color={'secondary'}
                    type={'submit'}
                >
                    Ir para pagamento
                </Button>
            </LoginButtonContainer>
        </>
    );
};

export default CadastroCliente;
