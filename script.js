document.getElementById("hamburger").onclick = function() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("active");
};

// Function to show the selected recipe
function showRecipe(dish) {
    const recipeDiv = document.getElementById('recipe');
    let ingredients, time, procedures;

        // Set the details based on the selected dish
    switch (dish) {
        case 'lengua':
            ingredients = 'Ingredients: 1 ox tongue, 1 onion, chopped, 3 cloves garlic, minced, 2 bay leaves, 2 carrots, diced, 2 potatoes, diced, 1 cup mushrooms (optional), 4 cups beef or chicken broth, Salt and pepper to taste, 2 tablespoons cooking oil';
            time = 'Prep Time: 15 minutes, Cooking Time: 2-3 hours (boiling), 30 minutes (sautéing and simmering), Total Time: 2.5-3.5 hours, Servings: 6-8';
            procedures = 'Procedure: 1. Boil Tongue: Place the ox tongue in a pot of water and boil for 2-3 hours until tender. Remove, cool, and peel off the skin. Slice into bite-sized pieces., 2. Sauté: Heat oil in a pan over medium heat. Sauté onion and garlic until translucent., 3. Cook: Add the sliced tongue to the pan and cook until slightly browned., 4. Simmer: Add bay leaves and broth. Simmer for 20 minutes., 5. Add Vegetables: Add diced carrots, potatoes, and mushrooms. Cook until vegetables are tender., 6. Season: Season with salt and pepper to taste.';
            break;
        case 'sisig':
            ingredients = 'Ingredients: 1 lb pork belly, 1/2 lb pork liver, 1 large onion, finely chopped, 2-3 chili peppers, chopped, 3 tablespoons soy sauce, Juice of 2 calamansi or 1 lemon, Salt and pepper to taste, 2 tablespoons cooking oil';
            time = 'Prep Time: 20 minutes, Cooking Time: 30 minutes, Total Time: 50 minutes, Servings: 4-6';
            procedures = 'Procedures:1. Prepare Pork: Boil pork belly until tender, then grill until crispy. Chop into small pieces., 2. Grill Liver: Grill or pan-fry pork liver until cooked through, then chop into small pieces., 3. Sauté: Heat oil in a pan. Sauté onion and chili peppers until softened., 4. Combine: Add chopped pork belly and liver. Stir in soy sauce and calamansi juice., 5. Season: Adjust seasoning with salt and pepper. Cook until well combined and crispy.';
            break;
        case 'lechon-baboy':
            ingredients = 'Ingredients: Whole pig (about 10-12 lbs), 2 stalks lemongrass, 6 cloves garlic, minced, 1 large onion, chopped, 2 tablespoons salt, 1 tablespoon pepper, 1/4 cup cooking oil';
            time = 'Prep Time: 1 hour (marinating), Cooking Time: 4-6 hours (roasting), Total Time: 5-7 hours, Servings: 8-12';
            procedures = 'Procedures: 1. Marinate: Rub the pig inside and out with garlic, onion, salt, and pepper., 2. Stuff with lemongrass., 3. Prepare for Roasting: Secure the pig on a roasting spit or place in a large roasting pan., 4. Roast: Roast over charcoal or in an oven, basting with oil occasionally, until skin is crispy and meat is cooked through. This can take 4-6 hours.';
            break;
        case 'pindang-damulag':
            ingredients = 'Ingredients: 2 lbs carabao meat (or beef), 1 cup vinegar, 1 tablespoon salt, 5 cloves garlic, minced, 2 bay leaves, 1 teaspoon peppercorns, 4 cups water';
            time = 'Prep Time: 15 minutes, Cooking Time: 2-3 hours, Total Time: 2.25-3.25 hours, Servings: 4-6';
            procedures = 'Procedures: 1. Cure Meat: Marinate meat in vinegar and salt for 1-2 days., 2. Cook: Rinse meat and place in a pot with garlic, bay leaves, peppercorns, and water., 3. Simmer: Cook over low heat until meat is tender, about 2-3 hours., 4. Season: Season with salt and pepper.';
            break;
        case 'menudo':
            ingredients = 'Ingredients: 1 lb pork, diced, 1/2 lb pork liver, diced, 2 potatoes, diced, 2 carrots, diced, 1 cup tomato sauce, 1 onion, chopped, 3 cloves garlic, minced, 2 tablespoons cooking oil, salt and pepper to taste';
            time = 'Prep Time: 15 minutes, Cooking Time: 30-45 minutes, Total Time: 40-60 minutes, Servings: 4-6';
            procedures = 'Procedures: 1. Sauté: Heat oil in a pan. Sauté onion and garlic until softened., 2. Cook Pork: Add pork and cook until browned., 3. Add Tomato Sauce: Stir in tomato sauce, then add potatoes and carrots., 4. Simmer: Simmer until meat and vegetables are tender., 5. Season: Season with salt and pepper.';
            break;
        case 'kilayin':
            ingredients = 'Ingredients: 1 lb pork (or offal), diced, 1/2 cup vinegar, 5 cloves garlic, minced, 2-3 chili peppers, chopped, 3 tablespoons soy sauce, salt and pepper to taste, 2 tablespoons cooking oil';
            time = 'Prep Time: 15 minutes, Cooking Time: 30-40 minutes, Total Time: 45-55 minutes, Servings: 4-6';
            procedures = 'Procedures: 1. Marinate: Marinate pork in vinegar, salt, and pepper for 1 hour., 2. Sauté: Heat oil in a pan. Sauté garlic and chili peppers until aromatic., 3. Cook Pork: Add marinated pork and cook until tender., 4. Season: Stir in soy sauce and adjust seasoning.';
            break;

        case 'bibingka':
            ingredients = 'Procedure: 2 cups rice flour, 1 cup coconut milk, 1/2 cup sugar, 2 eggs, 1 teaspoon baking powder, 1/4 teaspoon salt, 1/2 cup grated cheese (optional), 1 salted egg, sliced (optional)';
            time = 'Prep Time: 15 minutes, Cooking Time: 25-30 minutes, Total Time: 40-45 minutes, Servings: 8-10';
            procedures = 'Procedures:1. Preheat Oven: Preheat oven to 375°F (190°C). Grease a baking pan., 2. Mix Ingredients: Combine rice flour, coconut milk, sugar, eggs, baking powder, and salt in a bowl., 3. Pour Batter: Pour batter into the prepared pan., 4. Add Toppings: Top with grated cheese and salted egg if desired., 5. Bake: Bake for 25-30 minutes or until set and golden.';
            break;

        case 'biko':
            ingredients = 'Procedure: 2 cups glutinous rice, 1 can (14 oz) coconut milk, 1 cup brown sugar, 1/4 teaspoon salt';
            time = 'Prep Time: 10 minutes, Cooking Time: 30-40 minutes, Total Time: 40-50 minutes, Servings: 6-8';
            procedures = 'Procedures:1. Cook Rice: Rinse and cook glutinous rice according to package instructions., 2. Mix Ingredients: Combine cooked rice with coconut milk, brown sugar, and salt in a pan., 3. Simmer: Cook over low heat, stirring constantly until thick and sticky., 4. Cool: Pour into a dish and let cool before serving.';
            break;

        case 'macapuno-tarts':
            ingredients = 'Procedure: 12 tart shells, 1 cup macapuno (sweetened coconut strips), 1/2 cup condensed milk, 2 egg yolks';
            time = 'Prep Time: 20 minutes, Cooking Time: 15-20 minutes, Total Time: 30-40 minutes, Servings: 12';
            procedures = 'Procedures:1. Preheat Oven: Preheat oven to 350°F (175°C)., 2. Prepare Filling: In a bowl, mix condensed milk with egg yolks. Stir in macapuno., 3. Fill Tarts: Spoon the mixture into tart shells., 4. Bake: Bake for 15-20 minutes until filling is set and edges are golden.';
            break;

        case 'puto-bumbong':
            ingredients = 'Procedure: 1 cup purple rice flour, 1/2 cup sugar, 1 cup coconut milk, 1/4 teaspoon salt';
            time = 'Prep Time: 10 minutes, Cooking Time: 20-30 minutes, Total Time: 30-40 minutes, Servings: 6-8';
            procedures = 'Procedures:1. Prepare Batter: Mix purple rice flour, sugar, coconut milk, and salt in a bowl., 2. Steam: Pour the batter into bamboo tubes or small molds., 3. Cook: Steam for 20-30 minutes until cooked through., 4. Serve: Serve with grated coconut and sugar.';
            break;

        case 'tibok-tibok':
            ingredients = 'Procedure: 1 cup rice flour, 1 cup coconut milk, 1/2 cup sugar, 1/4 teaspoon salt, Crushed peanuts (optional)';
            time = 'Prep Time: 10 minutes, Cooking Time: 30-40 minutes, Total Time: 40-50 minutes, Servings: 6-8';
            procedures = 'Procedures:1. Prepare Mixture: Combine rice flour, coconut milk, sugar, and salt in a pan., 2. Cook: Cook over low heat, stirring constantly until thick and creamy., 3. Set: Pour into molds and let cool., 4. Top: Sprinkle with crushed peanuts if desired.';
            break;

        case 'ube-halaya':
            ingredients = 'Procedure: 2 cups cooked and mashed ube (purple yam), 1 can (14 oz) coconut milk, 1 can (14 oz) condensed milk, 1/4 cup butter, 1/2 cup sugar';
            time = 'Prep Time: 10 minutes, Cooking Time: 30-40 minutes, Total Time: 40-50 minutes, Servings: 6-8';
            procedures = 'Procedures:1. Combine Ingredients: In a pan, combine mashed ube, coconut milk, condensed milk, butter, and sugar., 2. Cook: Cook over medium heat, stirring constantly until thick and creamy., 3. Cool: Pour into a dish and let cool before serving.';
            break;

        default:
            ingredients = 'Unavailable Recipe.';
            time = '';
            procedures = '';
    }

     // Update the recipe div with details
    recipeDiv.innerHTML = `
    <h2>${dish.charAt(0).toUpperCase() + dish.slice(1)}</h2>
    <p><strong>Ingredients:</strong> ${ingredients}</p>
    <p><strong>Time:</strong> ${time}</p>
    <p><strong>Procedures:</strong> ${procedures}</p>`;
 
recipeDiv.style.display = 'block'; // Show the recipe div
}


