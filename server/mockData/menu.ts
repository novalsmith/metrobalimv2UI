interface SubMenu {
    title: string;
    icon: string;
    categoryId: string;
    color?: string; // Color is optional and a string
  }
  
  interface Menu {
    title: string;
    icon: string;
    categoryId: string;
    color?: string; // Color is optional and a string
    subMenu?: SubMenu[]; // SubMenu is optional and an array of SubMenu
    badge?:string; //badge is optional and a string
  }
  
  const menus: Menu[] = [
    { title: "Home", icon: "mdi-home", categoryId: "/" },
    {
      title: "Tanah Papua",
      icon: "mdi-heart",
      color: "red",
      categoryId: "/article/tanah-papua",
      subMenu: [
        { title: "Papua", icon: "mdi-earth", categoryId: "/article/regional" },
        { title: "Papua Tengah", icon: "mdi-earth", categoryId: "/article/regional" },
        { title: "Papua Pegunungan", icon: "mdi-earth", categoryId: "/article/regional" },
        { title: "Papua Selatan", icon: "mdi-earth", categoryId: "/article/regional" },
        { title: "Papua Barat", icon: "mdi-earth", categoryId: "/article/regional" },
        { title: "Papua Barat Daya", icon: "mdi-earth", categoryId: "/article/regional" },
      ],
    },
    { title: "Nasional", icon: "mdi-earth", color: "green", categoryId: "/article/regional" },
    {
      title: "Internasional",
      icon: "mdi-web",
      color: "red",
      categoryId: "/article/internasional",
      badge: "NEW",
    },
    {
      title: "Insight",
      icon: "mdi-lightbulb-on",
      color: "yellow",
      categoryId: "/article/insight",
      subMenu: [
        { title: "Podcast", icon: "mdi-podcast", categoryId: "/article/podcast" },
        { title: "Jurnal", icon: "mdi-newspaper", categoryId: "/article/jurnal" },
        { title: "Sastra", icon: "mdi-book-open-page-variant", categoryId: "/article/sastra" },
        { title: "Bisnis", icon: "mdi-chart-bar", categoryId: "/article/bisnis" },
        { title: "HIV-AIDS", icon: "mdi-ribbon", categoryId: "/article/hiv-aids" },
        { title: "Kesehatan", icon: "mdi-doctor", categoryId: "/article/video" },
        { title: "Pendidikan", icon: "mdi-book-open", categoryId: "/article/video" },
        { title: "Sport", icon: "mdi-book-open", categoryId: "/article/video" },
      ],
    },
  ];
  
  export default menus;