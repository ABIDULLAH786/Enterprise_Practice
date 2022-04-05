import { Button } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

export const MultiFilters = ()=>{
    const [searchParams, setSearchParams] = useSearchParams();
    return(
        <>
            <Button onClick={()=> {
                searchParams.set("day","Monday");
                setSearchParams(searchParams);
            }}>
                Add Day Filter
            </Button>
            <Button     className="my-5 mx-3" 
            onClick={()=> {
                searchParams.set("date","4-4-2022");
                setSearchParams(searchParams);
            }}>
                Add Date Filter
            </Button>
            <Button className="btn-danger" onClick={()=> {
                setSearchParams({});
            }}>
                Remove Filters
            </Button>

        </>

    )
}