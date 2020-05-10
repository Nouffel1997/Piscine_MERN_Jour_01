import React, { useState } from 'react';
import axios from 'axios';

const AddBillet = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState("");

    const changeOnclick = e => {
        e.preventDefault();

        const billets = {
            title,
            content
        } 

        setTitle("");
        setContent("");
    

    axios
        .post("/billets/add", billets)
        .then(res => console.log(res.data))
        .catch(err => {
            console.log(err);
        });
    };

    return (
        <div className="container">
            <h1>Add New Billet</h1>
            <form onSubmit={changeOnclick} encType="multipart/form-data">
                <form>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text"
                        value={title}
                            onChange={e => setTitle(e.target.value)}
                            className="form-control" placeholder="Title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Content</label>
                        <textarea value={content} onChange={e => setContent(e.target.value)}
                            className="form-control" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Post Billet</button>
                </form>
            </form>
        </div>
    );
};

export default AddBillet;