const lukisan = [
    {nama: "Almond Blossom", tahun: 1890},
    {nama: "Sunflower", tahun: 1887},
    {nama: "Starry Night", tahun: 1889}
];

let pesan = "Daftar Karya Van Gogh: \n\n";

for (const karya of lukisan) {
    pesan = pesan + karya.nama + " - " + karya.tahun + "\n";
}

alert(pesan);

let angka1 = 70;
let angka2 = 7;
let angka3 = 10;

let angka4 = angka1 + angka2;
let hasil = angka4 - angka3;

alert(hasil);