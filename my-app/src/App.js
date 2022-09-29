import { useState } from "react";
import Jobs from "./components/Jobs";
import Add from "./components/Add"
import ShopingCart from "./components/ShopingCart";
function Rehan() {
  const [jobs, setJobs] = useState([
    {id: 1, title: 'web Developer', experiance: 3, status: 'remote', salary: 3000}
  ])
  const newJob = job =>{
    setJobs([job,...jobs])

  }
  return (
    <div>
      <h3>Hello</h3>
      <Add addNewJob={newJob}/> 
    <Jobs allJobs={jobs} />
    <ShopingCart />
    </div>
    )
}
export default Rehan;
// function App() {
//   return (
//     <div className="max-w-screen-lg ml-auto mt-5">
//    <h3>hello</h3>
   
//     <Add /> 
    
//     <Test1 email='aziz484u@gmail.com' />
//     </div>

//   );
// }







