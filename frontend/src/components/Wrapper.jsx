import {Link} from  "react-router-dom"
export function Wrapper({title,description,src,icontext,linktext,to}){
    return(
        <div className="p-5 bg-white  rounded-md border border-gray-200 hover:shadow-md">
            <h6 className="text-center text-xl pb-5">{title}</h6>
            <img src={src} className="rounded-lg"></img>
            <div className="mt-5">
                <h5 >{icontext}</h5>
                <p className="mb-3 font-normal text-gray-700 mt-5">{description}</p>
                <Link className="text-2xl flex justify-start" to={to}>{linktext}<svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 pt-0.6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>
</Link>
            </div>
            



        </div>
    )

}