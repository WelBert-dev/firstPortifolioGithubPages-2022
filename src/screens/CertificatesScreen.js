import React, { useEffect, useState } from 'react';

import { BsFillFolderSymlinkFill } from 'react-icons/bs';

import portariaNormativaCeicP01 from '../resources/portariaNormativaCeic-parte01.png';
import portariaNormativaCeicP02 from '../resources/portariaNormativaCeic-parte02.png';

import bolsaEnsinoAmostra from '../resources/amostraBolsaEnsino.png';
import bolsaEnsinoP02Amostra from '../resources/bolsaEnsinoP02.png';
import bolsaEnsinoP03Amostra from '../resources/bolsaEnsinoP03.png';
import bolsaEnsinoRelatorioP01 from '../resources/relatorioMensal01-parte01.png';
import bolsaEnsinoRelatorioP01P02 from '../resources/relatorioMensal01-parte02.png';
import bolsaEnsinoRelatorioP02P01 from '../resources/relatorioMensal02-parte01.png';
import bolsaEnsinoRelatorioP02P03 from '../resources/relatorioMensal02-parte03.png';
import bolsaEnsinoRelatorioP03P01 from '../resources/relatorioMensal03-parte01.png';
import bolsaEnsinoRelatorioP03P02 from '../resources/relatorioMensal03-parte02.png';

import ciscoModule01Amostra from '../resources/ciscoModule01Amostra.png';
import ciscoModule02Amostra from '../resources/ciscoModule02Amostra.png';

import cursoEmVideoPython3Mundo01 from '../resources/Python3Mundo1-40-Horas-Certificado-Curso-em-Video.png';

import workshopTvBoxFlisol from '../resources/flisolTVBox.png';
import workshopLinguagemC from '../resources/flisolLinguagemC.png';

import workshopAutomacaoIndustrialP01 from '../resources/workshopAutomacaoIndustrial-IFCiencia.png';
import workshopAutomacaoIndustrialP02 from '../resources/workshopAutomacaoIndustrial-IFCiencia-parte02.png';

import workshopNodeRed from '../resources/nodeRed-IoT-ifciencia2021-28-10-2021.png';
import relatorioNodeRedP01 from '../resources/relatorioNodeRed2021-parte01.png';
import relatorioNodeRedP02 from '../resources/relatorioNodeRed2021-parte02.png';
import relatorioNodeRedP03 from '../resources/relatorioNodeRed2021-parte03.png';
import relatorioNodeRedP04 from '../resources/relatorioNodeRed2021-parte04.png';

import workshopBolsaValores from '../resources/bolsaDeValores-ifciencia2021-29-10-2021.png';

import './CertificatesScreen.css';

