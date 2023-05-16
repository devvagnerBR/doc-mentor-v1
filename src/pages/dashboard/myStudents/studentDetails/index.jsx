import React from 'react'
import { PencilSimpleLine,Trash } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import transformInSlug from '../../../../util/transformInSlug'

const student = {
    id: 1,nome: 'Wagner Luiz da Silva Guimarães',idade: 28,escola: { nome: 'Maria Teixeira de Paula',turma: 'Pré-1B',turno: 'Manhã',ano: 2023 },deficiencia: 'TDAH',dias_de_atendimento: 'quinta',ultimo_relatorio: '09/05/2023',status: 'ativo',relatorios: [{
        id: 1,titulo: '1 Bimestre',content: `Gostaria de compartilhar com você o relatório de acompanhamento do desenvolvimento da criança especial, [Nome da Criança], durante o período de observação. Durante esse tempo, tive a oportunidade de interagir com a criança em diversas atividades e ambientes, e gostaria de fornecer uma visão geral do seu progresso.

Desenvolvimento Físico:
Durante as sessões de terapia e atividades motoras, observei melhorias significativas no desenvolvimento físico de [Nome da Criança]. A criança tem mostrado um aumento da força muscular e coordenação motora, conseguindo executar tarefas como segurar objetos, engatinhar e até mesmo dar alguns passos com apoio. Esses avanços são encorajadores e demonstram um bom progresso no desenvolvimento físico.

Desenvolvimento Cognitivo:
No aspecto cognitivo, [Nome da Criança] tem demonstrado um interesse crescente em explorar o ambiente ao seu redor. Durante as atividades de estimulação cognitiva, notei que a criança está desenvolvendo habilidades de resolução de problemas e compreensão de conceitos básicos, como cores e formas. Além disso, [Nome da Criança] está começando a mostrar uma melhor capacidade de concentração e atenção durante as atividades.

Desenvolvimento Social e Emocional:
A interação social tem sido uma área de foco durante o período de observação. [Nome da Criança] está progredindo positivamente em relação à interação com os colegas e demonstra interesse em se comunicar e compartilhar experiências com os outros. Embora às vezes a criança possa apresentar desafios na expressão das emoções, temos trabalhado para fortalecer as habilidades de comunicação e expressão emocional de forma adequada.`,data: '15/04/2023' },{ id: 2,titulo: '2 Bimestre',data: '22/3/2023' }]
}



const StudentDetails = () => {


    return (
        <div className='w-full h-full flex flex-col'>
            <header className='w-full flex h-25 justify-start items-start p-3 shrink-0 flex-col'>
                <div className='flex items-end justify-center gap-2'>
                    <h1 className='text-2xl font-Saira font-medium'>{student.nome}</h1>
                    <h1 className=' font-Saira underline  text-amber-400 cursor-pointer'>editar aluno</h1>
                </div>

                <div className='flex gap-3'>
                    <h2 className='text-neutral-500'>Escola: <span className='text-neutral-700'>{student.escola.nome}</span></h2>
                    <h2 className='text-neutral-500'>Turma: <span className='text-neutral-700'>{student.escola.turma}</span></h2>
                    <h2 className='text-neutral-500'>Turno: <span className='text-neutral-700'>{student.escola.turno}</span></h2>
                    <h2 className='text-neutral-500'>Ano letivo: <span className='text-neutral-700'>{student.escola.ano}</span></h2>
                </div>
                <h2 className='text-neutral-500'>Idade: <span className='text-neutral-700'>{student.idade} anos</span></h2>
            </header>

            <section className='w-full h-full flex flex-col '>
                <header className='w-full flex h-25 justify-start items-start p-3 shrink-0 flex-col'>
                    <h1 className='font-medium font-Saira text-xl'>Relatórios:</h1>
                </header>

                <main className='w-full h-full flex justify-start items-start gap-8 px-4'>
                    <div>
                        <p className='text-neutral-300 font-light '>Num</p>
                        {student.relatorios.map( ( relatorio,index ) => {
                            return <p key={relatorio.id}>{index + 1} </p>
                        } )}
                    </div>
                    <div>
                        <p className='text-neutral-300 font-light '>Título</p>
                        {student.relatorios.map( ( relatorio,index ) => {
                            return <Link to={transformInSlug( relatorio.titulo )} className='underline cursor-pointer flex' key={relatorio.id}>{relatorio.titulo} </Link>
                        } )}
                    </div>
                    <div>
                        <p className='text-neutral-300 font-light '>Data</p>
                        {student.relatorios.map( ( relatorio,index ) => {
                            return <div key={relatorio.id} className='flex items-center gap-2'>
                                <p >{relatorio.data} </p>
                                <PencilSimpleLine className='cursor-pointer' />
                                <Trash className='cursor-pointer' />
                            </div>
                        } )}
                    </div>
                </main>
            </section>
        </div>
    )
}

export default StudentDetails