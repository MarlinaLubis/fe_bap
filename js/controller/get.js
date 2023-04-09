import { get } from "https://bukulapak.github.io/api/process.js";
import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "../temp/table.js";
let urlAPI = "https://marlinapp.herokuapp.com/bap";
get(urlAPI, isiTableBap);
function isiTableBap(results) {
  results.forEach(isiRow);
}

function isiRow(value) {
    let content = 
    isiTabel
            .replace("#JUDUL#", value.judul)
            .replace("#NAMASISWA#", value.nama_mahasiswa)
            .replace("#PRODI#", value.prodi)
            .replace("#HASILREVISI#", value.hasil_revisi)
            .replace("#DOSEN#", value.dosen)
            .replace("#WARNA#", getRandomColor())
            .replace(/#WARNALOGO#/g, getRandomColorName());
        addInner("iniTabel", content);
}