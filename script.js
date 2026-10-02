const siswa1 = {
    nama: "Faril",
    kelas: "X.1 AB",
    umur: 15,
    alamat: {
        jalan: "Jl. Merdeka No. 10",
        kota: "Jakarta"
    },
    notelp: "082220570412"
};
const siswa2 = {
    nama: "Rizki",
    kelas: "X.1 AB",
    umur: 16,
    alamat: "Jl. Diponegoro No. 20",
    notelp: "081234567890"
};

const siswa = [
   { nama: "Andi",kelas: "X.1 AB", alamat: "Jl. Merdeka No. 10", notelp: "082220570412", umur: 15 },
   { nama: "Fatan",kelas: "X.1 AB", alamat: "Jl. Gajah Mada No. 15", notelp: "081234567891", umur: 16 },
   { nama: "Rizki",kelas: "X.1 AB", alamat: "Jl. Diponegoro No. 20", notelp: "081234567890", umur: 17 },
   { nama: "Faril",kelas: "X.1 AB", alamat: "Jl. Merdeka No. 10", notelp: "082220570412", umur: 15 }
];

console.log("Namanya", siswa[0].nama, "umurnya", siswa[0].umur);
console.log("Namanya", siswa[1].nama, "umurnya", siswa[1].umur);
