import carousel1 from "./carousel/carousel-1.png";
import carousel2 from "./carousel/carousel-2.png";
import carousel3 from "./carousel/carousel-3.jpg";
import next from "./icon/next.svg";
import prev from "./icon/prev.svg";
import all from "./icon/all.svg";
import medicine from "./icon/medicine.svg";
import food from "./icon/food.svg";
import building from "./icon/building.svg";
import calendar from "./icon/calendar.svg";
import cardImage from "./card-image.png";
import cardOverlay from "./card-overlay.png";
import girl from "./girl.png";
import untan from "./partnership/untan.png";
import xl from "./partnership/xl.jpg";
import ibt from "./partnership/ibt.png";
import ukm from "./partnership/ukm.jpg";
import footer from "./logo/footer.png";

import facebook from "./icon/facebook.svg";
import instagram from "./icon/instagram.svg";
import twitter from "./icon/twitter.svg";
import youtube from "./icon/youtube.svg";

import email from "./icon/email.svg";
import whatsapp from "./icon/whatsapp.svg";
import call from "./icon/call.svg";

import dokumentasi1 from "./dokumentasi/1.png";
import dokumentasi2 from "./dokumentasi/2.png";
import dokumentasi3 from "./dokumentasi/3.png";
import dokumentasi4 from "./dokumentasi/4.png";
import dokumentasi5 from "./dokumentasi/5.png";

import bca from "./logo/bca.png";
import briSyariah from "./logo/bri-syariah.png";

const categories = [
  {
    name: "Semua",
    image: all,
  },
  {
    name: "Medis dan Obat-obatan",
    image: medicine,
  },
  {
    name: "Sosial",
    image: "",
  },
  {
    name: "Bahan Pokok",
    image: food,
  },
  {
    name: "Insfrastruktur",
    image: building,
  },
  {
    name: "Insfrastrukturr",
    image: building,
  },
];

const cards = [
  {
    id: 1,
    cardImage: cardImage,
    title: "Distribusi Sembako di desa mega timur",
    date: "Jumat, 28 November 2022",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            ab non quam labore aliquid iure, deleniti atque nam obcaecati
            officiis repudiandae quos ipsum eligendi sequi dicta! Quo sequi
            odio ipsum, explicabo adipisci eos, eaque minima id error fugiat
            beatae consectetur?`,
  },
  {
    id: 2,
    cardImage: cardImage,
    title: "Distribusi Sembako di desa mega timur",
    date: "Jumat, 28 November 2022",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            ab non quam labore aliquid iure, deleniti atque nam obcaecati
            officiis repudiandae quos ipsum eligendi sequi dicta! Quo sequi
            odio ipsum, explicabo adipisci eos, eaque minima id error fugiat
            beatae consectetur?`,
  },
  {
    id: 3,
    cardImage: cardImage,
    title: "Distribusi Sembako di desa mega timur",
    date: "Jumat, 28 November 2022",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            ab non quam labore aliquid iure, deleniti atque nam obcaecati
            officiis repudiandae quos ipsum eligendi sequi dicta! Quo sequi
            odio ipsum, explicabo adipisci eos, eaque minima id error fugiat
            beatae consectetur?`,
  },
  {
    id: 4,
    cardImage: cardImage,
    title: "Distribusi Sembako di desa mega timur",
    date: "Jumat, 28 November 2022",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            ab non quam labore aliquid iure, deleniti atque nam obcaecati
            officiis repudiandae quos ipsum eligendi sequi dicta! Quo sequi
            odio ipsum, explicabo adipisci eos, eaque minima id error fugiat
            beatae consectetur?`,
  },
  {
    id: 5,
    cardImage: cardImage,
    title: "Distribusi Sembako di desa mega timur",
    date: "Jumat, 28 November 2022",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            ab non quam labore aliquid iure, deleniti atque nam obcaecati
            officiis repudiandae quos ipsum eligendi sequi dicta! Quo sequi
            odio ipsum, explicabo adipisci eos, eaque minima id error fugiat
            beatae consectetur?`,
  },
  {
    id: 6,
    cardImage: cardImage,
    title: "Distribusi Sembako di desa mega timur",
    date: "Jumat, 28 November 2022",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            ab non quam labore aliquid iure, deleniti atque nam obcaecati
            officiis repudiandae quos ipsum eligendi sequi dicta! Quo sequi
            odio ipsum, explicabo adipisci eos, eaque minima id error fugiat
            beatae consectetur?`,
  },
];

