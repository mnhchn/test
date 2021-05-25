// Bai 1
// let str_input = "program";

// let reverse = []
//   for (i = str_input.length - 1; i >= 0; i--); {
//     reverse += str_input[i]
//   }
//   console.log(reverse);

// Bai 2
// function toUpperCase(str){
//     let arr = str.split("");
//     arr[0]= arr[0].toUpperCase()
//     let newStr = arr.join(""); 
//     return newStr 
// }
// console.log(toUpperCase("this is Test"));

// Bai 3
// let arr = [1,2,3,3,4,5,4,4,4,5,5]

// let arrFilter = arr.filter((item, index) => arr.indexOf(item) === index);
// console.log(arrFilter);

// Bai 4
// let profile = [
//     {   
//         id: 1,
//         Ten: 'Nam',
//         Tuoi: 24,
//         Luong: 13000000,
//         Chuc: 'NVKD'
//     },
//     {   
//         id: 2,
//         Ten: 'Duc',
//         Tuoi: 25,
//         Luong: 10000000,
//         Chuc: 'Chuyen vien'
//     },
//     {   
//         id: 3,
//         Ten: 'Hoa',
//         Tuoi: 22,
//         Luong: 11000000,
//         Chuc: 'Ke toan'
//     },
// ];



// let isloop = true;
// while (isloop) {
// let input = prompt('Enter your command (Read, Create, Update, Delete)');
//     if (input ==='Read') {
//         console.log('Danh sach nhan vien');
//     for (let i = 0; i < profile.length; i++) {
//     console.log(`${i+1}. ${profile[i].Ten}
//    Tuoi: ${profile[i].Tuoi}
//    Luong: ${profile[i].Luong}
//    Chuc: ${profile[i].Chuc}`);
//     }
//     }
//     else if (input === 'Create') {
//     let Ten = prompt('Nhap ten');
//     let Tuoi = Number(prompt('Nhap tuoi'));
//     let Luong = Number(prompt('Nhap luong'));
//     let Chuc = prompt('Nhap chuc vu');
//         let newProcesss = {
//             id : profile.length + 1,
//             Ten : Ten,
//             Tuoi : Tuoi, 
//             Luong : Luong,
//             Chuc : Chuc
//         }
//         profile.push(newProcesss);
//         console.log('Danh sach nhan vien');
//         for (let i = 0; i < profile.length; i++) {
//         console.log(`${i+1}. ${profile[i].Ten}
//        Tuoi: ${profile[i].Tuoi}
//        Luong: ${profile[i].Luong}
//        Chuc: ${profile[i].Chuc}`);
// }
// } else if (input === 'Update') {
//     let newId = Number(prompt('Nhap id:'));
//     if(newId < 0 && idUsertask >= process.length) {
//                 alert('Error');
//     } else {
//     let newTen = prompt('Nhap ten ');
//     let newTuoi = Number(prompt('Enter tuoi'));
//     let newLuong = Number(prompt('Enter luong'));
//     let newChuc = prompt('Enter chuc vu');
//         profile[newId-1].Ten = newTen;
//         profile[newId-1].Tuoi = newTuoi;
//         profile[newId-1].Tuoi = newTuoi;
//         profile[newId-1].Luong = newLuong;
//         profile[newId-1].Chuc = newChuc;
//         console.log('Danh sach nhan vien');
//         for (let i = 0; i < profile.length; i++) {
//         console.log(`${i+1}. ${profile[i].Ten}
//        Tuoi: ${profile[i].Tuoi}
//        Luong: ${profile[i].Luong}
//        Chuc: ${profile[i].Chuc}`);
//      }
// }
// } else if (input === 'Delete') {
//     let id3 = Number(prompt('Enter id:'));
//     if(id3 < 0 && id3 >= profile.length) {
//         alert('Error');
//     } else {
//     profile.splice(id3-1, 1);
//     for (let i = 0; i < profile.length; i++) {
//         console.log('Danh sach nhan vien');
//         console.log(`${i+1}. ${profile[i].Ten}
//        Tuoi: ${profile[i].Tuoi}
//        Luong: ${profile[i].Luong}
//        Chuc: ${profile[i].Chuc}`);
//     }
// }
// } else if (input = 'Exit') {
//             isloop = false;
// } else {
//     alert('Enter your command (Read, Create, Update, Delete)');
// }
// }

// Bai 5
// console.log("em khong lam dc bai 5 :((");
