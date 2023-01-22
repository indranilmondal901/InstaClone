import React from 'react';
import { useState, useEffect } from 'react';
import like from '../../assets/image/like.png'
import sharebtn from '../../assets/image/sharebtn.png'
import moreicon from '../../assets/image/moreicon.png'
import Navbar from '../navbar/navbar';
import "../viewPage/viewPage.css"



export default function ViewPage() {
    const [data, setData] = useState("");
    const fetchApi = async () => {
        const result = await fetch("http://localhost:8080/user");
        setData(await result.json())
    }
    useEffect(() => {
        fetchApi()
    }, [])
    // console.log(data);
    if (!data) {
        return (
            <h1>Your Page is Loading</h1>
        )
    }

    return (
        <>
            <Navbar />
            {data?.result.map((element) => {
                console.log(element)
                return (
                    <div id="main_viewPage">
                        <div id="name_icon">
                            <h2 id="name_view">{element.author}</h2>
                            <img src={moreicon} alt="moreicon" />
                        </div>
                        <p id="location_view">{element.location}</p>
                        <div id="img_view">
                            <img src={`http://localhost:8080/user/${element.fileName}`} alt="" />
                        </div>
                        <div id="like_share">
                            <img src={like} alt="like" id="like" />
                            <img src={sharebtn} alt="sharebtn" id="sharebtn" />
                            <p id='date'>01.02.2023</p>
                        </div>
                        <p id='likeCount'>{element.likes}</p>
                        <p id="description_view">{element.description}</p>
                    </div>
                )
            })}
        </>
    )
}