const partnership = [
  {
    id: 1,
    image: untan,
  },
  {
    id: 2,
    image: xl,
  },
  {
    id: 3,
    image: ibt,
  },
  {
    id: 4,
    image: ukm,
  },
];

const social = [
  {
    id: 1,
    image: facebook,
  },
  {
    id: 2,
    image: instagram,
  },
  {
    id: 3,
    image: youtube,
  },
  {
    id: 4,
    image: twitter,
  },
];

const contact = [
  {
    id: 1,
    image: email,
    content: "redaksi@nu.or.id",
  },
  {
    id: 2,
    image: whatsapp,
    content: "(+6221) 3914013",
  },
  {
    id: 3,
    image: call,
    content: "(+6221) 391 4013/14",
  },
];

const dokumentasi = [
  {
    id: 1,
    image: dokumentasi1,
  },
  {
    id: 2,
    image: dokumentasi2,
  },
  {
    id: 3,
    image: dokumentasi3,
  },
  {
    id: 4,
    image: dokumentasi4,
  },
  {
    id: 5,
    image: dokumentasi5,
  },
  {
    id: 6,
    image: cardImage,
  },
];

const donasi = [
  {
    id: 1,
    image: dokumentasi1,
    title: "Distribusi Minyak Goreng",
    slug: "distribusi-minyak-goreng",
    kategori: "Sembako",
    target: 500,
    satuan: "Pcs",
    terkumpul: 185,
    harga: 10000,
    desc: `Kalimantan, 16 September 2020 – Air minum menjadi kebutuhan pokok bagi manusia, selaras dengan anjuran pemerintah untuk seseorang dapat minum air putih minimal 8 gelas per hari. Sejak marak kampanye untuk menghindari air minum dalam kemasan plastik, masyarakat Indonesia mulai tergerak untuk membawa botol minum sendiri dari rumah. Akan tetapi, air minum satu botol saja tidak cukup untuk kebutuhan minum air putih harian, khususnya dengan mobilitas yang tinggi. Spairum meluncurkan produk “Stasiun Pengisian Air Minum” untuk mengakomodir kebutuhan mengisi ulang botol minum bagi masyarakat sekitar. Inisiatif ini dilakukan untuk menghindari pembelian botol minum plastik yang sulit terurai oleh alam, khususnya mengganggu ekosistem laut.Menurut Asosiasi Industri Plastik Indonesia (INAPLAS) dan Badan Pusat Statistik (BPS) di tahun 2019, sampah plastik di Indonesia mencapai 64 juta ton per tahun. Sebanyak 3,2 juta ton di antaranya merupakan sampah plastik yang dibuang ke laut. Karenanya, Spairum meluncurkan Stasiun Pengisian Air Minum bersamaan dengan online talkshow bertajuk, “A Beautiful Indonesia is......`,
    donatur: [
      {
        id: 1,
        name: "Muhammad",
        jumlah: 100,
        doa: "semoga Dapat Bermanfaat dan berguna bagi penerima anak yatim",
      },
      {
        id: 2,
        name: "Hamba Allah",
        jumlah: 10,
        doa: "semoga Dapat Bermanfaat dan berguna bagi penerima anak yatim",
      },
      {
        id: 3,
        name: "Muhammad Syarif",
        jumlah: 40,
        doa: "semoga Dapat Bermanfaat dan berguna bagi penerima anak yatim",
      },
      {
        id: 4,
        name: "Hamba Allah",
        jumlah: 20,
        doa: "semoga Dapat Bermanfaat dan berguna bagi penerima anak yatim",
      },
      {
        id: 5,
        name: "Muhammad Duta",
        jumlah: 15,
        doa: "semoga Dapat Bermanfaat dan berguna bagi penerima anak yatim",
      },
    ],
  },

  {
    id: 2,
    image: dokumentasi2,
    title: "Distribusi Obat",
    slug: "distribusi-obat",
    kategori: "Medis dan Obat-obatan",
    target: 200,
    satuan: "Pcs",
    terkumpul: 160,
    harga: 25000,
    desc: `Kalimantan, 16 September 2020 – Air minum menjadi kebutuhan pokok bagi manusia, selaras dengan anjuran pemerintah untuk seseorang dapat minum air putih minimal 8 gelas per hari. Sejak marak kampanye untuk menghindari air minum dalam kemasan plastik, masyarakat Indonesia mulai tergerak untuk membawa botol minum sendiri dari rumah. Akan tetapi, air minum satu botol saja tidak cukup untuk kebutuhan minum air putih harian, khususnya dengan mobilitas yang tinggi. Spairum meluncurkan produk “Stasiun Pengisian Air Minum” untuk mengakomodir kebutuhan mengisi ulang botol minum bagi masyarakat sekitar. Inisiatif ini dilakukan untuk menghindari pembelian botol minum plastik yang sulit terurai oleh alam, khususnya mengganggu ekosistem laut.Menurut Asosiasi Industri Plastik Indonesia (INAPLAS) dan Badan Pusat Statistik (BPS) di tahun 2019, sampah plastik di Indonesia mencapai 64 juta ton per tahun. Sebanyak 3,2 juta ton di antaranya merupakan sampah plastik yang dibuang ke laut. Karenanya, Spairum meluncurkan Stasiun Pengisian Air Minum bersamaan dengan online talkshow bertajuk, “A Beautiful Indonesia is......`,
    donatur: [
      {
        id: 1,
        name: "Muhammad",
        jumlah: 100,
        doa: "semoga Dapat Bermanfaat dan berguna bagi penerima anak yatim",
      },
      {
        id: 2,
        name: "Hamba Allah",
        jumlah: 5,
        doa: "semoga Dapat Bermanfaat dan berguna bagi penerima anak yatim",
      },
      {
        id: 3,
        name: "Muhammad Syarif",
        jumlah: 20,
        doa: "semoga Dapat Bermanfaat dan berguna bagi penerima anak yatim",
      },
      {
        id: 4,
        name: "Hamba Allah",
        jumlah: 20,
        doa: "semoga Dapat Bermanfaat dan berguna bagi penerima anak yatim",
      },
      {
        id: 5,
        name: "Muhammad Duta",
        jumlah: 15,
        doa: "semoga Dapat Bermanfaat dan berguna bagi penerima anak yatim",
      },
    ],
  },

  {
    id: 3,
    image: dokumentasi3,
    title: "Distribusi Mie Instan",
    slug: "distribusi-mie-instan",
    kategori: "Sembako",
    target: 400,
    satuan: "Pcs",
    terkumpul: 50,
    harga: 20000,
    desc: `Kalimantan, 16 September 2020 – Air minum menjadi kebutuhan pokok bagi manusia, selaras dengan anjuran pemerintah untuk seseorang dapat minum air putih minimal 8 gelas per hari. Sejak marak kampanye untuk menghindari air minum dalam kemasan plastik, masyarakat Indonesia mulai tergerak untuk membawa botol minum sendiri dari rumah. Akan tetapi, air minum satu botol saja tidak cukup untuk kebutuhan minum air putih harian, khususnya dengan mobilitas yang tinggi. Spairum meluncurkan produk “Stasiun Pengisian Air Minum” untuk mengakomodir kebutuhan mengisi ulang botol minum bagi masyarakat sekitar. Inisiatif ini dilakukan untuk menghindari pembelian botol minum plastik yang sulit terurai oleh alam, khususnya mengganggu ekosistem laut.Menurut Asosiasi Industri Plastik Indonesia (INAPLAS) dan Badan Pusat Statistik (BPS) di tahun 2019, sampah plastik di Indonesia mencapai 64 juta ton per tahun. Sebanyak 3,2 juta ton di antaranya merupakan sampah plastik yang dibuang ke laut. Karenanya, Spairum meluncurkan Stasiun Pengisian Air Minum bersamaan dengan online talkshow bertajuk, “A Beautiful Indonesia is......`,
    donatur: [
      {
        id: 1,
        name: "Muhammad",
        jumlah: 20,
        doa: "semoga Dapat Bermanfaat dan berguna bagi penerima anak yatim",
      },
      {
        id: 2,
        name: "Hamba Allah",
        jumlah: 10,
        doa: "semoga Dapat Bermanfaat dan berguna bagi penerima anak yatim",
      },
      {
        id: 3,
        name: "Muhammad Syarif",
        jumlah: 20,
        doa: "semoga Dapat Bermanfaat dan berguna bagi penerima anak yatim",
      },
    ],
  },

  {
    id: 4,
    image: dokumentasi4,
    title: "Distribusi Masker",
    slug: "distribusi-masker",
    kategori: "Medis dan Obat-obatan",
    target: 10000,
    satuan: "Pcs",
    terkumpul: 2500,
    harga: 10000,
    desc: `Kalimantan, 16 September 2020 – Air minum menjadi kebutuhan pokok bagi manusia, selaras dengan anjuran pemerintah untuk seseorang dapat minum air putih minimal 8 gelas per hari. Sejak marak kampanye untuk menghindari air minum dalam kemasan plastik, masyarakat Indonesia mulai tergerak untuk membawa botol minum sendiri dari rumah. Akan tetapi, air minum satu botol saja tidak cukup untuk kebutuhan minum air putih harian, khususnya dengan mobilitas yang tinggi. Spairum meluncurkan produk “Stasiun Pengisian Air Minum” untuk mengakomodir kebutuhan mengisi ulang botol minum bagi masyarakat sekitar. Inisiatif ini dilakukan untuk menghindari pembelian botol minum plastik yang sulit terurai oleh alam, khususnya mengganggu ekosistem laut.Menurut Asosiasi Industri Plastik Indonesia (INAPLAS) dan Badan Pusat Statistik (BPS) di tahun 2019, sampah plastik di Indonesia mencapai 64 juta ton per tahun. Sebanyak 3,2 juta ton di antaranya merupakan sampah plastik yang dibuang ke laut. Karenanya, Spairum meluncurkan Stasiun Pengisian Air Minum bersamaan dengan online talkshow bertajuk, “A Beautiful Indonesia is......`,
    donatur: [
      {
        id: 1,
        name: "Muhammad",
        jumlah: 100,
        doa: "semoga Dapat Bermanfaat dan berguna bagi penerima anak yatim",
      },
      {
        id: 2,
        name: "Hamba Allah",
        jumlah: 2300,
        doa: "semoga Dapat Bermanfaat dan berguna bagi penerima anak yatim",
      },
      {
        id: 3,
        name: "Muhammad Syarif",
        jumlah: 20,
        doa: "semoga Dapat Bermanfaat dan berguna bagi penerima anak yatim",
      },
      {
        id: 4,
        name: "Hamba Allah",
        jumlah: 20,
        doa: "semoga Dapat Bermanfaat dan berguna bagi penerima anak yatim",
      },
      {
        id: 5,
        name: "Muhammad Duta",
        jumlah: 60,
        doa: "semoga Dapat Bermanfaat dan berguna bagi penerima anak yatim",
      },
    ],
  },

  {
    id: 5,
    image: dokumentasi5,
    title: "Bantuan sembako panti asuhan",
    slug: "bantuan-sembako-panti-asuhan",
    kategori: "sosial",
    target: 550,
    satuan: "Pcs",
    terkumpul: 220,
    harga: 50000,
    desc: `Kalimantan, 16 September 2020 – Air minum menjadi kebutuhan pokok bagi manusia, selaras dengan anjuran pemerintah untuk seseorang dapat minum air putih minimal 8 gelas per hari. Sejak marak kampanye untuk menghindari air minum dalam kemasan plastik, masyarakat Indonesia mulai tergerak untuk membawa botol minum sendiri dari rumah. Akan tetapi, air minum satu botol saja tidak cukup untuk kebutuhan minum air putih harian, khususnya dengan mobilitas yang tinggi. Spairum meluncurkan produk “Stasiun Pengisian Air Minum” untuk mengakomodir kebutuhan mengisi ulang botol minum bagi masyarakat sekitar. Inisiatif ini dilakukan untuk menghindari pembelian botol minum plastik yang sulit terurai oleh alam, khususnya mengganggu ekosistem laut.Menurut Asosiasi Industri Plastik Indonesia (INAPLAS) dan Badan Pusat Statistik (BPS) di tahun 2019, sampah plastik di Indonesia mencapai 64 juta ton per tahun. Sebanyak 3,2 juta ton di antaranya merupakan sampah plastik yang dibuang ke laut. Karenanya, Spairum meluncurkan Stasiun Pengisian Air Minum bersamaan dengan online talkshow bertajuk, “A Beautiful Indonesia is......`,
    donatur: [
      {
        id: 1,
        name: "Muhammad",
        jumlah: 80,
        doa: "semoga Dapat Bermanfaat dan berguna bagi penerima anak yatim",
      },
      {
        id: 2,
        name: "Hamba Allah",
        jumlah: 20,
        doa: "semoga Dapat Bermanfaat dan berguna bagi penerima anak yatim",
      },
      {
        id: 3,
        name: "Muhammad Syarif",
        jumlah: 40,
        doa: "semoga Dapat Bermanfaat dan berguna bagi penerima anak yatim",
      },
      {
        id: 4,
        name: "Hamba Allah",
        jumlah: 60,
        doa: "semoga Dapat Bermanfaat dan berguna bagi penerima anak yatim",
      },
      {
        id: 5,
        name: "Muhammad Duta",
        jumlah: 20,
        doa: "semoga Dapat Bermanfaat dan berguna bagi penerima anak yatim",
      },
    ],
  },

  {
    id: 6,
    image: dokumentasi3,
    title: "Distribusi pakaian",
    slug: "distribusi-pakaian",
    kategori: "social",
    target: 200,
    satuan: "Pcs",
    terkumpul: 20,
    harga: 45000,
    desc: `Kalimantan, 16 September 2020 – Air minum menjadi kebutuhan pokok bagi manusia, selaras dengan anjuran pemerintah untuk seseorang dapat minum air putih minimal 8 gelas per hari. Sejak marak kampanye untuk menghindari air minum dalam kemasan plastik, masyarakat Indonesia mulai tergerak untuk membawa botol minum sendiri dari rumah. Akan tetapi, air minum satu botol saja tidak cukup untuk kebutuhan minum air putih harian, khususnya dengan mobilitas yang tinggi. Spairum meluncurkan produk “Stasiun Pengisian Air Minum” untuk mengakomodir kebutuhan mengisi ulang botol minum bagi masyarakat sekitar. Inisiatif ini dilakukan untuk menghindari pembelian botol minum plastik yang sulit terurai oleh alam, khususnya mengganggu ekosistem laut.Menurut Asosiasi Industri Plastik Indonesia (INAPLAS) dan Badan Pusat Statistik (BPS) di tahun 2019, sampah plastik di Indonesia mencapai 64 juta ton per tahun. Sebanyak 3,2 juta ton di antaranya merupakan sampah plastik yang dibuang ke laut. Karenanya, Spairum meluncurkan Stasiun Pengisian Air Minum bersamaan dengan online talkshow bertajuk, “A Beautiful Indonesia is......`,
    donatur: [
      {
        id: 1,
        name: "Muhammad",
        jumlah: 10,
        doa: "semoga Dapat Bermanfaat dan berguna bagi penerima anak yatim",
      },
      {
        id: 2,
        name: "Hamba Allah",
        jumlah: 10,
        doa: "semoga Dapat Bermanfaat dan berguna bagi penerima anak yatim",
      },
    ],
  },

  {
    id: 7,
    image: dokumentasi1,
    title: "Bantuan Semen untuk masjid",
    slug: "bantuan-semen-untuk-masjid",
    kategori: "insfrastruktur",
    target: 300,
    satuan: "Karung",
    terkumpul: 155,
    harga: 100000,
    desc: `Kalimantan, 16 September 2020 – Air minum menjadi kebutuhan pokok bagi manusia, selaras dengan anjuran pemerintah untuk seseorang dapat minum air putih minimal 8 gelas per hari. Sejak marak kampanye untuk menghindari air minum dalam kemasan plastik, masyarakat Indonesia mulai tergerak untuk membawa botol minum sendiri dari rumah. Akan tetapi, air minum satu botol saja tidak cukup untuk kebutuhan minum air putih harian, khususnya dengan mobilitas yang tinggi. Spairum meluncurkan produk “Stasiun Pengisian Air Minum” untuk mengakomodir kebutuhan mengisi ulang botol minum bagi masyarakat sekitar. Inisiatif ini dilakukan untuk menghindari pembelian botol minum plastik yang sulit terurai oleh alam, khususnya mengganggu ekosistem laut.Menurut Asosiasi Industri Plastik Indonesia (INAPLAS) dan Badan Pusat Statistik (BPS) di tahun 2019, sampah plastik di Indonesia mencapai 64 juta ton per tahun. Sebanyak 3,2 juta ton di antaranya merupakan sampah plastik yang dibuang ke laut. Karenanya, Spairum meluncurkan Stasiun Pengisian Air Minum bersamaan dengan online talkshow bertajuk, “A Beautiful Indonesia is......`,
    donatur: [
      {
        id: 1,
        name: "Muhammad",
        jumlah: 70,
        doa: "semoga Dapat Bermanfaat dan berguna bagi penerima anak yatim",
      },
      {
        id: 2,
        name: "Hamba Allah",
        jumlah: 10,
        doa: "semoga Dapat Bermanfaat dan berguna bagi penerima anak yatim",
      },
      {
        id: 3,
        name: "Muhammad Syarif",
        jumlah: 40,
        doa: "semoga Dapat Bermanfaat dan berguna bagi penerima anak yatim",
      },
      {
        id: 4,
        name: "Hamba Allah",
        jumlah: 20,
        doa: "semoga Dapat Bermanfaat dan berguna bagi penerima anak yatim",
      },
      {
        id: 5,
        name: "Muhammad Duta",
        jumlah: 15,
        doa: "semoga Dapat Bermanfaat dan berguna bagi penerima anak yatim",
      },
    ],
  },

  {
    id: 8,
    image: dokumentasi2,
    title: "Bantuan Bata untuk masjid",
    slug: "bantuan-bata-untuk-masjid",
    kategori: "insfrastruktur",
    target: 800,
    satuan: "Bata",
    terkumpul: 450,
    harga: 2000,
    desc: `Kalimantan, 16 September 2020 – Air minum menjadi kebutuhan pokok bagi manusia, selaras dengan anjuran pemerintah untuk seseorang dapat minum air putih minimal 8 gelas per hari. Sejak marak kampanye untuk menghindari air minum dalam kemasan plastik, masyarakat Indonesia mulai tergerak untuk membawa botol minum sendiri dari rumah. Akan tetapi, air minum satu botol saja tidak cukup untuk kebutuhan minum air putih harian, khususnya dengan mobilitas yang tinggi. Spairum meluncurkan produk “Stasiun Pengisian Air Minum” untuk mengakomodir kebutuhan mengisi ulang botol minum bagi masyarakat sekitar. Inisiatif ini dilakukan untuk menghindari pembelian botol minum plastik yang sulit terurai oleh alam, khususnya mengganggu ekosistem laut.Menurut Asosiasi Industri Plastik Indonesia (INAPLAS) dan Badan Pusat Statistik (BPS) di tahun 2019, sampah plastik di Indonesia mencapai 64 juta ton per tahun. Sebanyak 3,2 juta ton di antaranya merupakan sampah plastik yang dibuang ke laut. Karenanya, Spairum meluncurkan Stasiun Pengisian Air Minum bersamaan dengan online talkshow bertajuk, “A Beautiful Indonesia is......`,
    donatur: [
      {
        id: 1,
        name: "Muhammad",
        jumlah: 200,
        doa: "semoga Dapat Bermanfaat dan berguna bagi penerima anak yatim",
      },
      {
        id: 2,
        name: "Hamba Allah",
        jumlah: 100,
        doa: "semoga Dapat Bermanfaat dan berguna bagi penerima anak yatim",
      },
      {
        id: 3,
        name: "Muhammad Syarif",
        jumlah: 50,
        doa: "semoga Dapat Bermanfaat dan berguna bagi penerima anak yatim",
      },
      {
        id: 4,
        name: "Hamba Allah",
        jumlah: 20,
        doa: "semoga Dapat Bermanfaat dan berguna bagi penerima anak yatim",
      },
      {
        id: 5,
        name: "Muhammad Duta",
        jumlah: 80,
        doa: "semoga Dapat Bermanfaat dan berguna bagi penerima anak yatim",
      },
    ],
  },
];

