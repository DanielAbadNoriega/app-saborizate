// Define a TypeScript interface for a recipe. This will help us later when
// fetching or manipulating recipe data because it enforces the structure
// (id, name, category, difficulty, time). Using interfaces is part of the
// Model layer in the MVC pattern, where we define our data models.
export interface Recipe {
	id: number;
	name: string;
	category: string;
	difficulty: string;
	time: number; // preparation time in minutes
	image?: string;
}