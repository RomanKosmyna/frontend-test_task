/* Was used to fetch html files and populate
the corresponding tag elements in index.html,
but this approach would not work on a local machine since
it requires them to be served by a server */


// const htmlFolder = "html";
//
// const stitchHeader = () => {
//     const headerElement = document.querySelector("header");
//
//     fetch(`${htmlFolder}/header.html`)
//         .then(res => res.text())
//         .then(data => {
//             headerElement.innerHTML = data;
//         });
// };
//
// stitchHeader();
//
// const stitchBurgerMenu = () => {
//     const menuElement = document.querySelector("#burger_menu");
//
//     fetch(`${htmlFolder}/burger_menu.html`)
//         .then(res => res.text())
//         .then(data => {
//             menuElement.innerHTML = data;
//         });
// };
//
// stitchBurgerMenu();
//
// const stitchSectionOne = () => {
//   const sectionOneElement = document.querySelector("#section_one");
//
//   fetch(`${htmlFolder}/section_one.html`)
//       .then(res => res.text())
//       .then(data => {
//           sectionOneElement.innerHTML = data;
//           twinklingAnimation();
//           speechCloud();
//       });
// };
//
// stitchSectionOne();
//
// const stitchSectionTwo = () => {
//     const sectionOneElement = document.querySelector("#section_two");
//
//     fetch(`${htmlFolder}/section_two.html`)
//         .then(res => res.text())
//         .then(data => {
//             sectionOneElement.innerHTML = data;
//         });
// };
//
// stitchSectionTwo();
//
// const stitchSectionThree = () => {
//     const sectionOneElement = document.querySelector("#section_three");
//
//     fetch(`${htmlFolder}/section_three.html`)
//         .then(res => res.text())
//         .then(data => {
//             sectionOneElement.innerHTML = data;
//         });
// };
//
// stitchSectionThree();