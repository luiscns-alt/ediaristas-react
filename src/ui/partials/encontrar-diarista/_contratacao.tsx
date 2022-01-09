import React from 'react';
import { Button, Paper, Typography } from '@material-ui/core';
import { FormProvider } from 'react-hook-form';

import useIsMobile from 'data/hooks/uselsMobile';
import useContratacao from 'data/hooks/pages/useContratacao.page';
import Breadcrumb from 'ui/components/navigation/Breadcrumb/Breadcrumb';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import SideInformation from 'ui/components/data-display/SideInformation/SideInformation';

import { UserFormContainer } from 'ui/components/inputs/UserForm/UserForm';
import { PageFormContainer } from 'ui/components/inputs/UserForm/UserForm.style';
import DetalhesServico from './_detalhes-servico';
import CadastroCliente, { LoginCliente } from './_cadastro-cliente';
import InformacoesPagamento from './_informacoes-pagamento';

// import { Component } from './_contratacao.styled';

const Contratacao: React.FC = () => {
    const isMobile = useIsMobile(),
        {
            step,
            setStep,
            breadcrumbItems,
            serviceForm,
            clientForm,
            loginForm,
            paymentForm,
            onServiceFormSubmit,
            onClientFormSubmit,
            onLoginFormSubmit,
            onPaymentFormSubmit,
            servicos,
            hasLogin,
            setHasLogin,
            loginError,
        } = useContratacao();
    return (
        <div>
            {!isMobile && <SafeEnvironment />}
            <Breadcrumb
                selected={breadcrumbItems[step - 1]}
                items={breadcrumbItems}
            />
            {step === 1 && (
                <PageTitle title={'Nos conte um pouco sobre o serviço!'} />
            )}

            {step === 2 && (
                <PageTitle
                    title={'Precisamos conhecer um pouco sobre você!'}
                    subtitle={
                        !hasLogin ? (
                            <span>
                                Caso já tenha cadastro,{' '}
                                <Button onClick={() => setHasLogin(true)}>
                                    clique aqui
                                </Button>
                            </span>
                        ) : (
                            <span>
                                Caso não tenha cadastro,{' '}
                                <Button onClick={() => setHasLogin(false)}>
                                    clique aqui
                                </Button>
                            </span>
                        )
                    }
                />
            )}

            <UserFormContainer>
                <PageFormContainer fullWidth={step === 4}>
                    <Paper sx={{ p: 4 }}>
                        <FormProvider {...serviceForm}>
                            <form
                                onSubmit={serviceForm.handleSubmit(
                                    onServiceFormSubmit
                                )}
                                hidden={step !== 1}
                            >
                                <DetalhesServico servicos={servicos} />
                            </form>
                        </FormProvider>

                        {step === 2 && hasLogin && (
                            <FormProvider {...loginForm}>
                                <form
                                    onSubmit={clientForm.handleSubmit(
                                        onLoginFormSubmit
                                    )}
                                >
                                    <Typography
                                        color={'error'}
                                        align={'center'}
                                        sx={{ mb: 2 }}
                                    >
                                        {loginError}
                                    </Typography>
                                    <LoginCliente onBack={() => setStep(1)} />
                                </form>
                            </FormProvider>
                        )}

                        <FormProvider {...clientForm}>
                            <form
                                onSubmit={clientForm.handleSubmit(
                                    onClientFormSubmit
                                )}
                                hidden={step !== 2 || hasLogin}
                            >
                                <CadastroCliente onBack={() => setStep(1)} />
                            </form>
                        </FormProvider>

                        {step === 3 && (
                            <FormProvider {...paymentForm}>
                                <form
                                    onSubmit={paymentForm.handleSubmit(
                                        onPaymentFormSubmit
                                    )}
                                >
                                    <InformacoesPagamento />
                                </form>
                            </FormProvider>
                        )}
                    </Paper>

                    <SideInformation
                        title={'Detalhes'}
                        items={[
                            {
                                title: 'Tipo',
                                description: [''],
                                icon: 'twf-check-circle',
                            },
                            {
                                title: 'Tamanho',
                                description: [''],
                                icon: 'twf-check-circle',
                            },
                            {
                                title: 'Data',
                                description: [''],
                                icon: 'twf-check-circle',
                            },
                        ]}
                        footer={{
                            text: 'R$80,00',
                            icon: 'twf-credit-card',
                        }}
                    />
                </PageFormContainer>
            </UserFormContainer>
        </div>
    );
};

export default Contratacao;
