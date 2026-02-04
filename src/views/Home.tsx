import React, { useState } from 'react';
import type { Recipe } from '../models/recipe';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import RecipeCard from '../components/RecipeCard';
import Filter from '../components/Filter';
import { RiSoundModuleFill } from "react-icons/ri";
import paella from "../assets/images/paella-valenciana.jpg";
import tortilla from "../assets/images/tortilla-patata.jpg";
import gazpacho from "../assets/images/gazpacho-andaluz.jpg";


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

	const category = "Categoría";

	const difficulty = "Dificultad";

	const [searchItem, setSearchItem] = useState<string>("");

	const [selectedCategory, setSelectedCategory] = useState<string>("");

	const [selectedDifficulty, setSelectedDifficulty] = useState<string>("");

	const recipeCategories = Array.from(new Set(initialRecipes.map(r => r.category)));

	const recipeDifficulties = Array.from(new Set(initialRecipes.map(r => r.difficulty)));

	const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedCategory(e.target.value);
	}

	const handleDifficultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedDifficulty(e.target.value);
	}

	const filteredRecipes = initialRecipes.filter((recipe) => {
		const { name, category, difficulty } = recipe;

		// Normaliza todos los valores a minúsculas
		const term = searchItem.toLowerCase();
		const userCategory = selectedCategory.toLowerCase();
		const userDifficulty = selectedDifficulty.toLowerCase();

		// Comprueba si el término de búsqueda coincide con algún campo
		const matchesSearch =
			name.toLowerCase().includes(term) ||
			category.toLowerCase().includes(term) ||
			difficulty.toLowerCase().includes(term);

		// Comprueba si la receta coincide con la categoría seleccionada
		// Si no se ha seleccionado ninguna categoría, matchesCategory será true
		const matchesCategory =
			userCategory === '' || category.toLowerCase() === userCategory;

		// Comprueba si la receta coincide con la dificultad seleccionada
		// Si no se ha seleccionado ninguna dificultad, matchesDifficulty será true
		const matchesDifficulty =
			userDifficulty === '' || difficulty.toLowerCase() === userDifficulty;

		// Devuelve las que cumplen las tres condiciones
  		return matchesSearch && matchesCategory && matchesDifficulty;

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
					<SearchBar searchItem={searchItem} handleChange={handleChange} />
				</div>
				<div className="filters-container">
					<h3><RiSoundModuleFill className='filter-icon' />Filtrar por</h3>
					<Filter type={category} selectedItem={selectedCategory} options={recipeCategories} handleChange={handleCategoryChange} />

					<Filter type={difficulty} selectedItem={selectedDifficulty} options={recipeDifficulties} handleChange={handleDifficultyChange} />
				</div>
				<h3>Recetas destacadas</h3>
				<ul className='list card-list'>
					{filteredRecipes.map((recipe) => (
						<li className="list-item" key={recipe.id}>
							<RecipeCard recipe={recipe} />
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default Home;
