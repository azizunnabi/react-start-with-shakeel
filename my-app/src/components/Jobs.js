import currency from 'currency-formatter'
const jobs = ({allJobs}) => {
    return(
        <div className="max-w-screen-lg ml-auto mr-auto mt-5 bg-red-400">
            {allJobs.length > 0 ? allJobs.map(function(job){
                return(
                    <div className="flex mb-4">
                        <span className="w-12 h-12 overflow-hidden">
                            <img className="objec-cover rounded-full w-full h-full" src="/images/react.jpg" alt="">
                            </img>
                        </span>
                        <div className="ml-5">
                            <h2 className="text-base font-semibold capitalized">{job.title}</h2>
                            <span className="inline-block mt-2 text-sm text-gray-900 capitalize">{job.status}</span>
                            <span className=" ml-4 text-sm font-medium text-gray-500">{currency.format(job.salary, {code: 'USD'})}</span>
                        </div>
                        <div className='flex-1 ml-5 flex justify-end'>
                        <button className='bg-rose-600 text-white text-sm font-bold py-1 px-6 rounded-md capitalize'>Delete</button>
                        </div>

                        

                        </div>




            ) 
                }): 'no items'}
        </div>
    )
            }
    export default jobs;
