import React from "react";
import { useState, useEffect } from "react";

function CatDetail({ match }) {
    useEffect(() => {
        fetchCat();
    }, []);

    const [cat, setcat] = useState({
        status: {},
    });

    const fetchCat = async () => {
        const data = await fetch(
            `https://cat-fact.herokuapp.com/facts/${match.params.id}`
        );
        const cat = await data.json();
        setcat(cat);
    };

    return (
        <div>
            <h1>Cat Detail Page</h1>
            <hr />
            <strong>User: </strong>
            {cat.user}
            <br />
            <strong>ID: </strong>
            {cat._id}
            <br />
            <strong>Status: </strong>
            {cat.status.verified ? <>Verified</> : <>Not Verified</>}
            <hr />
        </div>
    );
}

export default CatDetail;
