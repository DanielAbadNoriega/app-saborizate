import React, { useState } from 'react';
import paella from "../assets/images/paella-valenciana.jpg";
import tortilla from "../assets/images/tortilla-patata.jpg";
import gazpacho from "../assets/images/gazpacho-andaluz.jpg";
import { FaClock } from "react-icons/fa";
import { FaSignal } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Header from './Header';
// Define a TypeScript interface for a recipe. This will help us later when
// fetching or manipulating recipe data because it enforces the structure
// (id, name, category, difficulty, time). Using interfaces is part of the
// Model layer in the MVC pattern, where we define our data models.
interface Recipe {
	id: number;
	name: string;
	category: string;
	difficulty: string;
	time: number; // preparation time in minutes
	image?: string;
}

// A static list of recipes for the first step of the Home page. Initially we
// hardcode a few recipes so we can focus on rendering a list without
// involving state, search or filters. Each recipe adheres to the Recipe
// interface defined above.
const initialRecipes: Recipe[] = [
	{ id: 1, name: 'Paella Valenciana', category: 'Arroces', difficulty: 'Media', time: 60, image: paella },
	{ id: 2, name: 'Tortilla de Patatas', category: 'Huevos', difficulty: 'Baja', time: 30, image: tortilla },
	{ id: 3, name: 'Gazpacho Andaluz', category: 'Sopas', difficulty: 'Baja', time: 20, image: gazpacho },
];

/**
 * Home component renders the list of recipes. For this first step
 * we simply map over the static array and display each recipe’s
 * name, category, difficulty and preparation time. Later we’ll
 * introduce state, search inputs and filters.
 */
const Home: React.FC = () => {

	const [searchItem, setSearchItem] = useState<string>("");

	const filteredRecipes = initialRecipes.filter((recipe) => {
		return recipe.name.toLowerCase().includes(searchItem.toLowerCase());
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchItem(e.target.value);
	}

	return (
		<>
			<Header />
			<section className='call-to-action'>
				<h1>¿Qué vamos a cocinar hoy?</h1>
				<h2>Descubre miles de recetas caseras con un toque moderno</h2>
			</section>
			<div className='container'>
				<div className='search-container'>
					<FaSearch className='search-icon' />
					<input id='main-searcher' name='filter' className='recipe-search default-search' type='text' value={searchItem} onChange={(e) => handleChange(e)} placeholder='Busca una receta (ej. Lasaña, Tacos, Brownies...)'></input>
				</div>
				<h3>Recetas destacadas</h3>
				<ul className='list card-list'>
					{filteredRecipes.map((recipe) => (
						<li className="list-item" key={recipe.id}>
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
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default Home;