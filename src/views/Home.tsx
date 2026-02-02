import React from 'react';

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
}

// A static list of recipes for the first step of the Home page. Initially we
// hardcode a few recipes so we can focus on rendering a list without
// involving state, search or filters. Each recipe adheres to the Recipe
// interface defined above.
const initialRecipes: Recipe[] = [
  { id: 1, name: 'Paella Valenciana', category: 'Arroces', difficulty: 'Media', time: 60 },
  { id: 2, name: 'Tortilla de Patatas', category: 'Huevos', difficulty: 'Baja', time: 30 },
  { id: 3, name: 'Gazpacho Andaluz', category: 'Sopas', difficulty: 'Baja', time: 20 },
];

/**
 * Home component renders the list of recipes. For this first step
 * we simply map over the static array and display each recipe’s
 * name, category, difficulty and preparation time. Later we’ll
 * introduce state, search inputs and filters.
 */
const Home: React.FC = () => {
  return (
    <>
      <h1>¿Qué vamos a cocinar hoy?</h1>
      <h2>Descubre miles de recetas caseras con un toque moderno</h2>
      <div style={{ padding: '1rem' }}>
        <h1>Recetas</h1>
        <ul>
          {initialRecipes.map((recipe) => (
            <li key={recipe.id} style={{ marginBottom: '0.5rem' }}>
              <strong>{recipe.name}</strong> — {recipe.category} — {recipe.difficulty} — {recipe.time} minutos
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;