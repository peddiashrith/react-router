import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Shop() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [cats, setcats] = useState([
        {
            user: {
                name: {},
            },
        },
    ]);

    const fetchItems = async () => {
        const data = await fetch("https://cat-fact.herokuapp.com/facts/");
        const cats = await data.json();
        setcats(cats.all);
    };

    const linkstyle = {
        textDecoration: "none",
    };

    return (
        <div>
            <h1>Shop Page</h1>
            <hr />

            {cats.map((cat) => (
                <div key={cat._id}>
                    <strong>Id:</strong>{" "}
                    <Link to={`/Shop/${cat._id}`} style={linkstyle}>
                        {cat._id}
                    </Link>
                    <br />
                    <strong>Text:</strong> {cat.text}
                    <strong>User:</strong> {cat.user.name.first}
                    <hr></hr>
                </div>
            ))}
        </div>
    );
}

export default Shop;
