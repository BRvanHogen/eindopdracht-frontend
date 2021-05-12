// import React from 'react';
// import { useForm } from 'react-hook-form';
// import Button from "../components/button/Button";
//
//
// function Wrapper() {
//     const {handleSubmit, register, formState: {errors}} = useForm();
//
//     async function fileToBase64(filename, filepath) {
//
//         return new Promise(resolve => {
//             var file = new File([filename], filepath);
//             var reader = new FileReader();
//             // Read file content on file loaded event
//             reader.onload = function (event) {
//                 resolve(event.target.result);
//             };
//
//             // Convert data to base64
//             reader.readAsDataURL(file);
//         });
//
//
// // // Example call:
// //     fileToBase64("test.pdf", "../files/test.pdf").then(result => {
// //         console.log(result);
// //     });
//
//
//         return (
//             <>
//                 <form onSubmit={handleSubmit(fileToBase64)}>
//                     <input
//                         type="file"
//                         name="file"
//                         {...register('soundfile')}
//                     />
//                     <Button
//                         type="submit"
//                         text="submit bitch!"
//                     />
//                 </form>
//             </>
//         );
//     }
// }
//
// export default Wrapper;