import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface Student {
    name: string;
    surname: string;
    age: number;  // age tipini number qilib o'zgartirdim
}

const Add: React.FC = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const HTTP = import.meta.env.VITE_API;

    const [name, setName] = useState<string>('');
    const [surname, setSurname] = useState<string>('');
    const [age, setAge] = useState<string>('');  // age haliyam string bo'lib qolmoqda

    async function createStudent(body: Student) {
        return await axios.post(`${HTTP}/students`, body);
    }

    const mutation = useMutation({
        mutationFn: createStudent,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['students'] });
            navigate(-1);
        },
    });

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const data: Student = { name, surname, age: Number(age) }; // age-ni number ga aylantirdim
        mutation.mutate(data);
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="w-[600px] space-y-5 mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg"
        >
            <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                size="large"
                placeholder="Enter name"
                allowClear
                required
                className="border border-gray-300 rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                size="large"
                placeholder="Enter surname"
                allowClear
                required
                className="border border-gray-300 rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                value={age}
                onChange={(e) => setAge(e.target.value)}
                size="large"
                placeholder="Enter age"
                allowClear
                required
                className="border border-gray-300 rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button
                htmlType="submit"
                className="w-full mt-4 bg-blue-500 hover:bg-blue-600 transition duration-200"
                size="large"
                type="primary"
            >
                Submit
            </Button>
        </form>
    );
};

export default Add;
