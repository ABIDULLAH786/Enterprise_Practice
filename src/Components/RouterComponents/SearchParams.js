import { useSearchParams } from "react-router-dom"

export const SearchParams=()=>{
    const [searchParams, setSearchParams] = useSearchParams()
    return(
        <>
            <h1>useSearchParams Hook </h1>
            <div>
                <button className="btn btn-primary mx-2"
                    onClick={()=> setSearchParams({day:"Monday"})}
                >add filter day</button>
                <button className="btn btn-primary mx-2"
                    onClick={()=> setSearchParams({date:"4-4-2022"})}
                >add filter date</button>
                <button className="btn btn-danger mx-2"
                    onClick={()=> setSearchParams({})}
                >Reset filters</button>
            </div>
            <div>
                <h3>Current Url is: </h3>
            </div>
        </>
    )
}