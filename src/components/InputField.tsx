import React, {useRef} from 'react'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e:React.FormEvent)=> void;
}
// const InputField React.FC<Props> = ({todo, setTodo}) => {...} >> line below can also be written like this <<
const InputField = ({todo, setTodo, handleAdd}:Props) => {
    const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className="form" onSubmit={(e)=>{handleAdd(e); inputRef.current?.blur();}} >
      <input
        ref={inputRef}
        type="text"
        name="task"
        id="task"
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
        placeholder="Enter a new task"
        className="task-input"
      />
      <button type="submit" className="task-submit">Go</button>
    </form>
  );
};

export default InputField;
