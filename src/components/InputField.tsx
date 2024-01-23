import React from 'react'
import styles from './styles.module.css'

type Props={
    todo : string
    setTodo: React.Dispatch<React.SetStateAction<string>>
}
const InputField : React.FC<Props> = ({todo, setTodo} :Props ) => {
  return (
    <form action="" className={styles.input}>
        <input 
        type="text"
         placeholder='Enter a task' 
         className={styles.input__box}
         value={todo}
         onChange={
            (e)=>setTodo(e.target.value)
         } 
        />
        <button type="submit" className={styles.input__submit}>Go</button>
    </form>
  )
} 

export default InputField 