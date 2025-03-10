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
      categoryId: "/tanah-papua",
      subMenu: [
        { title: "Papua", icon: "mdi-earth", categoryId: "/tanah-papua/papua" },
        { title: "Papua Tengah", icon: "mdi-earth", categoryId: "/tanah-papua/papua-tengah" },
        { title: "Papua Pegunungan", icon: "mdi-earth", categoryId: "/tanah-papua/papua-pegunungan" },
        { title: "Papua Selatan", icon: "mdi-earth", categoryId: "/tanah-papua/papua-selatan" },
        { title: "Papua Barat", icon: "mdi-earth", categoryId: "/tanah-papua/papua-barat" },
        { title: "Papua Barat Daya", icon: "mdi-earth", categoryId: "/tanah-papua/papua-barat-daya" },
      ],
    },
    { title: "Nasional", icon: "mdi-earth", color: "green", categoryId: "/regional" },
    {
      title: "Internasional",
      icon: "mdi-web",
      color: "red",
      categoryId: "/internasional",
      badge: "NEW",
    },
    {
      title: "Insight",
      icon: "mdi-lightbulb-on",
      color: "yellow",
      categoryId: "/insight",
      subMenu: [
        { title: "Podcast", icon: "mdi-podcast", categoryId: "/podcast" },
        { title: "Jurnal", icon: "mdi-newspaper", categoryId: "/jurnal" },
        { title: "Sastra", icon: "mdi-book-open-page-variant", categoryId: "/sastra" },
        { title: "Bisnis", icon: "mdi-chart-bar", categoryId: "/bisnis" },
        { title: "HIV-AIDS", icon: "mdi-ribbon", categoryId: "/hiv-aids" },
        { title: "Kesehatan", icon: "mdi-doctor", categoryId: "/video" },
        { title: "Pendidikan", icon: "mdi-book-open", categoryId: "/video" },
        { title: "Sport", icon: "mdi-book-open", categoryId: "/video" },
      ],
    },
  ];
  
  export default menus;