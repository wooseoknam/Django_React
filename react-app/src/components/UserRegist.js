// import { useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import React from "react";
// import useValidate from "../hooks/useValidate";
// // import useNameValidate from "../hooks/useNameValidate";
// // import useAgeValidate from "../hooks/useAgeValidate";

// export default function UserResist() {
//     const { value: userName, setValue: setUserName, validate: validateName, onSubmit: handleSubmit } = useValidate('');
//     const { value: userAge, setValue: setUserAge, validate: validateAge } = useValidate('');
//     const { value: userImage, setValue: setUserImage } = useValidate(null);
//     const imageRef = useRef();

//     const handleImageChange = (event) => {
//         setUserImage(event.target.files[0]);
//     };

//     const handleFormSubmit = async (event) => {
//         event.preventDefault();
    
//         const isValidName = validateName();
//         const isValidAge = validateAge();
    
//         if (!isValidName.isValid) {
//           alert(isValidName.message);
//         }
    
//         if (!isValidAge.isValid) {
//           alert(isValidAge.message);
//         }
    
//         const formData = new FormData();
//         formData.append('name', userName);
//         formData.append('age', userAge);
//         formData.append('image', userImage);
    
        
//     };

//     function onSubmit(e) {
//         e.preventDefault();
//         const formData = new FormData();

//         formData.append("name", nameRef.current.value);
//         formData.append("age", ageRef.current.value);
//         if (imageRef.current.files[0]) {
//             formData.append("image", imageRef.current.files[0]);
//         } else {
//             formData.append("image", '');
//         }
        
//         fetch("http://localhost:8000/api/", {
//             method: 'POST',
//             headers: {
//                 // 'Content-Type': 'multipart/form-data',
//             },
//             body: formData,
//         }).then(res => {
//             if (res.ok) {
//                 alert('등록 완료');
//                 navigate(`/users/`);
//             }
//         });
//     }


//     return (
//         <form onSubmit={onSubmit}>
//             <div className="input_area">
//                 <label>이름</label>
//                 <input type="text" ref={nameRef} value={userName} onChange={handleNameChange}/>
//             </div>
//             <div className="input_area">
//                 <label>나이</label>
//                 <input type="number" ref={ageRef} value={userAge} onChange={handleAgeChange}/>
//             </div>
//             <div className="input_area">
//                 <label>사진</label>
//                 <input type="file" id="image" accept="image/*" ref={imageRef} onChange={handleImageChange}/>
//             </div>
//                 <button type="submit">저장</button>
//         </form>
//     );
// }





import { useNavigate } from "react-router-dom";
import React from "react";
import { useForm } from "react-hook-form";

export default function UserResist() {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange', defaultValues: {'name' : 'aa'}});    

    function onSubmit(data) {
        const formData = new FormData();
        console.log(data);
        formData.append("name", data.name);
        formData.append("age", data.age);
        if (data.image[0]) {
            formData.append("image", data.image[0]);
        } else {
            formData.append("image", '');
        }

        fetch("http://localhost:8000/api/all/", {
            method: 'POST',
            headers: {
                // 'Content-Type': 'multipart/form-data',
            },
            body: formData,
        }).then(res => {
            if (res.ok) {
                navigate(`/users/`);
            } else {
                alert("이미지 파일이 손상되었습니다.");
            }
        });
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>이름</label>
                <input
                    id="name"
                    type="text"
                    {...register("name", {
                        required: "이름은 필수 입력입니다.",
                        pattern: {
                            value: /^[a-zA-Z]*$/,
                            message: "알파벳만 입력.",
                        },
                    })}
                />
                {errors.name && <small role="alert">{errors.name.message}</small>}
            </div>
            <div>
                <label>나이</label>
                <input 
                    id="age"
                    type="number"
                    {...register("age",{
                        required: "나이는 필수 입력입니다.",
                        min:{
                            value: 1,
                            message: "나이는 1보다 작을 수 없음.",
                        },
                    })}
                />
                {errors.age && <small role="alert">{errors.age.message}</small>}
            </div>
            <div>
                <label>사진</label>
                <input 
                    id="image"
                    type="file"
                    accept="image/*"
                    {...register("image")}
                />
            </div>
            <button type="submit">저장</button>
        </form>
    );
}









// import { useState } from 'react';
// import useValidate from '../hooks/useValidate';
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function UserRegist() {
//     const navigate = useNavigate();
//     const { name, age, nameError, ageError, handleNameChange, handleAgeChange } = useValidate();
//     const [image, setImage] = useState('');

//     const handleImageChange = (e) => {
//         if (e.target.files[0]) {
//             setImage(e.target.files[0]);
//         } else {
//             setImage('');
//         }
//     };

//     const onSubmit = (e) => {
//         e.preventDefault();

//         const formData = new FormData();
//         formData.append('name', name);
//         formData.append('age', age);
//         formData.append('image', image);

//         fetch("http://localhost:8000/api/", {
//             method: 'POST',
//             headers: {
//                 // 'Content-Type': 'multipart/form-data',
//             },
//             body: formData,
//             }).then(res => {
//                 if (res.ok) {
//                     alert('등록 완료');
//                     navigate(`/users/`);
//                 } else {
//                     alert('입력을 확인하세요.')
//                 }
//         });
//     }

//     return (
//         <form onSubmit={onSubmit}>
//         <div className="input_area">
//             <label>이름</label>
//             <input type="text" value={name} onChange={handleNameChange} />
//             {nameError && <small role="alert">{nameError}</small>}
//         </div>
//         <div className="input_area">
//             <label>나이</label>
//             <input type="number" value={age} onChange={handleAgeChange} />
//             {ageError && <small role="alert">{ageError}</small>}
//         </div>
//         <div>
//             <label>사진</label>
//             <input id='image' type="file" accept='image/*' onChange={handleImageChange} />
//         </div>
//         <button type="submit">저장</button>
//         </form>
//     );
// }




// import useValidate from '../hooks/useValidate';
// import React, { useState } from 'react';

// export default function UserRegist() {
//     const { name, setName, age, setAge, nameError, ageError } = useValidate('', 0);
//     const [image, setImage] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (!nameError && !ageError) {
//             alert('등록 완료');
//         } else {
//             alert('이름, 나이 확인');
//         }
//     };

//     const handleImageChange = (e) => {
//         if (e.target.files[0]) {
//             setImage(e.target.files[0]);
//         } else {
//             setImage('');
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label>이름</label>
//                 <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//                 {nameError && <span>특수문자를 포함할 수 없습니다.</span>}
//             </div>
//             <div>
//                 <label>나이</label>
//                 <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} />
//                 {ageError && <span>나이는 1보다 커야 합니다.</span>}
//             </div>
//             <div>
//                 <label>사진</label>
//                 <input id='image' type="file" accept='image/*' onChange={handleImageChange} />
//             </div>
//             <button type="submit">등록</button>
//         </form>
//     );
// }