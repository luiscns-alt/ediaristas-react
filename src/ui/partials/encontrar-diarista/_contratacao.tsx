import React from 'react';
import { Paper } from '@material-ui/core';
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

// import { Component } from './_contratacao.styled';

const Contratacao: React.FC = () => {
    const isMobile = useIsMobile(),
        { step, breadcrumbItems, serviceForm, onServiceFormSubmit, servicos } =
            useContratacao();
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

            <UserFormContainer>
                <PageFormContainer fullWidth={step === 4}>
                    <Paper sx={{ p: 4 }}>
                        <FormProvider {...serviceForm}>
                            <form
                                onSubmit={serviceForm.handleSubmit(
                                    onServiceFormSubmit
                                )}
                            >
                                <DetalhesServico servicos={servicos} />
                            </form>
                        </FormProvider>
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
