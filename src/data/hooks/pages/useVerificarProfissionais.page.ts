import { UserShortInformationInterface } from "data/@types/UserInterface";
import { ApiService } from "data/services/ApiService";
import { ValidationService } from "data/services/ValidationService";
import { useState, useMemo } from "react";

export default function useVerificarProfissionais() {
    const [cep, setCep] = useState(""),
        cepValido = useMemo(() => {
            return ValidationService.cep(cep);
        }, [cep]),
        [error, setError] = useState(""),
        [buscaFeita, setBuscaFeita] = useState(false),
        [carregando, setCarrengando] = useState(false),
        [diaristas, setDiaristas] = useState(
            [] as UserShortInformationInterface[]
        ),
        [diaristasRestantes, setDiaristasRestantes] = useState(0);

    async function buscarProfissionais(cep: string) {
        setBuscaFeita(false);
        setCarrengando(true);
        setError("");
        try {
            const { data } = await ApiService.get<{
                diaristas: UserShortInformationInterface[];
                quantidade_diaristas: number;
            }>(`/api/diaristas/localidades?cep=${cep.replace(/\D/g, "")}`);
            setBuscaFeita(true);
            setDiaristas(data.diaristas);
            setDiaristasRestantes(data.quantidade_diaristas);
            setCarrengando(false);
        } catch (error) {
            setError("CEP não encontrado");
            setCarrengando(false);
        }
    }

    return {
        cep,
        setCep,
        cepValido,
        buscarProfissionais,
        error,
        diaristas,
        buscaFeita,
        carregando,
        diaristasRestantes,
    };
}
