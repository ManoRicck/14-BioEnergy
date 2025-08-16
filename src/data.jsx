import { IoCallOutline ,IoLocationOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import {FaInstagram, FaDiscord, FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import Documento from '/documento.pdf'
import {  profile1, profile2, profile3 ,profile4 ,profile5, profile6, profile7,
        panel,turbine,batteries,
        member1, member2, member3, member4, member5, member6} from "./assets";

export const navTabs = [
    {name:"Home",id:'header'},
    {name:"Sobre nós",id:'about'},
    {name:"Serviços",id:'services'},
    {name:"Time",id:'team'},
    {name:"Projetos",id:'project'},
    {name:"Clientes",id:'testimonial'},
    {name:"FAQ",id:'faq'},
    {name:"Contatos",id:'contact'},
    // {name:"Simulador 3D",id:'simulador3d', href: 'https://modelagem-3d-bioenergy.vercel.app/' },
];

export const services = [
  {
    name:"Paineis Solares",
    image:panel,
    description:`Os painéis solares são dispositivos que convertem a luz solar em eletricidade. Eles são compostos por células fotovoltaicas que capturam a energia do sol e a transformam em energia elétrica utilizável.`,
  },
  {
    name:"Turbinas Eolicas",
    image:turbine,
    description:`As turbinas eólicas são máquinas que convertem a energia cinética do vento em energia elétrica. Elas consistem em grandes hélices que giram com a força do vento, acionando um gerador que produz eletricidade.`,
  },
  {
    name:"Bateria de Armazenamento",
    image:batteries,
    description:`As baterias de armazenamento são dispositivos que armazenam energia elétrica para uso posterior.`,
  },
]

export const teams = [
  {
    name:"Henrique Expedito",
    title:"CEO | Frontend",
    profile:member1,
    social:[
      {name:"Github",icon:<FaGithub/>,url:"https://github.com/ManoRicck"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Discord",icon:<FaDiscord/>,url:"https://www.Discord.com"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Júlio Henrique",
    title:"Back-end",
    profile:member2,
    social:[
      {name:"Github",icon:<FaGithub/>,url:"http://Github.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Discord",icon:<FaDiscord/>,url:"https://www.Discord.com"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Danilo Vinicius",
    title:"Designer",
    profile:member3,
    social:[
      {name:"Github",icon:<FaGithub/>,url:"http://Github.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Discord",icon:<FaDiscord/>,url:"https://www.Discord.com"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Joaquim Acioli",
    title:"Banco de Dados",
    profile:member4,
    social:[
      {name:"Github",icon:<FaGithub/>,url:"http://Github.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Discord",icon:<FaDiscord/>,url:"https://www.Discord.com"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Yasmin Vitória",
    title:"Analista de Dados",
    profile:member5,
    social:[
      {name:"Github",icon:<FaGithub/>,url:"http://Github.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Discord",icon:<FaDiscord/>,url:"https://www.Discord.com"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Wendell Gabriel",
    title:"Git e GitHub",
    profile:member6,
    social:[
      {name:"Github",icon:<FaGithub/>,url:"http://Github.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Discord",icon:<FaDiscord/>,url:"https://www.Discord.com"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
]

export const projects = [
  {
    title:"Instalação massiva de sistema solar",
    image:"https://cdn.britannica.com/94/192794-050-3F3F3DDD/panels-electricity-order-sunlight.jpg",
    category:"Painel Solar",
    description:`Os painéis solares são dispositivos que convertem a luz solar em eletricidade.`,
  },
  {
    title:"Capacitando Comunidades: Soluções Solares para um Futuro Sustentável",
    image:"https://www.solarpowerworldonline.com/wp-content/uploads/2019/07/ips1.jpg",
    category:"Painel Solar",
    description:`Os painéis solares são dispositivos que convertem a luz solar em eletricidade.`,
  },
  {
    title:"Colhendo a luz do sol: o projeto da Iniciativa de Energia Verde",
    image:"https://www.biscaynetimes.com/downloads/2317/download/6.jpg",
    category:"Painel Solar",
    description:`Os painéis solares são dispositivos que convertem a luz solar em eletricidade.`,
  },
  {
    title:"Sinergia Eólica e Solar: Soluções de Energia Híbrida para o Amanhã",
    image:"https://cdn.britannica.com/75/114975-159-38AE7632/Wind-turbines-Tehachapi-Calif.jpg",
    category:"Turbina Eólica",
    description:`As turbinas eólicas são máquinas que convertem a energia cinética do vento em energia elétrica.`,
  },
  {
    title:"Power Vault: soluções de armazenamento de bateria solar",
    image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgd_ThhlfShBjbodGPZOKZR2v_IvCIMc1FRu8t9VFNAmGZttNxdVlMX87FUZ4Rk7m6eGS3OLKep06Fbr_IGpdN4zVJR1pPUKH5z2fiC9J3ThLwWotIn5PPBW3H_ezvr3xlPpDD30lD8JyGSFyDzkOEbgXHUEhXgiY1_hR93mwHQCzhKXPkyOWJ-FRbBHg/s1000/mumti%20power.jpg",
    category:"Bateria solar",
    description:`As baterias de armazenamento são dispositivos que armazenam energia elétrica para uso posterior.`,
  },
  {
    title:"Eclipse Reserve: integração inovadora de bateria solar",
    image:"https://energymall.ng/wp-content/uploads/2020/12/sunfit-solar-scaled.jpg",
    category:"Bateria solar",
    description:`As baterias de armazenamento são dispositivos que armazenam energia elétrica para uso posterior.`,
  },
];

export const faq = [
  {
    title:"Como funcionam os painéis solares?",
    description:`
       Painéis solares convertem luz solar em eletricidade 
       usando células fotovoltaicas (PV). Quando a luz solar atinge as células, 
       cria um campo elétrico que gera corrente contínua (DC) 
       eletricidade. Esta eletricidade DC é então convertida em 
       eletricidade de corrente alternada (CA) usando um inversor, fazendo 
       pode ser usado em sua casa ou empresa.`
  },
  {
    title:"Quais são os benefícios da instalação de painéis solares?",
    description:`
       A instalação de painéis solares pode reduzir ou eliminar o seu 
       contas de luz, aumentar o valor do seu imóvel, 
       diminuir sua pegada de carbono e fornecer energia renovável 
       fonte de energia. Além disso, muitas regiões oferecem incentivos 
       e descontos para instalações solares.
    `,
  },
  {
    title:"Quanto custa um sistema de energia solar?",
    description:`
      O custo de um sistema de energia solar varia dependendo do tamanho do
       o sistema, o tipo de equipamento utilizado e sua localização. Sobre 
       em média, um sistema de painel solar residencial pode variar de US$ 15.000 
       a US$ 25.000 antes de incentivos e descontos.
    `,
  },
  {
    title: "Quanto tempo levará para os meus painéis solares se pagarem?",
    description: `
    O período de retorno dos painéis solares geralmente varia de 6 a 10 anos, 
    dependendo de fatores como o seu consumo de energia, o custo da eletricidade 
    na sua região e os incentivos financeiros disponíveis.
    `,
},
{
    title: "Meus painéis solares funcionarão durante uma queda de energia?",
    description: `
    A maioria dos sistemas solares conectados à rede elétrica não funcionará durante 
    uma queda de energia por razões de segurança, a menos que estejam emparelhados 
    com um sistema de armazenamento de bateria ou um gerador solar que permita 
    operação fora da rede.
    `,
},
{
    title: "Quanta manutenção os painéis solares exigem?",
    description: `
    Os painéis solares exigem pouca manutenção. Limpeza regular para remover poeira, 
    sujeira e detritos, bem como inspeções periódicas para garantir que tudo esteja 
    funcionando corretamente, geralmente são suficientes. A maioria dos painéis 
    vem com uma garantia de 25 anos.
    `,
},
{
    title: "Eu preciso de um sistema de armazenamento de bateria?",
    description: `
    Embora um sistema de armazenamento de bateria não seja obrigatório, ele pode 
    ser benéfico para armazenar o excesso de energia gerada durante o dia para uso 
    à noite ou durante quedas de energia. As baterias também podem ajudá-lo a se 
    tornar mais independente em termos de energia.
    `,
},
]

export const testimonial = [
  {
    image: profile1,
    name: 'Bill Gates',
    position: 'Co-fundador da Microsoft',
    rating: 5,
    review: `Fiquei impressionado com a qualidade do conteúdo e a tecnologia de modelagem 3D disponível no site. Foi muito útil para entender como os painéis solares seriam instalados e quais seriam os benefícios. Excelente trabalho!`
  },
  {
    image: profile2,
    name: 'Eiichiro Oda',
    position: 'Autor de One Piece',
    rating: 6,
    review: `O site é incrível! As informações sobre energia solar são muito detalhadas e fáceis de entender. A modelagem 3D realmente ajuda a visualizar como os painéis solares ficariam instalados na minha casa. Recomendo a todos que estão pensando em investir em energia solar.`
  },
  {
    image: profile3,
    name: 'Hideo Kojima',
    position: 'Fundador da Kojima Productions',
    rating: 6,
    review: `Impressionante demais esse site! Olha essa geometria, meu Deus! Cara, como é que isso aqui tá no ar, mano? Véi, ó o nível de detalhe! Pelo amor de Deus, cara! BioEnergy, o que você fez?`
  },
  {
    image: profile4,
    name: 'Snoop Dog',
    position: 'Rapper e Empresário',
    rating: 5,
    review: `Adorei a experiência no site. A seção de modelagem 3D é um diferencial enorme, pois permite ver exatamente como os painéis solares serão posicionados. Além disso, o conteúdo sobre energia solar é muito educativo e me ajudou a tomar uma decisão informada.`
  },
  {
    image: profile5,
    name: 'Elon Musk',
    position: 'CEO da Tesla e SpaceX',
    rating: 6,
    review: `Excelente site! As informações são claras e objetivas, e a ferramenta de modelagem 3D é fantástica. Pude planejar a instalação dos painéis solares com muito mais confiança. Parabéns pelo ótimo trabalho!`
  },
  {
    image: profile6,
    name: 'Mark Zuckerberg',
    position: 'CEO da Meta',
    rating: 5,
    review: `Muito satisfeito com o site. A modelagem 3D é extremamente útil para entender o melhor posicionamento dos painéis solares. Além disso, o conteúdo sobre energia solar é muito completo e esclarecedor. Super recomendo!`
  },
  {
    image: profile7,
    name: 'Larry Ellison',
    position: 'Co-fundador da Oracle',
    rating: 6,
    review: `O site é muito intuitivo e fácil de navegar. As informações sobre energia solar são bem organizadas e a modelagem 3D é um recurso fantástico que me ajudou a visualizar o projeto de forma clara. Estou muito satisfeito!`
  }
];

export const contacts = [
  {
    name:"Email",
    value:"BioEnergy@gmail.com",
    icon:<MdOutlineAlternateEmail />,
  },
  {
    name:"Número de Telefone",
    value:"+81999999999",
    icon:<IoCallOutline/>,
  },
  {
    name:"Localização",
    value:"Pe, Paulista",
    icon:<IoLocationOutline/>,
  },
]

export const footer = [
    {
      name:"Explore",
      routes:[
        {name:"Home",id:'header'},
        {name:"Sobre nós",id:'about'},
        {name:"Serviços",id:'services'},
        {name:"Time",id:'team'},
        {name:"Projetos",id:'project'},
        {name:"Clientes",id:'testimonial'},
        {name:"FAQ",id:'faq'},
        {name:"Contatos",id:'contact'},
        // {name:"Simulador 3D",id:'simulador3d', href: 'https://modelagem-3d-bioenergy.vercel.app/' },
      ]
    },
      {
          name: "Gallery",
          routes: [
              { name: "Política de Privacidade", href: Documento },
              { name: "Termos e Condições", href: Documento  },
              { name: "Política de Cookies", href: Documento  },
          ]
      },
  ];
  


