import React from 'react'
import '../styles/BoxeadorProfile.css'


export const BoxeadorProfile = () => {

    const dato = {
        divicion: 'Peso Mosca',
        estado: '',
        combates: 58,
        rounds: null,
        kos: undefined,
        carrera: '',
        debut: '',
        id: '',
        name: '',
        sex: 'Masculino',
        nacionalidad: '',
    };

    const boxeadorInfo = [
        { label: 'Divición', value: dato.divicion },
        { label: 'Estado', value: dato.estado },
        { label: 'Combates', value: dato.combates },
        { label: 'Rounds', value: dato.rounds },
        { label: 'KOs', value: dato.kos },
        { label: 'carrera', value: dato.carrera },
        { label: 'debut', value: dato.debut },
        { label: '#ID', value: dato.id },
        { label: 'Nombre', value: dato.name },
        { label: 'Sexo', value: dato.sex },
        { label: 'Nacionalidad', value: dato.naciolalidad },
        { label: 'Posición', value: dato.Posicion },
        { label: 'Altura', value: dato.Altura },
        { label: 'Alcanzar', value: dato.Alcanzar },
        { label: 'Residencia', value: dato.Residencia },
        { label: 'Nacimiento', value: dato.Nacimiento },
    ]

    return (
        <>
            <section className='pages'>

                <div className='BoxeadorProfile'>

                    <div className='name'>

                    <h1>Carlos Gabriel Salazar</h1>

                    </div>

                    <div className='BoxeadorGene'>


                        <table className='InfoRapi'>

                            <thead className='thead-v-d-e'>
                                <tr>
                                    <td>Vistorias</td>
                                    <td>Derrotas</td>
                                    <td>Empates</td>
                                </tr>
                            </thead>

                            <tbody className='tbody-v-b-e'>
                                <tr>
                                    <td>48</td>
                                    <td>8</td>
                                    <td>3</td>
                                </tr>
                            </tbody>

                            <tfoot className='tfoot-KOs'>
                                <tr>
                                    <td>18 KOs</td>
                                    <td>1 KOs</td>
                                    <td> </td>
                                </tr>
                            </tfoot>

                        </table>

                        <article className='Art'>

                            <img src="/Carlos_Gabriel_Salazar.webp" alt="" />

                            {/* <button>Box-pro</button>
                            <button>box-am</button>
                            <button>All Bouts</button> */}

                        </article>

                    </div>

                    <div className="infoBoxeador">

                        <article className='info'>
                            <h1>Informacion</h1>
                        </article>

                        <div className='datoGenerales'>
                            {boxeadorInfo.map((info, index) => (

                                <div className='boder' key={index}>
                                    <p>
                                        {info.label}: <span>{info.value || 'Proximamente'}</span>
                                    </p>
                                </div>

                            ))}
                        </div>


                    </div>

                </div>

                <div className='BoxeadorTable'>

                    <table>

                        <thead>
                            <tr>
                                <td>Datos</td>
                                <td>Kilos</td>
                                <td>Oponentes</td>
                                <td>Kilos</td>
                                <td>W-L-D</td>
                                <td>Last 6</td>
                                <td>Lugar</td>
                                <td>Resultados</td>
                                <td>Rounds</td>
                                <td>Informacion</td>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>

                                {/* Aqui deberia estar la informacion sobre todas la peleas y si segenerara dinamicamente  */}
                            </tr>
                            
                        </tbody>

                    </table>
                </div>

            </section>
        </>
    )
}
