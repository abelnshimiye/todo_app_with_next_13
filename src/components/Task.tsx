"use client";

import { ITask } from "@/types/tasks";
import {FiEdit} from "react-icons/fi";
import {TiTrash} from "react-icons/ti";
import {useState, FormEventHandler} from "react";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from "@/api";

interface TaskPropos {
    task: ITask 
}

const Task:React.FC<TaskPropos>  = ({task}) => {

  const router =  useRouter();

  const [openModelEdit, setOpenModelEdit] = useState<boolean>(false);
  const [openModelDeleted, setOpenModelDelete] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] =  useState<string>(task.text);

  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) =>{
    e.preventDefault();
    
    await editTodo({
      id: task.id,
      text: taskToEdit,
    })
    setOpenModelEdit(false);
    router.refresh();
  }

  const handleDeleteTask = async (id: string) => {
    await deleteTodo(id);
    setOpenModelDelete(false);
    router.refresh();
  }



  return (
    <tr key={task.id}>
    <td>{task.text}</td>
    <td className="flex gap-5" >

      <FiEdit onClick = {() => setOpenModelEdit(true)} cursor="pointer" className="text-blue-500" size={25}/>

      <Modal modalOpen = {openModelEdit} setModelOpen = {setOpenModelEdit}>

          <form onSubmit={handleSubmitEditTodo}>
            <h3 className='font-bold text-lg'> Edit Task</h3>

            <div className='modal-action'>

            <input 
            value={taskToEdit}
            onChange={(e) => setTaskToEdit(e.target.value)}
            type="text" 
            placeholder="Type here" 
            className="input input-bordered w-full " />

            <button type='submit' className='btn'>Submit</button>

            </div>
          </form>
    </Modal>


      <TiTrash onClick = {() => setOpenModelDelete(true)} cursor="pointer" className="text-red-500"  size={25}/>

      <Modal modalOpen = {openModelDeleted} setModelOpen = {setOpenModelDelete}>
        <h3 className="text-lg">Are you sure you want to delete this task ?</h3>
        <div className="modal-action">
          <button
          onClick={()=> handleDeleteTask(task.id) }
          className="btn btn-danger"
          >Yes</button>

        </div>

      </Modal>



    </td>
  </tr>
  )
}

export default Task