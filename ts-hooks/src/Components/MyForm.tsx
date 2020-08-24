import React, { useState } from 'react';

type MyFormProps = {
    onSubmit: (form: { name: string; description: string }) => void;
};

function MyForm({ onSubmit }: MyFormProps) {
    const [form, setForm] = useState({
        name: '',
        description: '',
    });

    const { name, description } = form;

    const onChange = (e: any) => {
        // e 값을 무엇으로 설정해야 할까요?
        // 일단 모를때는 any로 설정합니다.
    };

    const handleSubmit = (e: any) => {
        // 여기도 아직 모르니깐 any로~
    };
    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={name} onChange={onChange} />
            <input name="description" value={description} onChange={onChange} />
            <button type="submit">등록</button>
        </form>
    );
}

export default MyForm;
