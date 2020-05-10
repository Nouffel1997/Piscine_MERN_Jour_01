import React, { Component } from 'react'

const Billets = ({ posts }) => {
    return (
        <div>
            Welcome to de Billets component
            {posts.map((title, key) => (
                <div className="conatiner" key={key}>
                    <h2>{title.title}</h2>
                    <p>{title.content}</p>
                    <div className="row">
                        <a href="" className="btn btn-outline-success">Edit Billet</a>
                    </div>
                    <div className="row">
                        <a href="" className="btn btn-outline-success">Delete Billet</a>
                    </div>
                </div>
            ))}
        </div>

    )
};

export default Billets