export default function CertificatesScreen() {

    const [flagCeicBug, setFlagCeicBug] = useState(false);
    const [flagCursoEmVideoBug, setFlagCursoEmVideoBug] = useState(false);

    useEffect(()=>{
        if (window.screen.width >= 810) {
            // seta o scroll da CEIC
            const ceicImageContainer = document.getElementById("ceicInitScroll");
            Number(ceicImageContainer.scrollTop) == Number(0) ? ceicImageContainer.scrollTop = Number(170.285720825195)
            : console.log("Bugou o scroll inicial da CEIC ;-;", ceicImageContainer.scrollTop);
            console.log("Executou", ceicImageContainer.scrollTop.toString());
            if(ceicImageContainer.scrollTop.toString() === '0'){
                ceicImageContainer.scrollTop = Number(170.285720825195);
                setFlagCeicBug(true);
            }

            // seta o scroll do curso em video
            const cursoEmVideoImageContainer = document.getElementById("cursoEmVideoInitScroll");
            Number(cursoEmVideoImageContainer.scrollTop) == Number(0) ? cursoEmVideoImageContainer.scrollTop = Number(130.285720825195)
            : console.log("Bugou o scroll inicial do Curso Em Video ;-;", cursoEmVideoImageContainer.scrollTop);
            console.log("Executou", cursoEmVideoImageContainer.scrollTop.toString());
            if(cursoEmVideoImageContainer.scrollTop.toString() === '0'){
                cursoEmVideoImageContainer.scrollTop = Number(130.285720825195);
                setFlagCursoEmVideoBug(true);
            }
        }
    }, [flagCeicBug, flagCursoEmVideoBug])

    return (
        <section id="main-certificate--container">
            <div>
                <h1 className="main-title">&lsaquo;Certificados&rsaquo;</h1>
                <div>
                <article className="certificate-single -bolsaEnsinoCertficate">
                        <div>
                            <div className="projects-title--container -certificateTitleContainer">
                                <div>
                                    <h3 className="projects-title">IFSP CEIC - Aluno representante do curso</h3>
                                    <a href="https://nextcloud.slt.ifsp.edu.br/nextcloud/index.php/s/wDJb7kHZbEYywtP?dir=undefined&openfile=1471" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                                </div>
                                <span>Portaria Normativa SLT n??0045/IFSP (18/05/2022)</span>
                                <p>Documento oficial clicando no bot??o a cima</p>
                            </div>
                            <div id="ceicInitScroll" className="bolsaEnsinoImageWrapper">
                                <img src={portariaNormativaCeicP01}></img>
                                <img src={portariaNormativaCeicP02}></img>
                            </div>
                            <div className="projects-subdescription--container -bolsaEnsinoCertficate">
                                <h3 class="projects-subtitle -certificateSubtitle">Contextualizando</h3>
                                <p>
                                    A CEIC (Comiss??o de Elabora????o e Implementa????o de Projetos Pedag??gicos do Curso T??cnico em Inform??tica) ?? uma comiss??o interna do IFSP 
                                    respons??vel por discutir e definir a grade curricular do curso como um todo dentre outras atribui????es, e para isto ?? necess??rio
                                    a opini??o de um aluno para  ajudar nas tomadas de decis??es. Esse ano foi bem importante pois foi tomada uma importante decis??o e aprovada pelo MEC
                                    aonde a proposta ?? tornar os cursos mais atrativos devido a grande desist??ncia em geral (No meu contexto de inform??tica, iniciaram +40 alunos e apenas 7 conclu??ram).
                                    Portanto a decis??o foi repaginar a grade curricular e diminuir a carga hor??ria do curso para os pr??ximos anos, mudando assim de "T??cnico em inform??tica" para "Inform??tica para a Internet" 
                                    e reduzindo assim de 4 semestres (2 anos) para 3 semestres (1 ano e meio) com in??cio de vig??ncia apartir de 2023.
                                </p>
                            </div>
                        </div>
                    </article>  
                    <hr />
                    <article className="certificate-single -bolsaEnsinoCertficate">
                        <div>
                            <div className="projects-title--container -certificateTitleContainer">
                                <div>
                                    <h3 className="projects-title">IFSP Bolsa Ensino - Programa????o</h3>
                                    <a href="https://drive.ifsp.edu.br/s/OjG9YuCEPhF3LJt" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                                </div>
                                <span>Edital 002/2022 - DRG/SLT (04/2022 at?? 06/2022)</span>
                                <p>Documento oficial clicando no bot??o a cima</p>
                            </div>
                            <div className="bolsaEnsinoImageWrapper">
                                <img src={bolsaEnsinoAmostra}></img>
                                <img src={bolsaEnsinoP02Amostra}></img>
                                <img src={bolsaEnsinoP03Amostra}></img>
                                <img src={bolsaEnsinoRelatorioP01}></img>
                                <img src={bolsaEnsinoRelatorioP01P02}></img>
                                <img src={bolsaEnsinoRelatorioP02P01}></img>
                                <img src={bolsaEnsinoRelatorioP02P03}></img>
                                <img src={bolsaEnsinoRelatorioP03P01}></img>
                                <img src={bolsaEnsinoRelatorioP03P02}></img>
                            </div>
                            <div className="projects-subdescription--container -bolsaEnsinoCertficate">
                                <h3 class="projects-subtitle -certificateSubtitle">Contextualizando</h3>
                                <p>
                                    Mais uma das a????es que eu participei durante meu curso Tecnico em inform??tica no IFSP (Instituto Federal de Educa????o, Ci??ncias e Tecnologias de S??o Paulo) aonde eu me encontrava desempregado e focado 100% nos estudos, e resolvi participar pois ?? uma ajuda de custo com um valor simb??lico de R$400,00 por m??s para estudar (No caso eu optei pela grade de programa????o com a stack frontend (HTML5, CSS3 e JavaScript) pois eram as tecnologias que eu estava estudando naquele contexto/??poca). Descobri essa a????o/bolsa pelo meu professor pois o mesmo se inscreveu com a proposta do projeto no qual eu me inscrevi e fui contemplado. Foram 20 horas semanais durante 3 meses, (80 horas mensais) e o total foi de 240 horas. (Obs: N??o gerou certificado mas devido a carga horaria pode ser considerado.. rsrs)
                                </p>
                            </div>
                        </div>
                       
                    </article>  
                    <hr />
                    <article className="certificate-single -bolsaEnsinoCertficate">
                        <div>
                            <div className="projects-title--container -certificateTitleContainer">
                                <div>
                                    <h3 className="projects-title">Cybersecurity Essentials M??dulo 01 - Cisco</h3>
                                    <a href="https://lms.netacad.com/course/view.php?id=1331726" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                                </div>
                                <span>Plataforma NetAcad (07/2022 at?? 10/2022)</span>
                                <p>Documento oficial clicando no bot??o a cima</p>
                            </div>
                            <div className="bolsaEnsinoImageWrapper">
                                <img src={ciscoModule01Amostra}></img>
                            </div>
                            <div className="projects-subdescription--container -bolsaEnsinoCertficate">
                                <h3 class="projects-subtitle -certificateSubtitle">Contextualizando</h3>
                                <p>
                                    Curso da Cisco realizado na plataforma Netacad devido a disciplina GSG (Gerenciamento e Seguran??a de Dados) do IFSP, aonde o professor tomou a abordagem de instruir os alunos e utilizar como material base pois a Cisco tem um grande reconhecimento no mercado de seguran??a da informa????o, e por gerar o certificado com reconhecimento Oficial ele deduziu que seria bom para a carreira dos alunos. Esse certificado ?? refer??nte ao primeiro m??dulo (de dois) aonde ele introduziu as boas pr??ticas de seguran??a, o pilar da seguran??a da informa????o (confidencialidade, integridade e disponibilidade), tipos de atacantes (white hat, gray hat e black hat), tipos de ataque, mercado de trabalho e de penteste, tipos de criptografias e seus devidos usos (hash's), e tamb??m alguns termos e ferramentas utilizados pelos hackers.
                                </p>
                            </div>
                        </div>
                   
                    </article>  
                    <hr />
                    <article className="certificate-single -bolsaEnsinoCertficate">
                        <div>
                            <div className="projects-title--container -certificateTitleContainer">
                                <div>
                                    <h3 className="projects-title">Cybersecurity Essentials M??dulo 02 - Cisco</h3>
                                    <a href="https://lms.netacad.com/course/view.php?id=1307524" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                                </div>
                                <span>Plataforma NetAcad (10/2022 at?? 12/2022)</span>
                                <p>Documento oficial clicando no bot??o a cima</p>
                            </div>
                            <div className="bolsaEnsinoImageWrapper">
                                <img src={ciscoModule02Amostra}></img>
                            </div>
                            <div className="projects-subdescription--container -bolsaEnsinoCertficate">
                                <h3 class="projects-subtitle -certificateSubtitle">Contextualizando</h3>
                                <p>
                                    Continua????o do curso da Cisco realizado na plataforma Netacad devido a disciplina GSG (Gerenciamento e Seguran??a de Dados) do IFSP,
                                    neste m??dulo foi refor??ado o conhecimento obtido no primeiro e tamb??m o aprofundamento do mesmo, re-lembrando e refor??ando alguns termos e ferramentas, e t??cnicas de ataques e de mitiga????o, refor??ou tamb??m o pilar da seguran??a da informa????o (confidencialidade, integridade e disponibilidade), as leis em volto da cyberseguran??a (LGPD) dentre outras.
                                </p>
                            </div>
                        </div>
                   
                    </article>  
                    <hr />
                    <article className="certificate-single -bolsaEnsinoCertficate">
                        <div>
                            <div className="projects-title--container -certificateTitleContainer">
                                <div>
                                    <h3 className="projects-title">Python3 Mundo01 (M??dulo 01) - Curso Em Video</h3>
                                    <a href="https://www.cursoemvideo.com/validacao-de-certificado/?codigo=38645-66E2-9" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                                </div>
                                <span>Plataforma Curso Em Video (05/2021)</span>
                                <p>Valida????o oficial do certificado clicando no bot??o a cima</p>
                            </div>
                            <div id="cursoEmVideoInitScroll" className="bolsaEnsinoImageWrapper">
                                <img src={cursoEmVideoPython3Mundo01}></img>
                            </div>
                            <div className="projects-subdescription--container -bolsaEnsinoCertficate">
                                <h3 class="projects-subtitle -certificateSubtitle">Contextualizando</h3>
                                <p>
                                    Curso realizado quando eu estava aprendendo l??gica de programa????o, escolhi python3 pois foi a linguagem adotada pelo professor no incio do meu curso t??cnico, e resolvi refor??ar o conhecimento com as videos aulas do Gustavo Guanabara (Youtuber e CEO da plataforma "Curso em Video", muito reconhecido pela did??tica simples para quem esta iniciando) pois ele n??o utiliza muito jarg??o t??cnico, fiz o curso at?? a metade pelo Youtube e descobri que o mesmo possu??a uma plataforma dedicada e por ela era possivel gerar um certificado de conclus??o ao final de cada m??dulo (mundo), e por seguran??a e integridade do certificado, n??o ?? poss??vel realizar a prova final em casos de n??o assistido todos os v??deos, e n??o obtido a nota superior a 70%. Al??m deste m??dulo (mundo) tamb??m estudei o segundo m??dulo e fiz a prova final, por??m a gera????o do certificado ?? um servi??o pago, valor simb??lico de R$25,00 na ??poca devido ao curso ser gratuito para ajudar a mante-lo e promover suporte aos usu??rios (?? aquele ditado "N??o existe cerveja gr??tis".. rsrs). N??o gerei ainda pois estou desempregado e n??o ?? mais o meu contexto (Estou estudando outras tecnologias, no caso atual ?? Java) al??m disto o mesmo servi??o hoje custa R$45,00.
                                </p>
                            </div>
                        </div>
                   
                    </article>  
                    <hr />
                    <h1 className="main-title">&lsaquo;WorkShops&rsaquo;</h1>

                    <article className="certificate-single -bolsaEnsinoCertficate">
                        <div>
                            <div className="projects-title--container -certificateTitleContainer">
                                <div>
                                    <h3 className="projects-title">Descaracteriza????o TVBOX - IFSP FLISoL 2022</h3>
                                    <a href="https://sistemas.slt.ifsp.edu.br/certificado/?cod=d79ccad1" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                                </div>
                                <span>Palestra e Oficina (23/04/2022)</span>
                                <p>Documento oficial clicando no bot??o a cima</p>
                            </div>
                            <div className="bolsaEnsinoImageWrapper">
                                <img src={workshopTvBoxFlisol}></img>
                            </div>
                            <div className="projects-subdescription--container -bolsaEnsinoCertficate">
                                <h3 class="projects-subtitle -certificateSubtitle">Contextualizando o FLISoL</h3>
                                <p>
                                    Mais uma das a????es que eu participei no IFSP, desde o incio entrei com a mentalidade de absorver ao m??ximo poss??vel do conhecimento, ent??o participei de todas atividades que estavam pass??veis ao meu alcance. FLISoL (Festival Latino-Americano de Instala????o de Software Livre), para quem ?? entusiasta GNU sabe bem o que ?? esse evento (Mundial) com objetivo de promover e propagar o ideal de Software Livre realizado no quarto (4o) s??bado de abril de cada ano desde 2008 (com iniciativas em 2005), n??o devemos confundir "Livre" com "Free beer" ou seja "Cerveja gr??tis", essa ideia esta co-relacionada ao c??digo fonte dos Softwares, e n??o a precifica????o deles.. N??o confundir tamb??m "Software Livre" com "Open Source", ambos s??o bem parecidos por??m com focos diferentes, sendo um relacionado a qualidade do software (Open source) e o outro relacionado a liberdade do usu??rio (Software Livre), o assunto ?? um pouco mais profundo. 
                                    Um dos exemplos de licen??a que prega esses ideias ?? a GPL (General Public License).
                                    <ul className="projects-description--container">
                                        <li>
                                            <h3 class="projects-subtitle -certificateSubtitle">Liberdades da GPL</h3>
                                            <ul>
                                                <li>0 - A liberdade de executar o programa, para qualquer prop??sito.</li>
                                                <li>1 - A liberdade de estudar como o programa funciona e adapt??-lo para as suas necessidades. O acesso ao c??digo-fonte ?? um pr??-requisito para esta liberdade.</li>
                                                <li>2 - A liberdade de redistribuir c??pias de modo que voc?? possa ajudar ao seu pr??ximo.</li>
                                                <li>3 -  A liberdade de aperfei??oar o programa, e liberar os seus aperfei??oamentos, de modo que toda a comunidade se beneficie deles. O acesso ao c??digo-fonte ?? um pr??-requisito para esta liberdade.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h3 class="projects-subtitle -certificateSubtitle">Fontes interessantes</h3>
                                            <ul>
                                                <li><a target="_blank" href="https://www.youtube.com/watch?v=N0NNnq0Wyww&t=250s">Clique aqui para mais informa????es (Open Source X Software Livre).</a></li>
                                                <li><a target="_blank" href="https://www.youtube.com/watch?v=JbXGpDlu3l4">Clique aqui para mais informa????es (FLISOL) Largue de uma vez o Ruindows e vem para o Lindux.</a></li>
                                                <li><a target="_blank" href="https://www.youtube.com/watch?v=SZMIL87CyVE&list=PLuf64C8sPVT9L452PqdyYCNslctvCMs_n">Curso completo de GNU/Linux.</a></li>
                                                <li><a target="_blank" href="https://www.youtube.com/watch?v=Hu8ViS9q8QU">Palestra completa do FLISOL2022 do IFSP.</a></li>
                                                
                                            </ul>
                                        </li>
                                    </ul>
                                </p>

                                <h3 class="projects-subtitle -certificateSubtitle -minimalFont">Contextualizando o Projeto TV Box</h3>
                                <p>
                                    Sem mais delongas, o projeto refer??nte a este certificado de participa????o foi a realiza????o de uma descaracteriza????o de equipamentos piratas fruto de contrabando apreendidos pela PF (Policia Federal), esses equipamentos eram hardwares simples (estilo Raspberry Pi) com S.O personalizado (possivelmente uma distribui????o GNU/Linux) no qual realizava uma burla????o e promovia acesso gratu??to a canais e servi??os de streaming pagos (Telecine, HBO, dentre outros), a descaracteriza????o se deu pela remo????o deste S.O e substitui????o por uma distro GNU/Linux Leve sem interface gr??fica e tamb??m por um Android. Anteriormente, esses equipamentos iriam ser destru??dos e descartados, por??m resolveram do??-los para as institui????es p??blicas utiliza-los como material de estudos.
                                </p>
                            </div>
                        </div>
                   
                    </article>  
                    <hr/>
                    <article className="certificate-single -bolsaEnsinoCertficate">
                        <div>
                            <div className="projects-title--container -certificateTitleContainer">
                                <div>
                                    <h3 className="projects-title">Introdu????o ?? Linguagem C - IFSP FLISoL 2022</h3>
                                    <a href="https://sistemas.slt.ifsp.edu.br/certificado/?cod=6ddf3b8b14" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                                </div>
                                <span>Palestra e Oficina (23/04/2022)</span>
                                <p>Documento oficial clicando no bot??o a cima</p>
                            </div>
                            <div className="bolsaEnsinoImageWrapper">
                                <img src={workshopLinguagemC}></img>
                            </div>
                            <div className="projects-subdescription--container -bolsaEnsinoCertficate">
                                <h3 class="projects-subtitle -certificateSubtitle">Contextualizando</h3>
                                <p>
                                    Introdu????o e no????es b??sicas da linguagem C (Pode ser considerada "Pai" de muitas outras linguagens modernas as quais parseiam e transformam o seu c??digo fonte em C "por debaixo dos panos"), muitos dos sistemas operacionais em s?? s??o escritos em C.. me fez despertar um grande interesse por ela, por??m atualmente estou focado em Java e n??o quero me sobrecarregar e acabar n??o aprendendo nada da maneira correta, foi definido uma meta e at?? eu n??o atingi-l?? n??o irei descansar rsrs.. a meta ?? tirar a certifica????o Java da oracle antes do final do ano que vem (2023).
                                </p>

                            </div>
                        </div>
                   
                    </article> 
                    <hr/>
                    <article className="certificate-single -bolsaEnsinoCertficate">
                        <div>
                            <div className="projects-title--container -certificateTitleContainer">
                                <div>
                                    <h3 className="projects-title">Automa????o industrial (Processos e Programa????o) - IFSP IFCi??ncia 2022</h3>
                                    <a href="https://suap.ifsp.edu.br/eventos/baixar_certificad
o/?hash=024eada9d26dc7e7" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                                </div>
                                <span>Palestra (27/10/2022)</span>
                                <p>Documento oficial clicando no bot??o a cima</p>
                            </div>
                            <div className="bolsaEnsinoImageWrapper">
                                <img src={workshopAutomacaoIndustrialP01}></img>
                                <img src={workshopAutomacaoIndustrialP02}></img>
                            </div>
                            <div className="projects-subdescription--container -bolsaEnsinoCertficate">
                                <h3 class="projects-subtitle -certificateSubtitle">Contextualizando</h3>
                                <p>
                                    Optei por participar deste workshop pois era o ??nico mais pr??ximo do meu contexto (desenvolvimento) se comparado as outras op????es, foi necess??rio participar pois a professora de uma das disciplinas considerou uma fra????o da nota dedicada a um dos projetos do IFCi??ncia, ent??o tivemos que escolher "obrigat??riamente" alguma coisa rsrs..
                                </p>

                            </div>
                        </div>
                   
                    </article> 
                    <hr/>
                    <article className="certificate-single -bolsaEnsinoCertficate">
                        <div>
                            <div className="projects-title--container -certificateTitleContainer">
                                <div>
                                    <h3 className="projects-title">NodeRed: Uma Jornada IoT - IFSP IFCi??ncia 2021</h3>
                                    <a href="https://drive.google.com/file/d/154osECaHFdjOHc3wWM4VbnbU4lUDbdhq/view?usp=sharing" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                                </div>
                                <span>Palestra (28/10/2021)</span>
                                <p>Documento oficial clicando no bot??o a cima</p>
                            </div>
                            <div className="bolsaEnsinoImageWrapper">
                                <img src={workshopNodeRed}></img>
                                <img src={relatorioNodeRedP01}></img>
                                <img src={relatorioNodeRedP02}></img>
                                <img src={relatorioNodeRedP03}></img>
                                <img src={relatorioNodeRedP04}></img>
                            </div>
                            <div className="projects-subdescription--container -bolsaEnsinoCertficate">
                                <h3 class="projects-subtitle -certificateSubtitle">Contextualizando</h3>
                                <p>
                                    Mais uma das a????es promovidas pelo IFSP, o primeiro IFCi??ncia que eu participei em 2021 no qual me despertou interesse por "Internet das coisas" na ??poca, mas ?? por que eu estava me encontrando ainda.. o mundo de Tecnologia ?? imenso e cheio de ramos/oportunidades mas com toda certeza ?? aqui o meu lugar...
                                    Foi explicado e introduzido como ?? a intera????o entre micro-controladores e a programa????o (No caso ele utilizou o NodeRed) que ?? basicamente uma abstra????o gr??fica (Like windows) estilo KNIME aonde temos componentes e por meio deles podemos realizar as l??gicas por??m de uma maneira mais visual e automaticamente mais simples de se programar.
                                    Este workshop tamb??m foi considerado uma fra????o da nota na disciplina por alguns professores, abaixo do certificado se encontra o relat??rio que eu fiz.  
                                </p>

                            </div>
                        </div>
                   
                    </article> 
                    <hr/>
                    <article className="certificate-single -bolsaEnsinoCertficate -certificateLastChildArticle">
                        <div>
                            <div className="projects-title--container -certificateTitleContainer">
                                <div>
                                    <h3 className="projects-title">Bolsa de Valores B3 - IFSP IFCi??ncia 2021</h3>
                                    <a href="https://drive.google.com/file/d/1sLqKc5vPhkTZzXWYyWarRrH2yg9lnsRh/view?usp=sharing" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                                </div>
                                <span>Palestra (29/10/2021)</span>
                                <p>Documento oficial clicando no bot??o a cima</p>
                            </div>
                            <div className="bolsaEnsinoImageWrapper">
                                <img src={workshopBolsaValores}></img>
                            </div>
                            <div className="projects-subdescription--container -bolsaEnsinoCertficate">
                                <h3 class="projects-subtitle -certificateSubtitle">Contextualizando</h3>
                                <p>
                                    Resolvi participar deste workshop pois eu tenho interesses em investimentos antes mesmo de conhecer minha paix??o no T.I
                                    por??m s?? via alguns poucos v??deos sobre.. ent??o resolvi participar para entender como ?? o contexto, 
                                    me fez abrir a mente sobre e um dia pretendo aprender ao menos o b??sico, por??m ?? um jogo para quem possu?? uma boa verba n??o sendo o meu caso atual.. rsrs ent??o fica pra pr??xima. e.e
                                </p>

                            </div>
                        </div>
                   
                    </article> 
                </div>             
            </div>
        </section>
    )
};
