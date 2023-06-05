import React, { useEffect } from "react";
import useFetch from "../assets/hooks/useFetch";
import './styles/residentCards.css'

const ResidentCard = ({ url }) => {
    const [resident, getApiResident] = useFetch(url);

    useEffect(() => {

        getApiResident();

    }, []);



    return (

        
            <article className="resident">

                <header className="resident-header">
                        <img
                        className="resident-img"
                        src={resident?.image}
                        alt="img resident"
                        />
                        <div className="resident-status">
                            <span className={`resident-circle ${resident?.status}`}></span>
                            <span className="resident-status-value">{resident?.status}</span>
                        </div>
                </header>

                <section className="resident-body">

                    <h3 className="resident-name">{resident?.name}</h3>
                    <hr className="resident-hr" />
                    <ul className="resident-list">
                        <li class="resident-item">
                            <span className="resident-label">Specie: </span>
                            <span className="resident-value">{resident?.species}</span>
                        </li>
                        <li class="resident-item">
                            <span className="resident-label">Origin: </span>
                            <span className="resident-value">{resident?.origin.name}</span>
                        </li>
                        <li class="resident-item">
                            <span className="resident-label">Eppisodes where Appear: </span>
                            <span className="resident-value">{resident?.episode.length}</span>
                        </li>
                    </ul>

                </section>

            </article>
    
        

    );
};

export default ResidentCard;
