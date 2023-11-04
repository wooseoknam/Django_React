// import { useState } from "react";
// // import React from "react";

// export default function useValidate(initialValue) {
//     const [value, setValue] = useState(initialValue);

//     const onSubmit = (e) => {
//         setValue(e.target.value);
//     };

//     const ageValidator = (value) => {
//         if (value < 1) {
//             return {
//                 isValid: false,
//                 message: '나이는 1보다 작을 수 없습니다.',
//             };
//         } else {
//             return { isValid: true, message: '' };
//         }
//     };

//     const nameValidator = (value) => {
//         const checkSpc = /[~!@#$%^&*()_+|<>?:{}]/;
//         if (checkSpc.test(value)) {
//             return {
//                 isValid: false,
//                 message: '이름에 특수문자는 입력할 수 없습니다.',
//             };
//         } else {
//             return { isValid: true, message: '' };
//         }
//     };

//     const validate = () => {
//         if (typeof value === 'string') {
//           return nameValidator(value);
//         } else if (typeof value === 'number') {
//           return ageValidator(value);
//         } else {
//           return { isValid: false, message: '유효하지 않은 값입니다.' };
//         }
//       };

//       return { value, setValue, validate, onSubmit };
// }









// import { useState } from "react";

// export default function useValidate() {
//     const [name, setName] = useState();
//     const [age, setAge] = useState();
//     const [nameError, setNameError] = useState('');
//     const [ageError, setAgeError] = useState('');

//     const handleNameChange = (e) => {
//         const value = e.target.value;
//         const checkSpc = /[~!@#$%^&*()_+|<>?:{}]/;

//         if (!checkSpc.test(value)) {
//             setName(value);
//         } else if (value === 'undefined') {
//             setName('');
//             setNameError('이름 필수');
//         } else {
//             setName('');
//             setNameError('특수문자');
//         }

//     };

//     const handleAgeChange = (e) => {
//         const value = Number(e.target.value);
//         console.log(value);
//         if (value < 1) {
//             setAge('');
//             setAgeError('나이는 1보다 작을 수 없음.');
//         } else if (!value) {

//             setAgeError('나이 입력')
//         } else {
//             setAge(value);
//         }

//     };

//   return { name, age, nameError, ageError, handleNameChange, handleAgeChange };
// }


import { useState, useEffect } from "react";

export default function useValidate() {
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [nameError, setNameError] = useState(false);
    const [ageError, setAgeError] = useState(false);

    useEffect(() => {
        const regex = /[~!@#$%^&*()_+|<>?:{}]/;
        if (regex.test(name)) {
            setNameError(true);
        } else {
            setNameError(false);
        }
    }, [name]);

    useEffect(() => {
        if (age < 1) {
            setAgeError(true);
        } else {
            setAgeError(false);
        }
    }, [age]);

    return { name, setName, age, setAge, nameError, ageError, };
}