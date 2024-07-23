import React from "react";

function Filter({setFilter}) {

    return(
        <>
            <label>
                Filter by category:
                <select className="filteSelect" onChange={(e) => setFilter(e.target.value)}>
                        <option value='all'>All</option>
                        <option value='food'>Food</option>
                        <option value='transport'>Transport</option>
                        <option value='entertainment'>Entertainment</option>
                        <option value='utility'>Utility</option>
                        <option value='others'>Others</option>
                    </select>
            </label>
        </>
    );

}

export default Filter;