let kegiatan = []

function tambahData(){
   
    var tanggal = document.getElementById("tanggalData").value
    var jam = document.getElementById("jamData").value
    var amPm = document.getElementById("amOrpm").value
    var keg = document.getElementById("activities").value
    var link = document.getElementById("linkGambar").value

    kegiatan.push({
        tanggal: tanggal,
        jam: jam,
        amPm: amPm,
        keg: keg,
        link: link

     })
     var a = ``
     for(let i=0; i<kegiatan.length ; i++){
         var b= ""
         var res = `<tr>
         <td> ${kegiatan[i].tanggal} </td>
         <td> ${kegiatan[i].jam} </td>
         <td> ${kegiatan[i].amPm} </td>
         <td> ${kegiatan[i].keg} </td>
         <td> ${kegiatan[i].link} </td>
         <td> <button> Edit</button>
         <button> Hapus </button> </td>
         </tr>
         `
     }
     a+=b
document.getElementById("masukData").innerHTML = a
}