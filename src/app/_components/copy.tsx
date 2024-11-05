'use client'
import { useState } from 'react';

function ClickToCopy() {
    const [text, setText] = useState('vinjovinda@gmail.com');
    const email = "vinjovinda@gmail.com";

    const handleCopyClick = () => {
        navigator.clipboard.writeText(email)
            .then(() => {
                setText('Email Copied!'); // Ubah teks setelah berhasil disalin
                setTimeout(() => {
                    setText(email); // Kembalikan teks setelah 2 detik
                }, 2000);
            })
            .catch((error) => {
                console.error('Error: ', error);
            });
    };
    return (
        <button onClick={handleCopyClick} className="w-max hover:text-shadow-sm text-2xl font-semibold hover:scale-110 duration-300">
            {text}
        </button>
    );
}

export default ClickToCopy;