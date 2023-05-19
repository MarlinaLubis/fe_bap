import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "../temp/table.js";
let urlAPI = "https://lubisapp.herokuapp.com/bap";
export function isiTableBap(results) {
    results.forEach(isiRow);
}
function isiRow(value) {
    let content = 
    isiTabel.replace("#JUDUL#", value.judul)
            .replace("#NAMAMAHASISWA#", value.nama_mahasiswa)
            .replace("#PRODI#", value.prodi)
            .replace("#HASILREVISI#", value.hasil_revisi)
            .replace("#DOSEN#", value.dosen)
            .replace("#WARNA#", getRandomColor())
            .replace(/#WARNALOGO#/g, getRandomColorName());
        addInner("iniTabel", content);
}