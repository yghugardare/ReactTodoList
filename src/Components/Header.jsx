import React from 'react';
import styled from 'styled-components';

function Header({tasks}) {
  // those objects having task objects checked,add them here
  const completedTasks = tasks.filter(taskObjs=>taskObjs?.checked);
  return (
    <HeaderContainer>
        <div className='content'>
        <h1>{completedTasks.length}/{tasks.length}</h1>
        {tasks.length === 0? <p>Add a task 📝</p>:""}
        {completedTasks.length>=2&&completedTasks.length>=parseInt(tasks.length/2) && tasks.length!==0 && completedTasks.length!==tasks.length?<p>Surpass Your Limits. Right Here. Right Now.🚀</p>:"" }
        {completedTasks.length === tasks.length && tasks.length!== 0 ? <p>Great Work!Stay Relentless!💪</p>:<p>Keep Going 🏃‍♂️</p>}
        <h1>TO-DO List</h1>
    </div>
    </HeaderContainer>
  )
}

export default Header;
const HeaderContainer = styled.div`

    .content{
        text-align: center;
        h1{
            font-size: 2rem;
        }
        p{
           margin :5px 0;
        }
    }
`