"use client"

import React, {FormEventHandler, useState} from 'react';
import {AiOutlinePlus} from "react-icons/ai";
import Modal from './Modal';
import { addTodo } from '@/api';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import {Form} from './forms'
import {Config} from "@/types/form"

const AddTask = () => {
const router = useRouter()
const [modalOpen, setModelOpen] = useState<boolean>(false);
const [newTaskValue, setNewTaskValue] = useState('');
const [isSubmitting, setIsSubmitting] = useState(false);
  

const handleSubmitNewTod: FormEventHandler<HTMLFormElement> = async (e) =>{
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    
    await addTodo({
      id: uuidv4(),
      text: newTaskValue
    })

    setNewTaskValue("");
    setModelOpen(false);
    router.refresh();
  }



  const config : Config[]  = [
    {
        labelText: 'Task',
        labelId: 'task1',
        type: 'text',
        value: newTaskValue,
        required: true,
        componentType: 'input'
    },
//     {
//       labelText: 'Task',
//       labelId: 'task2',
//       type: 'text',
//       value: '',
//       required: true,
//       componentType: 'textarea'
//   },
//   {
//     labelText: 'Task',
//     labelId: 'task3',
//     type: 'text',
//     value: '',
//     required: true,
//     componentType: 'select',
//     options:[
//       {value:'1',label:'1'},{value:'2',label:'2'},{value:'3',label:'3'}
//     ]
// }   
]



  return (
    <div>
        <button onClick={() => {setModelOpen(true); setIsSubmitting(false)}} className='btn btn-primary w-full'>Add new task <AiOutlinePlus className="ml-2" size={25}/></button>

        <Modal modalOpen = {modalOpen} setModelOpen = {setModelOpen}>


        <Form config={config}
            isLoading={isSubmitting}
            btnText='Submit'
            onChange={(e) => setNewTaskValue(e.target.value)}
            onSubmit={handleSubmitNewTod}
            />


          
        </Modal>
    </div>
  )
}

export default AddTask