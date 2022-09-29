import { useState } from "react";
import { v4 as uuid } from 'uuid';
    const Add = (props) => {
    const [title, setTitle] = useState('')
    const [exp, setExp] = useState('')
    const [status, setStatus] = useState('')
    const [salary, setSalary] = useState('')
    console.log(exp)
    const updateTitle =(event) => {
        console.log(event.target.value)
        setTitle(event.target.value)

    }
  const store = (event) => {
    event.preventDefault()
    props.addNewJob({id: uuid(), title: title, experiance: exp, status: status, salary: salary})

  }
    return(  <form className="flex flex-wrap " onSubmit = {store}>
        <h1>{title}</h1>
        <h1>{status}</h1>
        <h1>{salary}</h1>
        <h1>{exp}</h1>
        <div className="w-full p-5" ><h3 className="capitalize text-lg font-semibold">Create New Jobs</h3></div>
    <div className="w-full sm:w-6/12 bg-red-500 p-5">
        <input type="text" name=""  placeholder="Project..." className="w-full border-grey-300 px-3 py-2.5 border outline-none rounded" value={title} onChange = {updateTitle} />
        </div>

    <div className="w-full sm:w-6/12 bg-orange-500 p-5">
    <input type="number" name="" placeholder="Experiance..." className="w-full border-grey-300 px-3 py-2.5 border outline-none rounded" value={exp} onChange={(events) => setExp(events.target.value)}/>
    </div>

    <div className="w-full sm:w-6/12 bg-orange-500 p-5">
    <input type="text" name="" placeholder="Remote/Hybrid..." className="w-full border-grey-300 px-3 py-2.5 border outline-none rounded" value={status} onChange={(events) => setStatus(events.target.value)}/>
    </div>

    <div className="w-full sm:w-6/12 bg-orange-500 p-5">
    <input type="nuber" name="" placeholder="Salary..." className="w-full border-grey-300 px-3 py-2.5 border outline-none rounded" value={salary} onChange={(events) => setSalary(events.target.value)}/>
    </div>

    <div className="w-full p-5 text-center">
    <input type="submit" name="" placeholder="Salary..." 
    value="Add Job" className="bg-emerald-600 
    text-white capitalize py-2.5 px-5 cursor-pointer"/>
    </div>
    
    </form>)

}
export default Add;