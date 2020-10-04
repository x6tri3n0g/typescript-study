import React, { ChangeEvent, FormEvent, useState } from 'react';

function TodoInsert() {
    const [value, setValue] = useState('');
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();

        // TODO: 커스텀 Hook을 사용해 새 항목을 등록
        setValue('');
    };
    return (
        <form onSubmit={onSubmit}>
            <input
                placeholder="할 일을 입력하세요."
                value={value}
                onChange={onChange}
            />
            <button type="submit">등록</button>
        </form>
    );
}

export default TodoInsert;