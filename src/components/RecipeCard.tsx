import type { Recipe } from "../models/recipe"
import { FaClock } from "react-icons/fa";
import { FaSignal } from "react-icons/fa";

interface RecipeCardProps {
    recipe: Recipe
}

const RecipeCard = ({recipe} : RecipeCardProps) => {
    return (
        <div className='card card-img'>
            <div className='img-container'>
                <img src={recipe.image} />
                <div className="category">{recipe.category}</div>
            </div>
            <div className="card-body">
                <div className='title'>{recipe.name}</div>
                <div className="specs">
                    <div className="time"><FaClock className="clock-icon" />{recipe.time} minutos</div>
                    <div className="difficulty"><FaSignal className='level-icon' />{recipe.difficulty}</div>
                </div>
            </div>
        </div>
    )
}

export default RecipeCard;