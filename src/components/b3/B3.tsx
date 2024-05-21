import React, { useState, useCallback } from 'react';

const ColorPicker = () => {
  // Khai báo state để lưu trữ một màu được chọn
  const [selectedColor, setSelectedColor] = useState('');

  // Hàm xử lý sự kiện khi người dùng chọn một màu mới
  const handleChangeColor = useCallback((event:any) => {
    setSelectedColor(event.target.value);
  }, []);

  return (
    <div>
      <h2>Color Picker</h2>
      <input 
        type="color" 
        value={selectedColor} 
        onChange={handleChangeColor} 
      />
      {selectedColor && (
        <div style={{ marginTop: '10px', width: '50px', height: '50px', backgroundColor: selectedColor }}></div>
      )}
    </div>
  );
};

export default ColorPicker;
