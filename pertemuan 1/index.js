// const percobaan = function () {
//     console.log("hello");
// }

// percobaan();

// function panggilFunction2Kali(fungsi){
//     fungsi();
//     fungsi();
// }
// panggilFunction2Kali(function(){
//     console.log("Hello World!");
// });

// const hallo = (nama) =>{
//     return "selamat datang " +nama;
// }

// hallo();//tidak akan muncul karena return
// console.log(hallo("Aditia"));

function number(a,b, ...c){
    console.log(a);
    console.log(b);
    console.log(c);
}
number(1,2,"hello","world","good",3);