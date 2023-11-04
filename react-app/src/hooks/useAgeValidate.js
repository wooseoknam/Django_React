import { useState } from "react";

export default function useAgeValidate(initialValue) {
    const [value, setValue] = useState(initialValue);

    const ageValidator = (value) => {
        if (value < 1) {
            return {
                isValid: false,
                message: '나이는 1보다 작을 수 없습니다.',
            };
        } else {
            return { isValid: true, message: '' };
        }
    };
    const onChange = (e) => {
        const result = ageValidator(e.target.value);
        if (result.isValid) {
            setValue(e.target.value);
        } 
        else {
            alert(result.message);
        }
    };

    return { value, onChange };
}
