import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { ServicoInterface } from 'data/@types/ServicoInterface';
import { FormSchemaService } from 'data/services/FormSchemaService';
import {
    CadastroClienteFormDataInterface,
    NovaDiariaFormDataInterface,
} from 'data/@types/FormInterface';

export default function useContratacao() {
    const [step, setStep] = useState(2),
        [hasLogin, setHasLogin] = useState(false),
        breadcrumbItems = ['Detalhes da diária', 'Identificação', 'Pagamento'],
        serviceForm = useForm<NovaDiariaFormDataInterface>({
            resolver: yupResolver(
                FormSchemaService.address().concat(
                    FormSchemaService.detalhesServico()
                )
            ),
        }),
        clientForm = useForm<CadastroClienteFormDataInterface>({
            resolver: yupResolver(
                FormSchemaService.userData().concat(
                    FormSchemaService.newContact()
                )
            ),
        }),
        servicos: ServicoInterface[] = [
            {
                id: 5,
                nome: 'Limpeza Comum',
                icone: 'twf-cleaning-1',
                horas_banheiro: 1,
                horas_cozinha: 1,
                horas_outros: 1,
                horas_quarto: 1,
                horas_quintal: 1,
                horas_sala: 1,
                porcentagem_comissao: 10,
                qtd_horas: 2,
                valor_banheiro: 20,
                valor_cozinha: 20,
                valor_minimo: 33,
                valor_outros: 20,
                valor_quarto: 20,
                valor_quintal: 20,
                valor_sala: 20,
            },
        ];

    function onServiceFormSubmit(data: NovaDiariaFormDataInterface) {
        console.log(data);
    }

    function onClientFormSubmit(data: CadastroClienteFormDataInterface) {
        console.log(data);
    }

    return {
        step,
        setStep,
        breadcrumbItems,
        serviceForm,
        onServiceFormSubmit,
        servicos,
        hasLogin,
        setHasLogin,
        clientForm,
        onClientFormSubmit,
    };
}