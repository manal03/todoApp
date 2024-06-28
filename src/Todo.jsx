import react, {useState} from 'react'
function Todo(){
    const [tasks, setTask] = useState([])
    function handleAddTask(){
        const inputTask = document.getElementById("taskInput").value.trim();
        if(inputTask.value!==""){
          setTask(t=>[...t, inputTask])
        }
        document.getElementById("taskInput").value = "";
    }

    function handleRemoveTask(index){
      setTask(tasks.filter((__, i) => i !==index ));

    }
    return(<>
    <div className="flex items-center justify-center h-screen w-screen">
    <div className="h-42 w-3/6 border-4 border-black">
      <h2 className="text-3xl text-center">Todo List</h2>
      <div className="text-center">
      <input type="text" id="taskInput"  placeholder="What needs to be done?"></input>
      <button className="bg-zinc-400 rounded-lg px-3" onClick={handleAddTask}>Add</button>
      </div>
      <br/>
      <div>
      <ul>
  {tasks.map((task, index) => (
    <li key={index} onClick = {()=>handleRemoveTask(index)}className="grid grid-cols-2 gap-4 items-center">
      <span className="pl-20 col-span-1">{task}</span>
      <button className="col-span-1">Delete</button>
    </li>
  ))}
</ul>

      </div>

       </div>
    </div>
    </>)
}

export default Todo