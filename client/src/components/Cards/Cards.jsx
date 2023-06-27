import React, { useEffect, useRef } from "react";
import Card from "../Card/Card";
import style from "./CardsModule.css"

const Cards = ({ currentPokemons }) => {

    const containerRef = useRef(null)

    useEffect(() => {
        const handleWheelScroll = (event) => {
            console.log(event.deltaY);
            if (event.deltaY !== 0) {
                event.preventDefault();
                const container = containerRef.current;
                console.log(container);
                const newScrollLeft = container.scrollLeft + (event.deltaY * 5);
                console.log(container.scrollLeft);
                container.scrollTo({
                    left: newScrollLeft,
                    behavior: "smooth"
                });
            }
        }
        console.log("llega");
        const container = containerRef.current;
        console.log(container);
        container.addEventListener("wheel", handleWheelScroll, { passive: false });
        return () => {
            container.removeEventListener("wheel", handleWheelScroll);
        };
    }, []);

    return (
        <div className="cards-container" ref={containerRef}>
            <div className="cards-scroll" >
                {
                    currentPokemons.map(({ id, name, image, types }) => {
                        return (
                            <Card 
                                key={id}
                                id={id}
                                name={name}
                                image={image}
                                types={types}

                            />
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Cards;