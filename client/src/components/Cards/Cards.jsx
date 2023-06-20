import Card from "../Card/Card";
import style from "./CardsModule.css"

const Cards = ({currentPokemons}) => {

    return (
        <div className="cards-container">
            <div className="cards-scroll">
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