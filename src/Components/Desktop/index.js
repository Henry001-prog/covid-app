import React, { useState,useEffect } from 'react';
import { Div, DivLoading, Container, DivRow } from './styles';

import { CardDesktop } from '../../Components/CardDesktop/styles';

import Title from '../../Components/Title';
import Text from '../../Components/Text';
import SubText from '../../Components/SubText';
import Loader from "react-loader-spinner";

import api from '../../services/api';

export default function Desktop() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    //console.log('dados:', data)
    
    useEffect(() =>{
        async function loadData() {
            try {
                const response = await api.get(`/summary`);
                //console.log('dados:', response.data.Countries);
                const countries = response.data.Countries;
                console.log('dados2:', countries);
                setData(countries);
                setLoading(false);
            } catch(error) {
                alert("Não foi possível carregar os dados!");
                setLoading(false);
                return;
            }
        }
        loadData();
    }, []);

    return(
        <Div>
            <Title title='Dados sobre o número de casos de coronavírus no mundo' />

            { loading ?
                <DivLoading>
                    <Loader
                        type="Oval"
                        color="#00BFFF"
                        height={100}
                        width={100}
                    />
                </DivLoading>
                :
                <Container>
                    
                    <CardDesktop style={{backgroundColor: '#e38826'}}>
                        
                        <DivRow>
                            <SubText title='País:' />
                            <Text title={data[23].Country} />
                        </DivRow>
                        <DivRow>
                            <SubText title='Novos Confirmados:' />
                            <Text title={data[23].NewConfirmed} />
                        </DivRow>
                        <DivRow>
                            <SubText title='Total Confirmado:' />
                            <Text title={data[23].TotalConfirmed} />
                        </DivRow>
                        <DivRow>
                            <SubText title='Novas Mortes:' />
                            <Text title={data[23].NewDeaths} />
                        </DivRow>
                        <DivRow>
                            <SubText title='Total de Mortes:' />
                            <Text title={data[23].TotalDeaths} />
                        </DivRow>
                        <DivRow>
                            <SubText title='Novos Recuperados:' />
                            <Text title={data[23].NewRecovered} />
                        </DivRow>
                        <DivRow>
                            <SubText title='Total de Recuperados:' />
                            <Text title={data[23].TotalRecovered} />
                        </DivRow>
                    </CardDesktop>

                    <CardDesktop style={{backgroundColor: '#006970'}}>
                        <DivRow>
                            <SubText title='País:' />
                            <Text title={data[30].Country} />
                        </DivRow>
                        <DivRow>
                            <SubText title='Novos Confirmados:' />
                            <Text title={data[30].NewConfirmed} />
                        </DivRow>
                        <DivRow>
                            <SubText title='Total Confirmado:' />
                            <Text title={data[30].TotalConfirmed} />
                        </DivRow>
                        <DivRow>
                            <SubText title='Novas Mortes:' />
                            <Text title={data[30].NewDeaths} />
                        </DivRow>
                        <DivRow>
                            <SubText title='Total de Mortes:' />
                            <Text title={data[30].TotalDeaths} />
                        </DivRow>
                        <DivRow>
                            <SubText title='Novos Recuperados:' />
                            <Text title={data[30].NewRecovered} />
                        </DivRow>
                        <DivRow>
                            <SubText title='Total de Recuperados:' />
                            <Text title={data[30].TotalRecovered} />
                        </DivRow>
                    </CardDesktop>

                    <CardDesktop style={{backgroundColor: '#576719'}}>
                        <DivRow>
                            <SubText title='País:' />
                            <Text title={data[35].Country} />
                        </DivRow>
                        <DivRow>
                            <SubText title='Novos Confirmados:' />
                            <Text title={data[35].NewConfirmed} />
                        </DivRow>
                        <DivRow>
                            <SubText title='Total Confirmado:' />
                            <Text title={data[35].TotalConfirmed} />
                        </DivRow>
                        <DivRow>
                            <SubText title='Novas Mortes:' />
                            <Text title={data[35].NewDeaths} />
                        </DivRow>
                        <DivRow>
                            <SubText title='Total de Mortes:' />
                            <Text title={data[35].TotalDeaths} />
                        </DivRow>
                        <DivRow>
                            <SubText title='Novos Recuperados:' />
                            <Text title={data[35].NewRecovered} />
                        </DivRow>
                        <DivRow>
                            <SubText title='Total de Recuperados:' />
                            <Text title={data[35].TotalRecovered} />
                        </DivRow>
                    </CardDesktop>

                    <CardDesktop style={{backgroundColor: '#484d32'}}>
                        <DivRow>
                            <SubText title='País:' />
                            <Text title={data[59].Country} />
                        </DivRow>
                        <DivRow>
                            <SubText title='Novos Confirmados:' />
                            <Text title={data[59].NewConfirmed} />
                        </DivRow>
                        <DivRow>
                            <SubText title='Total Confirmado:' />
                            <Text title={data[59].TotalConfirmed} />
                        </DivRow>
                        <DivRow>
                            <SubText title='Novas Mortes:' />
                            <Text title={data[59].NewDeaths} />
                        </DivRow>
                        <DivRow>
                            <SubText title='Total de Mortes:' />
                            <Text title={data[59].TotalDeaths} />
                        </DivRow>
                        <DivRow>
                            <SubText title='Novos Recuperados:' />
                            <Text title={data[59].NewRecovered} />
                        </DivRow>
                        <DivRow>
                            <SubText title='Total de Recuperados:' />
                            <Text title={data[59].TotalRecovered} />
                        </DivRow>
                    </CardDesktop>

                    <CardDesktop style={{backgroundColor: '#3b4d32'}}>
                        <DivRow>
                            <SubText title='País:' />
                            <Text title={data[63].Country} />
                        </DivRow>
                        <DivRow>
                            <SubText title='Novos Confirmados:' />
                            <Text title={data[63].NewConfirmed} />
                        </DivRow>
                        <DivRow>
                            <SubText title='Total Confirmado:' />
                            <Text title={data[63].TotalConfirmed} />
                        </DivRow>
                        <DivRow>
                            <SubText title='Novas Mortes:' />
                            <Text title={data[63].NewDeaths} />
                        </DivRow>
                        <DivRow>
                            <SubText title='Total de Mortes:' />
                            <Text title={data[63].TotalDeaths} />
                        </DivRow>
                        <DivRow>
                            <SubText title='Novos Recuperados:' />
                            <Text title={data[63].NewRecovered} />
                        </DivRow>
                        <DivRow>
                            <SubText title='Total de Recuperados:' />
                            <Text title={data[63].TotalRecovered} />
                        </DivRow>
                    </CardDesktop>

                    <CardDesktop style={{backgroundColor: '#50472f'}}>
                        <DivRow>
                            <SubText title='País:' />
                            <Text title={data[76].Country} />
                        </DivRow>
                        <DivRow>
                            <SubText title='Novos Confirmados:' />
                            <Text title={data[76].NewConfirmed} />
                        </DivRow>
                        <DivRow>
                            <SubText title='Total Confirmado:' />
                            <Text title={data[76].TotalConfirmed} />
                        </DivRow>
                        <DivRow>
                            <SubText title='Novas Mortes:' />
                            <Text title={data[76].NewDeaths} />
                        </DivRow>
                        <DivRow>
                            <SubText title='Total de Mortes:' />
                            <Text title={data[76].TotalDeaths} />
                        </DivRow>
                        <DivRow>
                            <SubText title='Novos Recuperados:' />
                            <Text title={data[76].NewRecovered} />
                        </DivRow>
                        <DivRow>
                            <SubText title='Total de Recuperados:' />
                            <Text title={data[76].TotalRecovered} />
                        </DivRow>
                    </CardDesktop>

                    <CardDesktop style={{backgroundColor: '#422f50'}}>
                        <DivRow>
                            <SubText title='País:' />
                            <Text title={data[180].Country} />
                        </DivRow>
                        <DivRow>
                            <SubText title='Novos Confirmados:' />
                            <Text title={data[180].NewConfirmed} />
                        </DivRow>
                        <DivRow>
                            <SubText title='Total Confirmado:' />
                            <Text title={data[180].TotalConfirmed} />
                        </DivRow>
                        <DivRow>
                            <SubText title='Novas Mortes:' />
                            <Text title={data[180].NewDeaths} />
                        </DivRow>
                        <DivRow>
                            <SubText title='Total de Mortes:' />
                            <Text title={data[180].TotalDeaths} />
                        </DivRow>
                        <DivRow>
                            <SubText title='Novos Recuperados:' />
                            <Text title={data[180].NewRecovered} />
                        </DivRow>
                        <DivRow>
                            <SubText title='Total de Recuperados:' />
                            <Text title={data[180].TotalRecovered} />
                        </DivRow>
                    </CardDesktop>

                    <CardDesktop style={{backgroundColor: '#658d9a'}}>
                        <DivRow>
                            <SubText title='País:' />
                            <Text title={data[181].Country} />
                        </DivRow>
                        <DivRow>
                            <SubText title='Novos Confirmados:' />
                            <Text title={data[181].NewConfirmed} />
                        </DivRow>
                        <DivRow>
                            <SubText title='Total Confirmado:' />
                            <Text title={data[181].TotalConfirmed} />
                        </DivRow>
                        <DivRow>
                            <SubText title='Novas Mortes:' />
                            <Text title={data[181].NewDeaths} />
                        </DivRow>
                        <DivRow>
                            <SubText title='Total de Mortes:' />
                            <Text title={data[181].TotalDeaths} />
                        </DivRow>
                        <DivRow>
                            <SubText title='Novos Recuperados:' />
                            <Text title={data[181].NewRecovered} />
                        </DivRow>
                        <DivRow style={{marginRight: 20}}>
                            <SubText title='Total de Recuperados:' />
                            <Text title={data[181].TotalRecovered} />
                        </DivRow>
                    </CardDesktop>

                </Container>
            }
        </Div>  
    );
}