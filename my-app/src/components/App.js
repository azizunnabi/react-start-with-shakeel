import { useState} from 'react'
import Test from ".components/Test"
// import Test1 from ".components/Test1"
 import Add from ".components/Test1"

function Rehan() {
	const [jobs, setJobs] = useState([
	{id:1, title:'web developer', experiance: 3, status: 'remote'},
	{id:2, title:'web developer', experiance: 3, status: 'remote'}
		])
	 return (
	 	<div>
	 	{/* <Test testData={jobs} />
		 <Test1 testData={jobs} /> */}

		 <jobs alljobs={jobs} />
	 	</div>
	 	)

}
export default Rehan;