export type FooterLink = {
  label: string;
  href: string;
};

export type FooterColumnData = {
  title: string;
  links: FooterLink[];
};


export const footerData: FooterColumnData[] =  [

    {  
        title: "Social",
        links: [
            {label:"LinkedIn", href:""},
            {label:"Instagram", href:"https://www.instagram.com/eliasmellodesign/"},
            {label:"Facebook", href:""},        
        ],
    },

    {  
    title: "Empresa",
    links: [
        {label:"Sobre Nós", href:"/quemsomos"},
        {label:"Contato", href:"/orcamento"},        
    ],
},

    {  
    title: "Localização",
    links: [
        {label:"R. Edson Nunes de Paula, 70 - Nossa Sra. de Fátima", href:""},
        {label:"Patos de Minas - MG", href:""},
        {label:"Brasil", href:""},        
    ],
},


]


