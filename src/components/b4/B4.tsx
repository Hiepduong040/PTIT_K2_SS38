import React, { useState, useMemo } from 'react';

const RandomNumberGenerator = () => {
  // Khai báo state để lưu trữ một số ngẫu nhiên
  const [randomNumber, setRandomNumber] = useState<number | null>(null);

  // Hàm để sinh số ngẫu nhiên mới
  const generateRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 1000));
  };

  // Sử dụng useMemo để tính toán và lưu trữ một số ngẫu nhiên mới
  useMemo(generateRandomNumber, []);

  return (
    <div>
      <h2>Random Number Generator</h2>
      <p>Random Number: {randomNumber}</p>
      <button onClick={generateRandomNumber}>Generate</button>
    </div>
  );
};

export default RandomNumberGenerator;
