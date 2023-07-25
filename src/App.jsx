
import React, {useState} from 'react';

function App() {



    
    const [position, setPosition] = useState({x: 0, y: 0});

    const randomNumberX = Math.floor(Math.random() * 100) + 60;
    const randomNumberY = Math.floor(Math.random() * 100) + 10;
    


    const handleMouseOver = (event) => {
        // Lấy tọa độ của chuột
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const maxX = 1000;
        const maxY = 500;

        // Cập nhật vị trí mới cho phần tử
        if (mouseX < maxX && mouseY < maxY) {
            setPosition({
                x: mouseX + randomNumberX,
                y: mouseY + randomNumberY
            });
        } else 
            {setPosition({
                x: mouseX - randomNumberX,
                y: mouseY - randomNumberY
            })}

        };

        return (
          <div className='bg-pink-300 w-full h-[900px]'>
            <div className='text-center pt-10'>
                <h1 className='italic text-[50px] font-bold text-orange-600'>Em Ổn Không</h1>
            </div>

             <div
             
                style={{
                    position: 'absolute',
                    left: position.x,
                    top: position.y,
                    backgroundColor: 'rgba(255,255,255,)'
                }}
                onMouseOver={handleMouseOver}>
                <button className='bg-red-600 text-white w-[70px] h-[40px] rounded-lg italic text-lg'>Không</button>
            </div>
            <div className='text-center'><button className=' bg-blue-600 text-white w-[100px] h-[40px] rounded-lg italic text-lg m-[100px]'>Tớ Rất Ok</button></div>
          </div>
           
        );
    }

    export default App;