export type FooterLink = {
  label: string;
  href: string;
  noHover?: boolean;
};

export type FooterColumnData = {
  title: string;
  links: FooterLink[];
};


export const footerData: FooterColumnData[] =  [

    {  
        title: "Social",
        links: [
            {label:"LinkedIn", href:"https://www.linkedin.com/company/elias-mello-innovation-in-design/posts/?feedView=all"},
            {label:"Instagram", href:"https://www.instagram.com/eliasmellodesign/"},
            {label:"Facebook", href:"https://www.facebook.com/people/Elias-Mello-Innovation-in-Design-Elias-Mello/61555877986663/"},        
        ],
    },

    {  
    title: "Empresa",
    links: [
        {label:"Sobre Nós", href:"/about-us"},
        {label:"Contato", href:"/budget"},        
    ],
},

    {  
    title: "Localização",
    links: [
        {label:"R. Edson Nunes de Paula, 70 - Nossa Sra. de Fátima", href:"", noHover: true},
        {label:"Patos de Minas - MG", href:"", noHover: true},
        {label:"Brasil", href:"", noHover: true},        
    ],
},


]


