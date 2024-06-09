import React from 'react';
import './App.css';
import Box from './Box_comp.js';

function App() {
  return (
    <div className="App">
      <div className='message'>
        <p>
          👏이번 1학기동안 함께 열심히 달려온 O조에게 박수!👏
        </p>
        <p>
          각자 바쁜 일정에도 시간 맞춰서 스터디에 꾸준히 참여해줘서 고마웠어요!<br/>
          매주 저녁마다 모여서 스터디하고 맛있는 거 먹었던 순간들 다 행복하고 즐거운 경험이었던 것 같아요😋<br/>
          다들 이번 학기 잘 마무리 하시고, 2학기에도 함께 했으면 좋겠어요!!
        </p>
      </div>
      <hr/>
      <h2>COMP O조 명예의 전당</h2>
      <div className='box_container'>
        <Box name="김승완" dept="영어영문학과" position="BACKEND"/>
        <Box name="양재영" dept="AI학과" position="BACKEND"/>
        <Box name="신정민" dept="독일어문학전공" position="FRONTEND"/>
        <Box name="김윤서" dept="전기전자공학부" position="FRONTEND"/>
        <Box name="남수정" dept="문헌정보학과" position="BACKEND"/>
      </div>
    </div>
  );
}

export default App;
