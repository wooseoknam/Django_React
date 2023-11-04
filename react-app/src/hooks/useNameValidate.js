import { useState } from "react";

export default function useNameValidate(initialValue) {
    const [value, setValue] = useState(initialValue);
    

    const nameValidator = (value) => {
        const checkSpc = /[~!@#$%^&*()_+|<>?:{}]/;
        if (checkSpc.test(value)) {
            return {
                isValid: false,
                message: '이름에 특수문자는 입력할 수 없습니다.',
            };
        } else {
            return { isValid: true, message: '' };
        }
    };

    const onChange = (e) => {
        const result = nameValidator(e.target.value);
        if (result.isValid) {
            setValue(e.target.value);
        }
        else {
            alert(result.message);
        }
    };

    return { value, onChange };
}
