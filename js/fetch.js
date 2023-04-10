// import { get } from "https://bukulapak.github.io/api/process.js";
// import { isiTableBap } from "./controller/get.js";
// import { urlAPI } from "./config/url.js";
// get(urlAPI, isiTableBap);

import { get } from "https://bukulapak.github.io/api/process.js";
import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "./temp/table.js";
let urlAPI = "https://marlinapp.herokuapp.com/bap";
get(urlAPI, isiTableBap);
function isiTableBap(results) {
    results.forEach(isiRow);
}
function isiRow(value) {
    let content = 
    isiTabel.replace("#JUDUL#", value.judul)
            .replace("#NAMAMAHASISWA#", value.Nama_Mahasiswa)
            .replace("#PRODI#", value.Prodi)
            .replace("#HASILREVISI#", value.Hasil_revisi)
            .replace("#DOSEN#", value.Dosen)
            .replace("#WARNA#", getRandomColor())
            .replace(/#WARNALOGO#/g, getRandomColorName());
        addInner("iniTabel", content);
}