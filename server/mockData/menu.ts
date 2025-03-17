interface SubMenu {
  title: string;
  icon: string;
  categoryId: string;
  link: string;  
  color?: string;
  subMenu?: SubMenu[];
}

interface Menu {
  title: string;
  icon: string;
  categoryId: string;
  link: string;  
  color?: string;
  subMenu?: SubMenu[];
  badge?: string;
}

const menus: Menu[] = [
  { title: "Home", icon: "mdi-home-outline", categoryId: "/", link: "/", subMenu:[] },
  {
    title: "Tanah Papua",
    icon: "mdi-heart-outline",
    color: "red",
    categoryId: "tanah-papua",
    link: "/tanah-papua",
    subMenu: [
      { title: "Papua", icon: "mdi-earth", categoryId: "papua", link: "/tanah-papua/papua",subMenu:[
  

      ] },
      { title: "Papua Tengah", icon: "mdi-earth", categoryId: "papua-tengah", link: "/tanah-papua/papua-tengah",subMenu:[] },
      { title: "Papua Pegunungan", icon: "mdi-earth", categoryId: "papua-pegunungan", link: "/tanah-papua/papua-pegunungan" ,subMenu:[]},
      { title: "Papua Selatan", icon: "mdi-earth", categoryId: "papua-selatan", link: "/tanah-papua/papua-selatan",subMenu:[] },
      { title: "Papua Barat", icon: "mdi-earth", categoryId: "papua-barat", link: "/tanah-papua/papua-barat" ,subMenu:[]},
      { title: "Papua Barat Daya", icon: "mdi-earth", categoryId: "papua-barat-daya", link: "/tanah-papua/papua-barat-daya",subMenu:[
        { title: "Sorong", icon: "mdi-earth", categoryId: "papua", link: "/tanah-papua/papua/sorong",subMenu:[] },
        { title: "Maybrat", icon: "mdi-earth", categoryId: "papua", link: "/tanah-papua/papua/maybrat",subMenu:[] },
      ] },
    ],
  },
  { title: "Nasional", icon: "mdi-earth", color: "green", categoryId: "nasional", link: "/nasional",subMenu:[] },
  {
    title: "Internasional",
    icon: "mdi-web",
    color: "red",
    categoryId: "internasional",
    link: "/internasional",
    badge: "NEW",
     subMenu:[]
  },
  {
    title: "Insight",
    icon: "mdi-lightbulb-on-outline",
    color: "yellow",
    categoryId: "insight",
    link: "/insight",
    subMenu: [
      { title: "Podcast", icon: "mdi-podcast", categoryId: "podcast", link: "/insight/podcast",subMenu:[] },
      { title: "Jurnal", icon: "mdi-newspaper", categoryId: "jurnal", link: "/insight/jurnal" },
      { title: "Sastra", icon: "mdi-book-open-page-variant", categoryId: "sastra", link: "/insight/sastra",subMenu:[] },
      { title: "Bisnis", icon: "mdi-chart-bar", categoryId: "bisnis", link: "/insight/bisnis",subMenu:[] },
      { title: "HIV-AIDS", icon: "mdi-ribbon", categoryId: "hiv-aids", link: "/insight/hiv-aids",subMenu:[] },
      { title: "Kesehatan", icon: "mdi-doctor", categoryId: "health", link: "/insight/health" ,subMenu:[]},
      { title: "Pendidikan", icon: "mdi-book-open", categoryId: "study", link: "/insight/study",subMenu:[] },
      { title: "Sport", icon: "mdi-book-open", categoryId: "sport", link: "/insight/sport",subMenu:[] },
    ],
  },
];

export default menus;