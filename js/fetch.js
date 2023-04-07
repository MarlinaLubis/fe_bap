import { get } from "https://bukulapak.github.io/api/process.js"; 
let urlAPI = "https://marlinapp.herokuapp.com/bap";
get(urlAPI,isiTableBap);
function isiTableBap(results){
    console.log(results);
}