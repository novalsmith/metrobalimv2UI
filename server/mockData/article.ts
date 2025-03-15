interface Article {
    title: string;
    subtitle: string;
    image: string;
    isLike: boolean;
    like: number;
    slug: string;
    category: string;
    prependAvatar: string;

  }
  
  const articles: Article[] = [
    {
        title: "Resmi, Ole Romeny Menjadi Warga Negara Indonesia. Lini serang Timnas indonesia semakin tajam dan diharapkan bisa mendapat poin maksimal",
        subtitle: "Resmi, Ole Romeny Menjadi Warga Negara Indonesia",
        image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1yEwXw.img?w=750&h=500&m=6&x=120&y=120&s=280&d=280",
        isLike: true,
        like: 200,
        slug: "ole-naturalisasi-indonesia",
        category: "sastra",
        prependAvatar: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1yEwXw.img?w=750&h=500&m=6&x=120&y=120&s=280&d=280",

     },
    {
        title: "Velixs Wangai Pemprov Papua Pegunungan Usulkan Penyesuaian Passing Grade CPNS ke Kemen PANRB.",
        subtitle: "Velixs Wangai Pemprov Papua Pegunungan Usulkan Penyesuaian Passing Grade CPNS ke Kemen PANRB.",
        image: "https://metrobalim.net/wp-content/uploads/2025/02/metrobalim.jpg",
        isLike: true,
        like: 5,
        slug: "veliks-wangai-pemprov",
        category: "tanah-papua",
        prependAvatar: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1yEwXw.img?w=750&h=500&m=6&x=120&y=120&s=280&d=280",

    },
    {
        title: "Polda Papua Disoroti? Keadilan untuk Tobias Silak",
        subtitle: "Polda Papua Disoroti? Keadilan untuk Tobias Silak",
        image: "https://metrobalim.net/wp-content/uploads/2025/01/Blue-and-Yellow-Gradient-Meditation-Youtube-Thumbnail-12.png",
        isLike: true,
        like: 5,
        slug: "polda-papua",
        category: "regional",
        prependAvatar: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1yEwXw.img?w=750&h=500&m=6&x=120&y=120&s=280&d=280",

    },

    {
        title: "Warga Distrik Kroptak Nduga Minta Penarikan TNI Non-Organik dari Wilayah Mereka.",
        subtitle: "Warga Distrik Kroptak Nduga Minta Penarikan TNI Non-Organik dari Wilayah Mereka.",
        image: "https://metrobalim.net/wp-content/uploads/2025/01/Blue-and-Yellow-Gradient-Meditation-Youtube-Thumbnail-14-1024x576.png",
        isLike: true,
        like: 200,
        slug: "warga-indonesia",
        category: "bisnis",
        prependAvatar: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1yEwXw.img?w=750&h=500&m=6&x=120&y=120&s=280&d=280",

    },

    {
        title: "Natalius Pigai: Konversi Lahan Tinggi, Masa Depan Ketahanan Pangan Terancam",
        subtitle: "Natalius Pigai: Konversi Lahan Tinggi, Masa Depan Ketahanan Pangan Terancam",
        image: "https://metrobalim.net/wp-content/uploads/2025/01/Blue-and-Yellow-Gradient-Meditation-Youtube-Thumbnail-18-1024x576.png",
        isLike: true,
        like: 200,
        slug: "natalius",
        category: "podcast",
        prependAvatar: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1yEwXw.img?w=750&h=500&m=6&x=120&y=120&s=280&d=280",

    },
    {
        title: "ULMWP Salurkan Bantuan untuk Pengungsi di Nduga, Papua Pegunungan",
        subtitle: "ULMWP Salurkan Bantuan untuk Pengungsi di Nduga, Papua Pegunungan",
        image: "https://metrobalim.net/wp-content/uploads/2025/01/1.png",
        isLike: true,
        like: 50,
        slug: "natalius",
        category: "tanah-papua",
        prependAvatar: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1yEwXw.img?w=750&h=500&m=6&x=120&y=120&s=280&d=280",

    },
    {
        title: "Pemberhentian Pegawai Honorer di Papua Pegunungan Picu Protes",
        subtitle: "Pemberhentian Pegawai Honorer di Papua Pegunungan Picu Protes",
        image: "https://metrobalim.net/wp-content/uploads/2025/01/IMG-20250113-WA0039.jpg",
        isLike: false,
        like: 0,
        slug: "natalius",
        category: "tanah-papua",
        prependAvatar: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1yEwXw.img?w=750&h=500&m=6&x=120&y=120&s=280&d=280",

    },
    {
        title: "Refleksi Perjalanan Tahun 2024 : Membangun Fondasi dan Identitas Pegunungan Papua",
        subtitle: "Refleksi Perjalanan Tahun 2024 : Membangun Fondasi dan Identitas Pegunungan Papua.",
        image: "https://metrobalim.net/wp-content/uploads/2025/01/1-1-1024x576.png",
        isLike: false,
        like: 0,
        slug: "natalius",
        category: "tanah-papua",
        prependAvatar: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1yEwXw.img?w=750&h=500&m=6&x=120&y=120&s=280&d=280",

    },
    {
        title: "Sidang Paripurna DPD RI Nelson Wenda Laporkan Persoalan dan Isu Strategis Di Provinsi Papua Pegunungan",
        subtitle: "Sidang Paripurna DPD RI Nelson Wenda Laporkan Persoalan dan Isu Strategis Di Provinsi Papua Pegunungan",
        image: "https://metrobalim.net/wp-content/uploads/2025/01/IMG-20250114-WA0051.jpg",
        isLike: false,
        like: 0,
        slug: "natalius",
        category: "tanah-papua",
        prependAvatar: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1yEwXw.img?w=750&h=500&m=6&x=120&y=120&s=280&d=280",

    },
    {
        title: "DOA di Getsemani",
        subtitle: "DOA di Getsemani",
        image: "https://answeredfaith.com/wp-content/uploads/2024/11/examples-of-jesus-praying-in-the-bible-1.jpg",
        isLike: false,
        like: 30,
        slug: "natalius",
        category: "tanah-papua",
        prependAvatar: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1yEwXw.img?w=750&h=500&m=6&x=120&y=120&s=280&d=280",

    },
    {
        title: "Polda Papua Disoroti? Keadilan untuk Tobias Silak",
        subtitle: "Polda Papua Disoroti? Keadilan untuk Tobias Silak",
        image: "https://metrobalim.net/wp-content/uploads/2025/01/Blue-and-Yellow-Gradient-Meditation-Youtube-Thumbnail-12.png",
        isLike: true,
        like: 5,
        slug: "natalius",
        category: "tanah-papua",
        prependAvatar: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1yEwXw.img?w=750&h=500&m=6&x=120&y=120&s=280&d=280",

    },
    {
        title: "Resmi, Ole Romeny Menjadi Warga Negara Indonesia. Lini serang Timnas indonesia semakin tajam dan diharapkan bisa mendapat poin maksimal",
        subtitle: "Resmi, Ole Romeny Menjadi Warga Negara Indonesia",
        image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1yEwXw.img?w=750&h=500&m=6&x=120&y=120&s=280&d=280",
        isLike: true,
        like: 200,
        slug: "natalius",
        category: "tanah-papua",
        prependAvatar: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1yEwXw.img?w=750&h=500&m=6&x=120&y=120&s=280&d=280",

    },
    {
        title: "Warga Distrik Kroptak Nduga Minta Penarikan TNI Non-Organik dari Wilayah Mereka.",
        subtitle: "Warga Distrik Kroptak Nduga Minta Penarikan TNI Non-Organik dari Wilayah Mereka.",
        image: "https://metrobalim.net/wp-content/uploads/2025/01/Blue-and-Yellow-Gradient-Meditation-Youtube-Thumbnail-14-1024x576.png",
        isLike: true,
        like: 200,
        slug: "natalius",
        category: "tanah-papua",
        prependAvatar: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1yEwXw.img?w=750&h=500&m=6&x=120&y=120&s=280&d=280",

    },

    {
        title: "Natalius Pigai: Konversi Lahan Tinggi, Masa Depan Ketahanan Pangan Terancam",
        subtitle: "Natalius Pigai: Konversi Lahan Tinggi, Masa Depan Ketahanan Pangan Terancam",
        image: "https://metrobalim.net/wp-content/uploads/2025/01/Blue-and-Yellow-Gradient-Meditation-Youtube-Thumbnail-18-1024x576.png",
        isLike: true,
        like: 200,
        slug: "natalius",
        category: "tanah-papua",
        prependAvatar: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1yEwXw.img?w=750&h=500&m=6&x=120&y=120&s=280&d=280",

    },
    {
        title: "Resmi, Ole Romeny Menjadi Warga Negara Indonesia. Lini serang Timnas indonesia semakin tajam dan diharapkan bisa mendapat poin maksimal",
        subtitle: "Resmi, Ole Romeny Menjadi Warga Negara Indonesia",
        image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1yEwXw.img?w=750&h=500&m=6&x=120&y=120&s=280&d=280",
        isLike: true,
        like: 200,
        slug: "natalius",
        category: "tanah-papua",
        prependAvatar: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1yEwXw.img?w=750&h=500&m=6&x=120&y=120&s=280&d=280",

    },
    {
        title: "Warga Distrik Kroptak Nduga Minta Penarikan TNI Non-Organik dari Wilayah Mereka.",
        subtitle: "Warga Distrik Kroptak Nduga Minta Penarikan TNI Non-Organik dari Wilayah Mereka.",
        image: "https://metrobalim.net/wp-content/uploads/2025/01/Blue-and-Yellow-Gradient-Meditation-Youtube-Thumbnail-14-1024x576.png",
        isLike: true,
        like: 200,
        slug: "natalius",
        category: "tanah-papua",
        prependAvatar: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1yEwXw.img?w=750&h=500&m=6&x=120&y=120&s=280&d=280",

    },

    {
        title: "Natalius Pigai: Konversi Lahan Tinggi, Masa Depan Ketahanan Pangan Terancam",
        subtitle: "Natalius Pigai: Konversi Lahan Tinggi, Masa Depan Ketahanan Pangan Terancam",
        image: "https://metrobalim.net/wp-content/uploads/2025/01/Blue-and-Yellow-Gradient-Meditation-Youtube-Thumbnail-18-1024x576.png",
        isLike: true,
        like: 200,
        slug: "natalius",
        category: "tanah-papua",
        prependAvatar: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1yEwXw.img?w=750&h=500&m=6&x=120&y=120&s=280&d=280",

    },
  ];
  
  export default articles;