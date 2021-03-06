/** @format */

"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "cities",
      [
        {
          city: "Banda Aceh",
          province: "Aceh",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Langsa",
          province: "Aceh",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Lhoksumawe",
          province: "Aceh",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Sabang",
          province: "Aceh",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Subulussaalam",
          province: "Aceh",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Denpasar",
          province: "Bali",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Pangkalpinang",
          province: "Bangka Belitung",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Cilegon",
          province: "Banten",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Serang",
          province: "Banten",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Tangerang Selatan",
          province: "Banten",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Tangerang",
          province: "Banten",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Bengkulu",
          province: "Bengkulu",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Daerah Istimewa Yogyakarta",
          province: "Yogyakarta",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Gorontalo",
          province: "Gorontalo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Kota Administrasi Jakarta Pusat",
          province: "Jakarta",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Kota Administrasi Jakarta Selatan",
          province: "Jakarta",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Kota Administrasi Jakarta Barat",
          province: "Jakarta",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Kota Administrasi Jakarta Timur",
          province: "Jakarta",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Kota Administrasi Jakarta Utara",
          province: "Jakarta",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Sungai Penuh",
          province: "Jami",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Jambi",
          province: "Jambi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Bandung",
          province: "Jawa Barat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Bekasi",
          province: "Jawa Barat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Bogor",
          province: "Jawa Barat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Cimahi",
          province: "Jawa Barat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Cirebon",
          province: "Jawa Barat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Depok",
          province: "Jawa Barat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Sukabumi",
          province: "Jawa Barat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Tasikmalaya",
          province: "Jawa Barat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Banjar",
          province: "Jawa Barat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Magelang",
          province: "Jawa Tengah",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Pekalongan",
          province: "Jawa Tengah",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Salatiga",
          province: "Jawa Tengah",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Semarang",
          province: "Jawa Tengah",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Surakarta",
          province: "Jawa Tengah",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Tegal",
          province: "Jawa Tengah",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Batu",
          province: "Jawa Timur",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Blitar",
          province: "Jawa Timur",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Kediri",
          province: "Jawa Timur",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Madiun",
          province: "Jawa Timur",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Malang",
          province: "Jawa Timur",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Mojokerto",
          province: "Jawa Timur",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Pasuruan",
          province: "Jawa Timur",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Probolinggo",
          province: "Jawa Timur",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Surabaya",
          province: "Jawa Timur",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Pontianak",
          province: "Kalimantan  Barat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Singkawang",
          province: "Kalimantan  Barat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Banjarbaru",
          province: "Kalimantan  Selatan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Banjarmasin",
          province: "Kalimantan  Selatan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Palangka Raya",
          province: "Kalimantan  Tengah",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Balikpapan",
          province: "Kalimantan  Timur",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Bontang",
          province: "Kalimantan  Timur",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Samarinda",
          province: "Kalimantan  Timur",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Tarakan",
          province: "Kalimantan  Utara",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Batam",
          province: "Kepulauan Riau",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Tanjung Pinang",
          province: "Kepulauan Riau",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Lampung",
          province: "Bandar Lampung",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Metro",
          province: "Lampung",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Ternate",
          province: "Maluku Utara",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Tidore Keplauan",
          province: "Maluku Utara",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Ambon",
          province: "Maluku",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Tual",
          province: "Maluku",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Bima",
          province: "Nusa Tenggara Barat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Mataram",
          province: "Nusa Tenggara Barat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Kupang",
          province: "Nusa Tenggara Timur",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Sorong",
          province: "Papua Barat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Jayapura",
          province: "Papua",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Dumai",
          province: "Riau",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Pekanbaru",
          province: "Riau",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Makassar",
          province: "Sulawesi Selatan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Palopo",
          province: "Sulawesi Selatan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Parepare",
          province: "Sulawesi Selatan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Palu",
          province: "Sulawesi Tengah",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Baubau",
          province: "Sulawesi Tenggara",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Kendari",
          province: "Sulawesi Tenggara",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Bitung",
          province: "Sulawesi Utara",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Kotamobagu",
          province: "Sulawesi Utara",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Manado",
          province: "Sulawesi Utara",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Tomohon",
          province: "Sulawesi Utara",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Bukittinggi",
          province: "Sumatra Barat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Padang",
          province: "Sumatra Barat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Padang Panjang",
          province: "Sumatra Barat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Pariaman",
          province: "Sumatra Barat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Payakumbuh",
          province: "Sumtra Barat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Sawahlunto",
          province: "Sumatra Barat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Solok",
          province: "Sumatra Barat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Lubuklinggau",
          province: "Sumatra Selatan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Pagar Alam",
          province: "Sumatra Selatan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Palembang",
          province: "Sumatra Selatan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Prabumulih",
          province: "Sumatra Selatan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Binjai",
          province: "Sumatra Utara",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Gunung Sitoli",
          province: "Sumatra Utara",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Medan",
          province: "Sumatra Utara",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Padang Sidempuan",
          province: "Sumatra Utara",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Pematang Siantar",
          province: "Sumatra Utara",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Sibolga",
          province: "Sumatra Utara",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Tanjung Balai",
          province: "Sumatra Utara",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Tebing Tinggi",
          province: "Sumatra Utara",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
