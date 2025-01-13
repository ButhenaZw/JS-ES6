// const orange = (jo) => jo.split(" ");

// const text = "Orange Jordan";
// const result = orange(text);
// console.log(result);

///////////////Task2///////////
// const phone = (number) => number.toString().replace(/^.{7}/, "*******");

// const num = 0776807777;
// const result = phone(num);
// console.log(result);


// //////////Task3//////////
// const hide= (email) => {
//     const em = email.split("@");
//     const first = em[0];
//     const last = em[1];
//         return `${first.substring(0, 6)}...@${last.split(".")[0]}.com`;
//   }
//     const emails = "orange_academy@orange.jo";
//   const result = hide(emails);
//   console.log(result);
// //////////////Task4///////////////
// const  cap = (inp) => {
//     return inp.split(" ").map((word, text) => {
//       if (text === 0) {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//       }
//       return word;
//     }).join(" ");
//   }
//   const texts = "coding academy by orange";
//   const result = cap(texts);
//   console.log(result);
// ////////////////Task5//////////////////
// const cap = (ino) => {
//     return ino
//       .split(" ")
//       .map(texts => texts.charAt(0).toUpperCase() + texts.slice(1))
//       .join(" ");
//   }
//     const text = "coding academy by orange";
//   const result = cap(text);
//   console.log(result);
// ///////////////Task6////////////////
// const f = (num) => {
//     return parseInt(num.toString().split('').reverse().join(''));
//   }
//   const text = 92485;
//   const result = f(text);
//   console.log(result);
// //////////////Task7///////////
// const index = (text, ind) => {
//     return text.slice(2, ind) + text.slice(ind + 1);
//   } //////////////عندي خطا بيطلع age  مو orage
//   const text = "Orange";
// const remove = 3;
// console.log(index(text , remove));
// /////////////////Task8////////////
// const alpha = (a, b)  => {
//     let test = a;
//     a = b;
//     b = test;
//     console.log(`a = ${a}, b = ${b}`);
//   }
//   alpha(3, 4);
// ///////////////Task9///////////////
// const merge =(fr, sec) => fr.slice(2) + sec.slice(1);
//   ///////////////عندي خطا هون في الكلمه 
//     const text1 = "lora";
//   const text2 = "inge";
//     const result = merge(text1, text2);
//   console.log(result)
// //////////////Task10////////////////
// const swap = (text, alpha) => {
//     return alpha[0] === text || alpha[alpha.length -5] === text;
//   }
//     console.log(swap("o", "orange"));
//   console.log(swap("z", "orange"));
// //////////////Task11/////////////////////
// const words = (inp) => {
//     return inp.split(" ");
//   }
//     const inf = "Coding Academy by Orange";
//   const result = words(inf);
//   console.log(result);
// ///////////////////Task12////////////
// const alpha = (inp) => {
//     return inp.split("").sort();
//   }//////////////متفرقين عن بعض
//   const inf = "Orange";
//   const result = alpha(inf.toLowerCase());
//   console.log(result);
////////////////////Task13
// const mes = (callback) => {
//     const start = performance.now();
//     callback();
//     const end = performance.now();
//     console.log(`${end - start} ms`);
// };
// const testt = () => {
//     for (let i = 0; i < 1e6; i++) {
//         Math.sqrt(i);
//     }
// };
// mes(testt);

  
  
  

  

  