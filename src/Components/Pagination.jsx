const  Pagination = ({totalPage, currentPage, paginate})=> {
    let pageNumber = []
    if(totalPage <= 5){
        for (let i = 0; i < 5; i++) {
            pageNumber.push(i+1)
        }
    }

    else{
        pageNumber.push(1);

        if(currentPage > 2){
            pageNumber.push("...");
        }

        for(let i = Math.max(2, currentPage-1); i<= Math.min(totalPage-1, currentPage + 1); i++){
            pageNumber.push(i)
        }

        if(currentPage < totalPage - 3){
            pageNumber.push("...")
        }

        pageNumber.push(totalPage);
    }
    return(
        <>
        <button onClick={()=> paginate(currentPage-1)}>Prev</button>
        {
            pageNumber.map(
                (item)=>{
                    return <button onClick={()=> paginate(item)}>{item}</button>
                }
            )
        }
        <button onClick={()=> paginate(currentPage+1)}>Next</button>
        </>
    )
}

export default Pagination;