const carausel = [
  {
    id: 1,
    image: carousel1,
  },
  {
    id: 2,
    image: carousel2,
  },
  {
    id: 3,
    image: carousel3,
  },
];

const desc = `Kalimantan, 16 September 2020 – Air minum menjadi kebutuhan pokok bagi
          manusia, selaras dengan anjuran pemerintah untuk seseorang dapat minum
          air putih minimal 8 gelas per hari. Sejak marak kampanye untuk
          menghindari air minum dalam kemasan plastik, masyarakat Indonesia
          mulai tergerak untuk membawa botol minum sendiri dari rumah. Akan
          tetapi, air minum satu botol saja tidak cukup untuk kebutuhan minum
          air putih harian, khususnya dengan mobilitas yang tinggi. Spairum
          meluncurkan produk “Stasiun Pengisian Air Minum” untuk mengakomodir
          kebutuhan mengisi ulang botol minum bagi masyarakat sekitar. Inisiatif
          ini dilakukan untuk menghindari pembelian botol minum plastik yang
          sulit terurai oleh alam, khususnya mengganggu ekosistem laut.Menurut
          Asosiasi Industri Plastik Indonesia (INAPLAS) dan Badan Pusat
          Statistik (BPS) di tahun 2019, sampah plastik di Indonesia mencapai 64
          juta ton per tahun. Sebanyak 3,2 juta ton di antaranya merupakan
          sampah plastik yang dibuang ke laut. Karenanya, Spairum meluncurkan
          Stasiun Pengisian Air Minum bersamaan dengan online talkshow bertajuk,
          “A Beautiful Indonesia is A Waste Free Indonesia”. Acara ini juga
          merupakan rangkaian dari program Young Changemakers Social Enterprise
          Academy, sebuah program peningkatan kualitas usaha sosial yang digagas
          oleh @america bersama Campaign.com. Sebagai salah satu finalis dalam
          program tersebut, Spairum berkomitmen untuk melakukan inovasi di
          tengah tatanan baru untuk mengajak masyarakat konsisten mengurangi
          penggunaan plastik sekali pakai.The World Bank di 2018, sebanyak 87
          kota di pesisir Indonesia memberikan kontribusi sampah ke laut sekitar
          1,27 juta ton, dengan komposisi sampah plastik mencapai 9 juta ton.
          Sebanyak 4,82 miliar diantaranya merupakan sampah botol plastik,
          seperti dilansir dari World Atlas bahwa Indonesia merupakan negara
          ke-4 pengguna botol plastik terbanyak di dunia. Melalui talkshow
          online ini, Spairum ingin mengingatkan kembali pada masyarakat
          Indonesia untuk konsisten mengurangi sampah plastik, khususnya botol
          plastik sekali pakai untuk kelestarian lingkungan. Selain itu,
          memperdalam wawasan mengenai hal tersebut dari para ahli yang hadir
          dalam talkshow tersebut.`;

export {
  carousel1,
  carousel2,
  carousel3,
  next,
  prev,
  calendar,
  cardImage,
  cardOverlay,
  girl,
  footer,
  bca,
  briSyariah,
  desc,
  categories,
  cards,
  partnership,
  social,
  contact,
  dokumentasi,
  donasi,
  carausel,
};
