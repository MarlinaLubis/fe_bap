import { get } from "https://bukulapak.github.io/api/process.js";
import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "./table.js";
let urlAPI = "https://marlinapp.herokuapp.com/bap";
get(urlAPI, isiTableBap);
function isiTableBap(results) {
  results.forEach(isiRow);
}

function isiRow(value) {
    let content = 
    isiTabel.replace("#JUDUL#", value.bap.judul)
            .replace("#NAMAMAHASISWA#", value.bap.nama_mahasiswa)
            .replace("#PRODI#", value.bap.prodi)
            .replace("#HASILREVISI#", value.bap.hasil_revisi)
            .replace("#DOSEN#", value.bap.dosen)
            .replace("#WARNA#", getRandomColor())
            .replace(/#WARNALOGO#/g, getRandomColorName());
        addInner("iniTabel", content);
}