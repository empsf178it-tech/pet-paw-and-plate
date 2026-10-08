/* ==========================================================================
   PAW & PLATE — Gourmet Pet Food & Culinary Studio
   Core JavaScript Engine & Application Logic
   ========================================================================== */

// --- DEFAULT RECIPE DATASET (Using downloaded images 1.jpg - 54.jpg) ---
const INITIAL_RECIPES = [
  {
    id: "rec-1",
    name: "Hearty Turkey & Garden Medley",
    species: "dog",
    category: "BALANCED",
    lifeStage: "adult",
    dietTags: ["high-protein", "grain-free"],
    prepTime: "25 MIN",
    difficulty: "Easy",
    rating: 4.9,
    reviews: 42,
    image: "assets/images/15.jpg",
    summary: "Slow-simmered ground turkey breast combined with nutrient-rich steamed carrots, crisp peas, and fresh organic spinach.",
    ingredients: [
      { name: "Fresh Ground Turkey", amount: "400g" },
      { name: "Steamed Carrots", amount: "1.5 cups" },
      { name: "Baby Spinach", amount: "1 cup" },
      { name: "Green Peas", amount: "1/2 cup" },
      { name: "Brown Rice (cooked)", amount: "1 cup" }
    ],
    instructions: [
      { step: 1, title: "Prepare Ingredients", text: "Chop fresh carrots and spinach into bite-sized pieces for your dog's size.", img: "assets/images/21.jpg" },
      { step: 2, title: "Cook Lean Turkey", text: "Gently brown turkey in a non-stick pan over medium heat with a splash of water.", img: "assets/images/20.jpg" },
      { step: 3, title: "Steam Vegetables", text: "Lightly steam carrots and peas until fork-tender to maximize nutrient absorption.", img: "assets/images/53.jpg" },
      { step: 4, title: "Combine & Serve", text: "Fold all ingredients together with brown rice and let cool to room temperature.", img: "assets/images/1.jpg" }
    ],
    nutrition: { protein: "32%", fat: "14%", fiber: "4.5%", calories: "410 kcal/bowl" }
  },
  {
    id: "rec-2",
    name: "Wild Salmon & Beetroot Superbowl",
    species: "dog",
    category: "HIGH PROTEIN",
    lifeStage: "adult",
    dietTags: ["high-protein", "grain-free", "omega-rich"],
    prepTime: "20 MIN",
    difficulty: "Easy",
    rating: 5.0,
    reviews: 58,
    image: "assets/images/5.jpg",
    summary: "Omega-3 rich wild salmon fillet paired with roasted sweet potato, antioxidant beetroot, and tender steamed broccoli florets.",
    ingredients: [
      { name: "Wild Alaskan Salmon Fillet", amount: "350g" },
      { name: "Organically Roasted Beetroot", amount: "1/2 cup" },
      { name: "Steam Broccoli Florets", amount: "1 cup" },
      { name: "Diced Sweet Potato", amount: "1 cup" }
    ],
    instructions: [
      { step: 1, title: "Poach Salmon", text: "Gently poach salmon in water until fully cooked and easily flaked with a fork.", img: "assets/images/54.jpg" },
      { step: 2, title: "Steam Greens & Roots", text: "Steam sweet potato cubes and broccoli florets until tender.", img: "assets/images/37.jpg" },
      { step: 3, title: "Plate & Flake", text: "Plate the ingredients in a clean ceramic bowl, flaking salmon evenly throughout.", img: "assets/images/5.jpg" }
    ],
    nutrition: { protein: "36%", fat: "18%", fiber: "3.8%", calories: "440 kcal/bowl" }
  },
  {
    id: "rec-3",
    name: "Braised Lamb & Harvest Kale Feast",
    species: "dog",
    category: "BALANCED",
    lifeStage: "senior",
    dietTags: ["high-protein", "senior-friendly"],
    prepTime: "30 MIN",
    difficulty: "Medium",
    rating: 4.8,
    reviews: 31,
    image: "assets/images/3.jpg",
    summary: "Artisanal braised lamb diced fine with sautéed Tuscan kale, baby carrots, and sweet potato purée.",
    ingredients: [
      { name: "Grass-Fed Lamb", amount: "300g" },
      { name: "Tuscan Kale", amount: "1 cup" },
      { name: "Sweet Potato Purée", amount: "3/4 cup" },
      { name: "Baby Carrots", amount: "1/2 cup" }
    ],
    instructions: [
      { step: 1, title: "Braise Lamb", text: "Slowly simmer diced lamb until thoroughly cooked and tender.", img: "assets/images/19.jpg" },
      { step: 2, title: "Wilting Greens", text: "Lightly wilt kale in warm bone broth without extra seasonings.", img: "assets/images/20.jpg" },
      { step: 3, title: "Artisanal Plating", text: "Plate with smooth sweet potato purée and tender baby carrots.", img: "assets/images/3.jpg" }
    ],
    nutrition: { protein: "30%", fat: "16%", fiber: "5.0%", calories: "390 kcal/bowl" }
  },
  {
    id: "rec-4",
    name: "Superfood Blueberry & Beef Bowl",
    species: "dog",
    category: "HIGH PROTEIN",
    lifeStage: "puppy",
    dietTags: ["high-protein", "puppy-boost"],
    prepTime: "15 MIN",
    difficulty: "Easy",
    rating: 4.9,
    reviews: 64,
    image: "assets/images/4.jpg",
    summary: "Lean ground beef combined with antioxidant-rich blueberries, chickpeas, rolled oats, and fresh spinach.",
    ingredients: [
      { name: "Lean Ground Beef (90%)", amount: "350g" },
      { name: "Fresh Blueberries", amount: "1/2 cup" },
      { name: "Cooked Chickpeas", amount: "1/2 cup" },
      { name: "Rolled Oats", amount: "1/2 cup" },
      { name: "Baby Spinach", amount: "1/2 cup" }
    ],
    instructions: [
      { step: 1, title: "Cook Beef", text: "Brown lean beef in a saucepan until cooked through.", img: "assets/images/54.jpg" },
      { step: 2, title: "Mix Superfoods", text: "Stir in warm rolled oats, blueberries, and cooked chickpeas.", img: "assets/images/4.jpg" }
    ],
    nutrition: { protein: "34%", fat: "15%", fiber: "4.2%", calories: "425 kcal/bowl" }
  },
  {
    id: "rec-5",
    name: "Gourmet Feline Salmon & Tuna Pâté",
    species: "cat",
    category: "HIGH PROTEIN",
    lifeStage: "adult",
    dietTags: ["high-protein", "grain-free", "taurine-rich"],
    prepTime: "15 MIN",
    difficulty: "Easy",
    rating: 5.0,
    reviews: 72,
    image: "assets/images/45.jpg",
    summary: "Silky, house-blended wild tuna and poached salmon pâté formulated with essential taurine and moisture balance.",
    ingredients: [
      { name: "Wild Tuna Fillet", amount: "200g" },
      { name: "Poached Salmon", amount: "150g" },
      { name: "Pure Bone Broth", amount: "1/4 cup" }
    ],
    instructions: [
      { step: 1, title: "Poach Fish", text: "Gently simmer tuna and salmon in water until thoroughly cooked.", img: "assets/images/48.jpg" },
      { step: 2, title: "Blend to Pâté", text: "Purée fish with bone broth to achieve a smooth texture for easy licking.", img: "assets/images/45.jpg" }
    ],
    nutrition: { protein: "42%", fat: "12%", fiber: "1.2%", calories: "280 kcal/bowl" }
  },
  {
    id: "rec-6",
    name: "Feline Chicken & Quail Egg Bowl",
    species: "cat",
    category: "BALANCED",
    lifeStage: "kitten",
    dietTags: ["grain-free", "kitten-growth"],
    prepTime: "20 MIN",
    difficulty: "Easy",
    rating: 4.9,
    reviews: 39,
    image: "assets/images/50.jpg",
    summary: "Tender shredded chicken breast paired with steamed broccoli florets and nutrient-dense soft quail eggs.",
    ingredients: [
      { name: "Shredded Chicken Breast", amount: "200g" },
      { name: "Quail Eggs (boiled)", amount: "2 whole" },
      { name: "Steamed Broccoli", amount: "1/4 cup" }
    ],
    instructions: [
      { step: 1, title: "Shred Chicken", text: "Poach lean chicken breast and shred fine for feline comfort.", img: "assets/images/49.jpg" },
      { step: 2, title: "Soft-Boil Quail Eggs", text: "Boil quail eggs for 3 minutes, peel, and halve.", img: "assets/images/50.jpg" }
    ],
    nutrition: { protein: "40%", fat: "14%", fiber: "1.5%", calories: "310 kcal/bowl" }
  },
  {
    id: "rec-7",
    name: "Poultry & Sweet Potato Le Creuset Bowl",
    species: "dog",
    category: "WEIGHT MANAGEMENT",
    lifeStage: "senior",
    dietTags: ["weight-management", "grain-free"],
    prepTime: "25 MIN",
    difficulty: "Easy",
    rating: 4.8,
    reviews: 28,
    image: "assets/images/27.jpg",
    summary: "Diced tender chicken, carrots, and sweet potato finished with an oat treat bone garnish.",
    ingredients: [
      { name: "Diced Chicken Breast", amount: "300g" },
      { name: "Diced Sweet Potato", amount: "1 cup" },
      { name: "Steamed Carrots", amount: "3/4 cup" }
    ],
    instructions: [
      { step: 1, title: "Simmer Poultry", text: "Simmer chicken breast cubes in filtered water.", img: "assets/images/52.jpg" },
      { step: 2, title: "Assemble Bowl", text: "Combine with steamed sweet potato and carrot cubes.", img: "assets/images/27.jpg" }
    ],
    nutrition: { protein: "28%", fat: "9%", fiber: "4.8%", calories: "350 kcal/bowl" }
  },
  {
    id: "rec-8",
    name: "Tabby's Raw Beef & Carrot Deluxe",
    species: "cat",
    category: "HIGH PROTEIN",
    lifeStage: "adult",
    dietTags: ["high-protein", "raw-inspired"],
    prepTime: "15 MIN",
    difficulty: "Medium",
    rating: 4.9,
    reviews: 44,
    image: "assets/images/48.jpg",
    summary: "High-grade minced beef paired with micro-shredded carrots, raw liver cubes, and egg yolk.",
    ingredients: [
      { name: "Minced Lean Beef", amount: "220g" },
      { name: "Beef Liver Cubes", amount: "30g" },
      { name: "Micro-Shredded Carrot", amount: "2 tbsp" }
    ],
    instructions: [
      { step: 1, title: "Prepare Fresh Proteins", text: "Finely chop human-grade fresh beef and liver.", img: "assets/images/48.jpg" },
      { step: 2, title: "Serve", text: "Plate in a ceramic shallow bowl at room temperature.", img: "assets/images/16.jpg" }
    ],
    nutrition: { protein: "44%", fat: "16%", fiber: "1.0%", calories: "320 kcal/bowl" }
  }
];

// --- DEFAULT INGREDIENTS DATASET ---
const INITIAL_INGREDIENTS = [
  {
    id: "ing-1",
    name: "Wild Alaskan Salmon",
    category: "PROTEINS",
    image: "assets/images/5.jpg",
    benefits: "Packed with Omega-3 fatty acids EPA & DHA for brilliant coat shine, joint mobility, and cardiac health.",
    commonUses: "Steamed, poached, or incorporated into high-protein feline & canine bowls.",
    compatibility: "Suitable for Dogs & Cats of all life stages.",
    nutrition: { protein: "22g per 100g", fat: "13g", omega3: "2.1g" }
  },
  {
    id: "ing-2",
    name: "Organic Sweet Potato",
    category: "VEGETABLES",
    image: "assets/images/4.jpg",
    benefits: "Gentle dietary fiber, rich in Beta-Carotene, Vitamin A, and Vitamin C for digestive wellness.",
    commonUses: "Steam-cooked, mashed into purée, or baked into healthy reward treats.",
    compatibility: "Excellent for Senior Pets and Sensitive Stomachs.",
    nutrition: { fiber: "3.0g per 100g", carbs: "20g", vitA: "14187 IU" }
  },
  {
    id: "ing-3",
    name: "Fresh Ground Turkey Breast",
    category: "PROTEINS",
    image: "assets/images/15.jpg",
    benefits: "Lean, easily digestible protein source high in tryptophan and B-complex vitamins.",
    commonUses: "Base protein for daily meal plans and weight management recipes.",
    compatibility: "Ideal for Dogs & Cats requiring lean protein.",
    nutrition: { protein: "29g per 100g", fat: "7g", iron: "1.4mg" }
  },
  {
    id: "ing-4",
    name: "Antioxidant Blueberries",
    category: "FRUITS",
    image: "assets/images/11.jpg",
    benefits: "Loaded with anthocyanins and Vitamin C to combat free radicals and support cognitive health.",
    commonUses: "Topper for fresh morning bowls or frozen treat toppers.",
    compatibility: "Dogs (all ages). Limit for Cats.",
    nutrition: { vitC: "9.7mg", fiber: "2.4g", antioxidants: "High" }
  },
  {
    id: "ing-5",
    name: "Tuscan Kale & Spinach",
    category: "VEGETABLES",
    image: "assets/images/37.jpg",
    benefits: "Chlorophyll, iron, and calcium boost immune vigor and vascular cell health.",
    commonUses: "Lightly steamed or wilted into savory stews.",
    compatibility: "Dogs & Cats (in moderate, recommended portions).",
    nutrition: { calcium: "150mg", vitK: "817mcg", iron: "2.7mg" }
  },
  {
    id: "ing-6",
    name: "Quail & Chicken Eggs",
    category: "SUPPLEMENTS",
    image: "assets/images/50.jpg",
    benefits: "Complete amino acid profile, choline for brain development, and biotin for skin elasticity.",
    commonUses: "Soft-boiled or scrambled bowl garnish.",
    compatibility: "Universally loved by Dogs & Cats.",
    nutrition: { protein: "13g per 100g", choline: "294mg", biotin: "High" }
  }
];

// --- EXPERTS DATASET ---
const EXPERTS_DATA = [
  {
    name: "Dr. Maya Chen, DVM",
    role: "Chief Veterinary Nutritionist",
    specialty: "Canine Dietetics & Metabolic Health",
    image: "assets/images/34.jpg",
    bio: "Dr. Chen holds a Doctorate in Veterinary Medicine from UC Davis with 14+ years specializing in tailored raw and fresh feeding protocols for dogs."
  },
  {
    name: "Dr. Julian Vance, PhD",
    role: "Feline Nutrition Specialist",
    specialty: "Obligate Carnivore Physiology & Taurine Research",
    image: "assets/images/35.jpg",
    bio: "Dr. Vance is a world-renowned researcher focused on feline hydration, kidney function support, and taurine bioavailability in homemade meals."
  },
  {
    name: "Elena Rostova",
    role: "Executive Culinary Recipe Director",
    specialty: "Gourmet Pet Plating & Natural Preservation",
    image: "assets/images/39.jpg",
    bio: "A former Michelin-star pastry chef who transitioned her passion into crafting clean, nutrient-dense gourmet meals for pets."
  }
];

// --- COMMUNITY POSTS DATASET ---
const COMMUNITY_POSTS = [
  {
    id: "post-1",
    author: "Sarah & Max",
    petType: "Golden Retriever",
    image: "assets/images/31.jpg",
    title: "Max's Morning Salmon Bowl",
    likes: 142,
    story: "Switching Max to Paw & Plate's Wild Salmon recipe cured his coat itchiness within 3 weeks! He literally waits by the counter while I prep."
  },
  {
    id: "post-2",
    author: "David & Oliver",
    petType: "Tabby Cat",
    image: "assets/images/46.jpg",
    title: "Oliver's Sunday Pâté Feast",
    likes: 98,
    story: "Oliver used to be extremely picky with kibble. Seeing him devour fresh minced tuna and quail egg gives me so much peace of mind!"
  },
  {
    id: "post-3",
    author: "Clara & Winston",
    petType: "Pug",
    image: "assets/images/24.jpg",
    title: "Weekly Prep Sunday!",
    likes: 215,
    story: "Using the Paw & Plate Weekly Planner makes cooking for Winston so easy! 45 minutes on Sunday covers his entire week."
  }
];

// --- APPLICATION STATE MANAGER ---
class PawState {
  static getRecipes() {
    const saved = localStorage.getItem("paw_recipes");
    return saved ? JSON.parse(saved) : INITIAL_RECIPES;
  }

  static saveRecipes(recipes) {
    localStorage.setItem("paw_recipes", JSON.stringify(recipes));
  }

  static getFavorites() {
    const saved = localStorage.getItem("paw_favorites");
    return saved ? JSON.parse(saved) : ["rec-1", "rec-5"];
  }

  static toggleFavorite(id) {
    let favs = this.getFavorites();
    if (favs.includes(id)) {
      favs = favs.filter(item => item !== id);
    } else {
      favs.push(id);
    }
    localStorage.setItem("paw_favorites", JSON.stringify(favs));
    this.updateHeaderBadge();
    return favs.includes(id);
  }

  static getPetProfile() {
    const saved = localStorage.getItem("paw_profile");
    return saved ? JSON.parse(saved) : {
      name: "Max",
      species: "dog",
      breed: "Golden Retriever",
      age: "4 Years",
      weight: "28 kg",
      lifeStage: "adult",
      activity: "High",
      preferences: "High Protein, Grain-Free Salmon & Turkey"
    };
  }

  static savePetProfile(profile) {
    localStorage.setItem("paw_profile", JSON.stringify(profile));
  }

  static getMealPlan() {
    const saved = localStorage.getItem("paw_meal_plan");
    return saved ? JSON.parse(saved) : {
      MON: ["rec-1"],
      TUE: ["rec-2"],
      WED: ["rec-4"],
      THU: ["rec-1"],
      FRI: ["rec-3"],
      SAT: ["rec-2"],
      SUN: ["rec-7"]
    };
  }

  static saveMealPlan(plan) {
    localStorage.setItem("paw_meal_plan", JSON.stringify(plan));
  }

  static getShoppingList() {
    const saved = localStorage.getItem("paw_shopping_list");
    if (saved) return JSON.parse(saved);

    // Default generated list from initial meal plan
    const defaultList = [
      { id: "s-1", name: "Fresh Ground Turkey Breast", amount: "800g", category: "Proteins", checked: false },
      { id: "s-2", name: "Wild Alaskan Salmon Fillet", amount: "700g", category: "Proteins", checked: false },
      { id: "s-3", name: "Steamed Organic Carrots", amount: "3 cups", category: "Vegetables", checked: true },
      { id: "s-4", name: "Baby Spinach & Tuscan Kale", amount: "2 cups", category: "Vegetables", checked: false },
      { id: "s-5", name: "Diced Sweet Potato", amount: "2 cups", category: "Vegetables", checked: false },
      { id: "s-6", name: "Fresh Blueberries", amount: "1 cup", category: "Fruits", checked: false }
    ];
    localStorage.setItem("paw_shopping_list", JSON.stringify(defaultList));
    return defaultList;
  }

  static saveShoppingList(list) {
    localStorage.setItem("paw_shopping_list", JSON.stringify(list));
  }

  static getUser() {
    const saved = localStorage.getItem("paw_user");
    return saved ? JSON.parse(saved) : {
      name: "Alex Morgan",
      email: "alex@pawandplate.com",
      isLoggedIn: true,
      role: "admin"
    };
  }

  static setUser(user) {
    localStorage.setItem("paw_user", JSON.stringify(user));
  }

  static updateHeaderBadge() {
    const favs = this.getFavorites();
    const countBadge = document.getElementById("favCountBadge");
    if (countBadge) {
      countBadge.textContent = favs.length;
    }
  }
}

// --- GLOBAL UI INITIALIZERS ---
document.addEventListener("DOMContentLoaded", () => {
  initNavbarScroll();
  initScrollReveal();
  PawState.updateHeaderBadge();
  initFavoritesGlobalListeners();
  
  // Page-specific initialization routing
  const page = document.body.getAttribute("data-page");
  switch (page) {
    case "home":
      initHomePage();
      break;
    case "recipes":
      initRecipesPage();
      break;
    case "recipe-detail":
      initRecipeDetailPage();
      break;
    case "ingredients":
      initIngredientsPage();
      break;
    case "nutrition":
      initNutritionPage();
      break;
    case "meal-planner":
      initMealPlannerPage();
      break;
    case "community":
      initCommunityPage();
      break;
    case "dashboard":
      initDashboardPage();
      break;
    case "login":
      initLoginPage();
      break;
    case "about":
      initAboutPage();
      break;
    case "admin":
      initAdminPage();
      break;
  }
});

// --- STICKY NAVBAR & SCROLL ---
function initNavbarScroll() {
  const navbar = document.querySelector(".paw-navbar");
  if (!navbar) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("shrunk");
    } else {
      navbar.classList.remove("shrunk");
    }
  });
}

// --- INTERSECTION OBSERVER SCROLL REVEAL ---
function initScrollReveal() {
  const elements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");
  if (elements.length === 0) return;

  // Immediately activate elements already visible in viewport on page load
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      el.classList.add("active");
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });

  elements.forEach(el => {
    if (!el.classList.contains("active")) {
      observer.observe(el);
    }
  });
}

// --- FAVORITES TOGGLE EVENT DELEGATION ---
function initFavoritesGlobalListeners() {
  document.addEventListener("click", (e) => {
    const saveBtn = e.target.closest(".recipe-save-btn");
    if (!saveBtn) return;
    
    e.preventDefault();
    e.stopPropagation();
    const recipeId = saveBtn.getAttribute("data-recipe-id");
    if (!recipeId) return;

    const isFav = PawState.toggleFavorite(recipeId);
    if (isFav) {
      saveBtn.classList.add("active");
      saveBtn.innerHTML = '<i class="fas fa-heart"></i>';
    } else {
      saveBtn.classList.remove("active");
      saveBtn.innerHTML = '<i class="far fa-heart"></i>';
    }
  });
}

// --- RECIPE CARD RENDER HELPER ---
function createRecipeCardHTML(recipe) {
  const favorites = PawState.getFavorites();
  const isFav = favorites.includes(recipe.id);
  const tagClass = recipe.species === "dog" ? "tag-dog" : "tag-cat";
  const icon = recipe.species === "dog" ? "fa-dog" : "fa-cat";

  return `
    <div class="col-lg-4 col-md-6 mb-4 reveal">
      <div class="recipe-card fresh-bowl-effect">
        <div class="recipe-card-img-wrap">
          <img src="${recipe.image}" alt="${recipe.name}" loading="lazy">
          <button class="recipe-save-btn ${isFav ? 'active' : ''}" data-recipe-id="${recipe.id}" aria-label="Save Recipe">
            <i class="${isFav ? 'fas' : 'far'} fa-heart"></i>
          </button>
        </div>
        <div class="recipe-card-body">
          <div class="recipe-card-meta">
            <span class="tag-badge ${tagClass}"><i class="fas ${icon}"></i> ${recipe.species.toUpperCase()}</span>
            <span class="tag-badge tag-balanced">${recipe.category}</span>
          </div>
          <h3 class="recipe-title"><a href="recipe-detail.html?id=${recipe.id}">${recipe.name}</a></h3>
          <p class="small text-muted mb-3" style="display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">
            ${recipe.summary}
          </p>
          <div class="recipe-details-row">
            <span><i class="far fa-clock text-terracotta"></i> ${recipe.prepTime}</span>
            <span><i class="fas fa-signal text-sage"></i> ${recipe.difficulty}</span>
            <span class="ms-auto fw-bold text-forest"><i class="fas fa-star text-warning"></i> ${recipe.rating}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

// --- HOME PAGE ENGINE ---
function initHomePage() {
  // Render Featured Recipes
  const featuredGrid = document.getElementById("featuredRecipesGrid");
  if (featuredGrid) {
    const recipes = PawState.getRecipes();
    featuredGrid.innerHTML = recipes.slice(0, 6).map(r => createRecipeCardHTML(r)).join("");
    initScrollReveal();
  }

  // Handle Home Pet Profile Form
  const profileForm = document.getElementById("homePetProfileForm");
  if (profileForm) {
    profileForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const profile = {
        name: document.getElementById("petName").value || "Max",
        species: document.getElementById("petSpecies").value || "dog",
        breed: document.getElementById("petBreed").value || "Golden Retriever",
        age: document.getElementById("petAge").value || "3 Years",
        weight: document.getElementById("petWeight").value || "25 kg",
        lifeStage: document.getElementById("petLifeStage").value || "adult",
        activity: document.getElementById("petActivity").value || "Moderate",
        preferences: document.getElementById("petPreferences").value || "High Protein"
      };
      PawState.savePetProfile(profile);
      renderPersonalizedRecommendations(profile);
      
      const modalEl = document.getElementById("profileResultModal");
      if (modalEl && window.bootstrap) {
        const modal = new bootstrap.Modal(modalEl);
        modal.show();
      }
    });
  }
}

function renderPersonalizedRecommendations(profile) {
  const container = document.getElementById("recommendedRecipesContainer");
  if (!container) return;

  const recipes = PawState.getRecipes();
  const filtered = recipes.filter(r => r.species === profile.species);
  const selected = filtered.length > 0 ? filtered : recipes;

  container.innerHTML = `
    <div class="alert disclaimer-banner mb-4">
      <i class="fas fa-paw text-forest me-2"></i>
      <strong>Custom Nutrition Protocol for ${profile.name}:</strong> Based on a ${profile.age} ${profile.breed} (${profile.weight}) with ${profile.activity} activity level.
    </div>
    <div class="row">
      ${selected.slice(0, 3).map(r => createRecipeCardHTML(r)).join("")}
    </div>
  `;
}

// --- RECIPES PAGE ENGINE ---
function initRecipesPage() {
  const recipesGrid = document.getElementById("recipesPageGrid");
  const filterBtns = document.querySelectorAll(".btn-filter");
  const searchInput = document.getElementById("recipeSearchInput");
  const resultCount = document.getElementById("recipeResultCount");

  let currentCategory = "ALL";
  let currentSearch = "";

  function render() {
    const allRecipes = PawState.getRecipes();
    let filtered = allRecipes.filter(recipe => {
      // Category check
      let matchesCat = true;
      if (currentCategory === "DOG") matchesCat = recipe.species === "dog";
      else if (currentCategory === "CAT") matchesCat = recipe.species === "cat";
      else if (currentCategory === "PUPPY") matchesCat = recipe.lifeStage === "puppy";
      else if (currentCategory === "KITTEN") matchesCat = recipe.lifeStage === "kitten";
      else if (currentCategory === "SENIOR") matchesCat = recipe.lifeStage === "senior";
      else if (currentCategory === "HIGH PROTEIN") matchesCat = recipe.category === "HIGH PROTEIN";
      else if (currentCategory === "GRAIN FREE") matchesCat = recipe.dietTags.includes("grain-free");
      else if (currentCategory === "WEIGHT MANAGEMENT") matchesCat = recipe.category === "WEIGHT MANAGEMENT";

      // Search check
      let matchesSearch = true;
      if (currentSearch.trim() !== "") {
        const q = currentSearch.toLowerCase();
        matchesSearch = recipe.name.toLowerCase().includes(q) ||
                        recipe.summary.toLowerCase().includes(q) ||
                        recipe.ingredients.some(i => i.name.toLowerCase().includes(q));
      }

      return matchesCat && matchesSearch;
    });

    if (resultCount) {
      resultCount.textContent = `Showing ${filtered.length} recipe${filtered.length === 1 ? '' : 's'}`;
    }

    if (recipesGrid) {
      if (filtered.length === 0) {
        recipesGrid.innerHTML = `
          <div class="col-12 text-center py-5">
            <i class="fas fa-utensils fa-3x text-muted mb-3"></i>
            <h4 class="font-heading">No recipes found matching your criteria</h4>
            <p class="text-muted">Try adjusting your filter or search search terms.</p>
          </div>
        `;
      } else {
        recipesGrid.innerHTML = filtered.map(r => createRecipeCardHTML(r)).join("");
        initScrollReveal();
      }
    }
  }

  // Filter Buttons Click
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-filter") || "ALL";
      render();
    });
  });

  // Search Input
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value;
      render();
    });
  }

  render();
}

// --- RECIPE DETAIL PAGE ENGINE ---
function initRecipeDetailPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const recipeId = urlParams.get("id") || "rec-1";
  
  const recipes = PawState.getRecipes();
  const recipe = recipes.find(r => r.id === recipeId) || recipes[0];

  // Populate Title & Meta
  document.title = `${recipe.name} — Paw & Plate Gourmet Studio`;
  
  const titleEl = document.getElementById("detailRecipeTitle");
  if (titleEl) titleEl.textContent = recipe.name;

  const speciesEl = document.getElementById("detailRecipeSpecies");
  if (speciesEl) {
    speciesEl.className = `tag-badge ${recipe.species === 'dog' ? 'tag-dog' : 'tag-cat'} me-2`;
    speciesEl.innerHTML = `<i class="fas ${recipe.species === 'dog' ? 'fa-dog' : 'fa-cat'}"></i> ${recipe.species.toUpperCase()}`;
  }

  const categoryEl = document.getElementById("detailRecipeCategory");
  if (categoryEl) categoryEl.textContent = recipe.category;

  const prepTimeEl = document.getElementById("detailPrepTime");
  if (prepTimeEl) prepTimeEl.textContent = recipe.prepTime;

  const difficultyEl = document.getElementById("detailDifficulty");
  if (difficultyEl) difficultyEl.textContent = recipe.difficulty;

  const summaryEl = document.getElementById("detailSummary");
  if (summaryEl) summaryEl.textContent = recipe.summary;

  const imgEl = document.getElementById("detailHeroImg");
  if (imgEl) imgEl.src = recipe.image;

  // Nutrition Facts
  const n = recipe.nutrition;
  const nContainer = document.getElementById("detailNutritionContainer");
  if (nContainer && n) {
    nContainer.innerHTML = `
      <div class="col-3 text-center p-2 bg-warm-white border rounded">
        <div class="fw-bold text-forest">${n.protein}</div>
        <div class="small text-muted">Protein</div>
      </div>
      <div class="col-3 text-center p-2 bg-warm-white border rounded">
        <div class="fw-bold text-forest">${n.fat}</div>
        <div class="small text-muted">Fat</div>
      </div>
      <div class="col-3 text-center p-2 bg-warm-white border rounded">
        <div class="fw-bold text-forest">${n.fiber}</div>
        <div class="small text-muted">Fiber</div>
      </div>
      <div class="col-3 text-center p-2 bg-warm-white border rounded">
        <div class="fw-bold text-terracotta">${n.calories}</div>
        <div class="small text-muted">Energy</div>
      </div>
    `;
  }

  // Ingredients List
  const ingListEl = document.getElementById("detailIngredientsList");
  if (ingListEl && recipe.ingredients) {
    ingListEl.innerHTML = recipe.ingredients.map(ing => `
      <li class="d-flex align-items-center justify-content-between p-3 border-bottom bg-warm-white rounded mb-2">
        <span class="fw-semibold text-forest"><i class="fas fa-check-circle text-sage me-2"></i> ${ing.name}</span>
        <span class="badge bg-sage-light text-forest px-3 py-2 rounded-pill">${ing.amount}</span>
      </li>
    `).join("");
  }

  // Step-by-Step Cooking Workflow (Scroll Revealed)
  const stepsContainer = document.getElementById("detailPrepStepsContainer");
  if (stepsContainer && recipe.instructions) {
    stepsContainer.innerHTML = recipe.instructions.map((step, idx) => `
      <div class="prep-step-card reveal ${idx % 2 === 0 ? 'reveal-left' : 'reveal-right'} mb-4">
        <div class="step-number">0${step.step}</div>
        <div class="flex-grow-1">
          <h4 class="font-heading mb-2">${step.title}</h4>
          <p class="text-muted mb-0">${step.text}</p>
        </div>
        ${step.img ? `<div class="step-img-wrap d-none d-md-block"><img src="${step.img}" alt="${step.title}"></div>` : ''}
      </div>
    `).join("");
    initScrollReveal();
  }

  // Save Recipe Button
  const saveBtn = document.getElementById("detailSaveRecipeBtn");
  if (saveBtn) {
    const favs = PawState.getFavorites();
    if (favs.includes(recipe.id)) saveBtn.classList.add("btn-paw-terracotta");
    saveBtn.addEventListener("click", () => {
      const active = PawState.toggleFavorite(recipe.id);
      if (active) {
        saveBtn.innerHTML = '<i class="fas fa-heart me-2"></i> Saved to Collection';
      } else {
        saveBtn.innerHTML = '<i class="far fa-heart me-2"></i> Save Recipe';
      }
    });
  }

  // Add to Meal Plan Button
  const addPlanBtn = document.getElementById("detailAddToPlanBtn");
  if (addPlanBtn) {
    addPlanBtn.addEventListener("click", () => {
      const plan = PawState.getMealPlan();
      plan.MON.push(recipe.id);
      PawState.saveMealPlan(plan);
      alert(`" ${recipe.name}" added to Monday's Bowl Plan! View your Weekly Planner.`);
    });
  }
}

// --- INGREDIENTS PAGE ENGINE ---
function initIngredientsPage() {
  const grid = document.getElementById("ingredientsGrid");
  if (!grid) return;

  grid.innerHTML = INITIAL_INGREDIENTS.map(ing => `
    <div class="col-lg-4 col-md-6 mb-4 reveal">
      <div class="ingredient-card" onclick="openIngredientModal('${ing.id}')">
        <div class="ingredient-img-wrap">
          <img src="${ing.image}" alt="${ing.name}">
        </div>
        <div class="ingredient-category">${ing.category}</div>
        <h3 class="ingredient-name">${ing.name}</h3>
        <p class="small text-muted mb-3" style="display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">
          ${ing.benefits}
        </p>
        <span class="btn-paw btn-paw-outline btn-paw-sm">Explore Nutrition</span>
      </div>
    </div>
  `).join("");
  initScrollReveal();
}

window.openIngredientModal = function(ingId) {
  const ing = INITIAL_INGREDIENTS.find(i => i.id === ingId);
  if (!ing) return;

  const modalImg = document.getElementById("ingModalImg");
  const modalName = document.getElementById("ingModalName");
  const modalCategory = document.getElementById("ingModalCategory");
  const modalBenefits = document.getElementById("ingModalBenefits");
  const modalUses = document.getElementById("ingModalUses");
  const modalCompat = document.getElementById("ingModalCompat");

  if (modalImg) modalImg.src = ing.image;
  if (modalName) modalName.textContent = ing.name;
  if (modalCategory) modalCategory.textContent = ing.category;
  if (modalBenefits) modalBenefits.textContent = ing.benefits;
  if (modalUses) modalUses.textContent = ing.commonUses;
  if (modalCompat) modalCompat.textContent = ing.compatibility;

  const modalEl = document.getElementById("ingredientDetailModal");
  if (modalEl && window.bootstrap) {
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
  }
};

// --- NUTRITION PAGE ENGINE ---
function initNutritionPage() {
  const expertsGrid = document.getElementById("expertsGrid");
  if (expertsGrid) {
    expertsGrid.innerHTML = EXPERTS_DATA.map(exp => `
      <div class="col-lg-4 col-md-6 mb-4 reveal">
        <div class="expert-card">
          <div class="expert-card-img">
            <img src="${exp.image}" alt="${exp.name}">
          </div>
          <div class="expert-card-body">
            <h3 class="expert-name">${exp.name}</h3>
            <div class="expert-role">${exp.role}</div>
            <div class="small fw-semibold text-muted mb-2"><i class="fas fa-award text-terracotta me-1"></i> ${exp.specialty}</div>
            <p class="small text-muted mb-0">${exp.bio}</p>
          </div>
        </div>
      </div>
    `).join("");
    initScrollReveal();
  }
}

// --- MEAL PLANNER PAGE ENGINE ---
function initMealPlannerPage() {
  renderPlannerCalendar();
  renderShoppingListUI();

  // Clear All Days
  const clearBtn = document.getElementById("clearPlannerBtn");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to clear your entire weekly meal plan?")) {
        const emptyPlan = { MON: [], TUE: [], WED: [], THU: [], FRI: [], SAT: [], SUN: [] };
        PawState.saveMealPlan(emptyPlan);
        renderPlannerCalendar();
      }
    });
  }
}

function renderPlannerCalendar() {
  const plan = PawState.getMealPlan();
  const recipes = PawState.getRecipes();
  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const grid = document.getElementById("plannerGrid");
  if (!grid) return;

  let totalMeals = 0;

  grid.innerHTML = days.map(day => {
    const dayRecipes = (plan[day] || []).map(id => recipes.find(r => r.id === id)).filter(Boolean);
    totalMeals += dayRecipes.length;

    return `
      <div class="planner-day-col">
        <div class="planner-day-header">
          <span class="day-name">${day}</span>
          <span class="badge bg-sage-light text-forest">${dayRecipes.length} ${dayRecipes.length === 1 ? 'Meal' : 'Meals'}</span>
        </div>
        <div class="planner-slot">
          ${dayRecipes.map((r, idx) => `
            <div class="planner-item-card">
              <button class="planner-item-remove" onclick="removeMealFromDay('${day}', ${idx})" title="Remove Meal">
                <i class="fas fa-times"></i>
              </button>
              <img src="${r.image}" alt="${r.name}">
              <div class="planner-item-title">${r.name}</div>
              <div class="d-flex align-items-center justify-content-between extra-small text-muted mt-1">
                <span><i class="far fa-clock me-1"></i> ${r.prepTime}</span>
                <span class="badge bg-cream text-forest border">${r.species.toUpperCase()}</span>
              </div>
            </div>
          `).join("")}
          <div class="planner-empty-drop" onclick="openAddRecipeToDayModal('${day}')">
            <i class="fas fa-plus-circle text-sage"></i>
            <span>Add Meal</span>
          </div>
        </div>
      </div>
    `;
  }).join("");

  const totalCountEl = document.getElementById("totalMealsCount");
  if (totalCountEl) {
    totalCountEl.textContent = `${totalMeals} ${totalMeals === 1 ? 'Meal' : 'Meals'}`;
  }
}

window.removeMealFromDay = function(day, index) {
  const plan = PawState.getMealPlan();
  if (plan[day]) {
    plan[day].splice(index, 1);
    PawState.saveMealPlan(plan);
    renderPlannerCalendar();
  }
};

window.openAddRecipeToDayModal = function(day) {
  const modalEl = document.getElementById("addRecipeToDayModal");
  const recipesListEl = document.getElementById("modalRecipesList");
  if (!modalEl || !recipesListEl) return;

  const recipes = PawState.getRecipes();
  recipesListEl.innerHTML = recipes.map(r => `
    <div class="d-flex align-items-center justify-content-between p-2 border-bottom hover-bg">
      <div class="d-flex align-items-center gap-3">
        <img src="${r.image}" style="width:50px;height:50px;object-fit:cover;border-radius:6px;">
        <div>
          <div class="fw-semibold text-forest">${r.name}</div>
          <div class="small text-muted">${r.species.toUpperCase()} • ${r.prepTime}</div>
        </div>
      </div>
      <button class="btn-paw btn-paw-primary btn-paw-sm" onclick="addRecipeToDay('${r.id}', '${day}')">Select</button>
    </div>
  `).join("");

  if (window.bootstrap) {
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
  }
};

window.addRecipeToDay = function(recipeId, day) {
  const plan = PawState.getMealPlan();
  if (!plan[day]) plan[day] = [];
  plan[day].push(recipeId);
  PawState.saveMealPlan(plan);
  renderPlannerCalendar();

  const modalEl = document.getElementById("addRecipeToDayModal");
  if (modalEl && window.bootstrap) {
    const instance = bootstrap.Modal.getInstance(modalEl);
    if (instance) instance.hide();
  }
};

// --- SHOPPING LIST LOGIC ---
function renderShoppingListUI() {
  const listEl = document.getElementById("shoppingListContainer");
  if (!listEl) return;

  const items = PawState.getShoppingList();
  listEl.innerHTML = items.map((item, idx) => `
    <div class="shopping-item-row ${item.checked ? 'completed' : ''}">
      <div class="d-flex align-items-center gap-3">
        <input type="checkbox" class="shopping-checkbox" ${item.checked ? 'checked' : ''} onchange="toggleShoppingItem(${idx})">
        <span class="fw-medium text-forest">${item.name}</span>
      </div>
      <span class="badge bg-cream text-muted border">${item.amount}</span>
    </div>
  `).join("");
}

window.toggleShoppingItem = function(index) {
  const items = PawState.getShoppingList();
  if (items[index]) {
    items[index].checked = !items[index].checked;
    PawState.saveShoppingList(items);
    renderShoppingListUI();
  }
};

window.clearCompletedShopping = function() {
  let items = PawState.getShoppingList();
  items = items.filter(i => !i.checked);
  PawState.saveShoppingList(items);
  renderShoppingListUI();
};

// --- COMMUNITY PAGE ENGINE ---
function initCommunityPage() {
  const postsGrid = document.getElementById("communityPostsGrid");
  if (!postsGrid) return;

  postsGrid.innerHTML = COMMUNITY_POSTS.map(post => `
    <div class="col-lg-4 col-md-6 mb-4 reveal">
      <div class="recipe-card">
        <div class="recipe-card-img-wrap" style="aspect-ratio: 16/10;">
          <img src="${post.image}" alt="${post.title}">
        </div>
        <div class="recipe-card-body">
          <div class="d-flex align-items-center justify-content-between mb-2">
            <span class="fw-bold text-forest small"><i class="fas fa-user-circle text-terracotta me-1"></i> ${post.author}</span>
            <span class="badge bg-sage-light text-forest">${post.petType}</span>
          </div>
          <h3 class="recipe-title">${post.title}</h3>
          <p class="small text-muted mb-3">${post.story}</p>
          <div class="d-flex align-items-center justify-content-between pt-2 border-top">
            <button class="btn btn-sm btn-outline-danger rounded-pill" onclick="likePost(this)">
              <i class="far fa-heart me-1"></i> <span>${post.likes}</span> Likes
            </button>
            <span class="small text-muted"><i class="far fa-comment me-1"></i> 12 Comments</span>
          </div>
        </div>
      </div>
    </div>
  `).join("");
  initScrollReveal();
}

window.likePost = function(btn) {
  const span = btn.querySelector("span");
  let count = parseInt(span.textContent);
  count++;
  span.textContent = count;
  btn.classList.remove("btn-outline-danger");
  btn.classList.add("btn-danger");
  btn.innerHTML = `<i class="fas fa-heart me-1"></i> <span>${count}</span> Liked`;
};

// --- DASHBOARD ENGINE ---
function initDashboardPage() {
  // Render Pet Profile
  const profile = PawState.getPetProfile();
  const profileCard = document.getElementById("dashPetProfileCard");
  if (profileCard) {
    profileCard.innerHTML = `
      <div class="d-flex flex-column flex-sm-row align-items-center align-items-sm-start text-center text-sm-start gap-3 gap-md-4">
        <div class="rounded-circle overflow-hidden border border-3 border-cream shadow-sm mx-auto mx-sm-0" style="width:84px;height:84px;min-width:84px;flex-shrink:0;">
          <img src="assets/images/10.jpg" alt="${profile.name}" style="width:100%;height:100%;object-fit:cover;">
        </div>
        <div class="w-100 min-w-0">
          <h2 class="font-heading mb-1 text-forest h3">${profile.name}</h2>
          <div class="text-muted fw-medium small mb-2 text-wrap">${profile.breed} • ${profile.age} • ${profile.weight}</div>
          <div class="d-flex flex-wrap justify-content-center justify-content-sm-start gap-2">
            <span class="tag-badge tag-dog">${profile.lifeStage.toUpperCase()}</span>
            <span class="tag-badge tag-balanced">Activity: ${profile.activity}</span>
          </div>
        </div>
      </div>
    `;
  }

  // Render Saved Recipes
  const savedGrid = document.getElementById("dashSavedRecipesGrid");
  if (savedGrid) {
    const favIds = PawState.getFavorites();
    const recipes = PawState.getRecipes();
    const favRecipes = recipes.filter(r => favIds.includes(r.id));

    if (favRecipes.length === 0) {
      savedGrid.innerHTML = `<p class="text-muted">No saved recipes yet. Explore our kitchen and click the heart icon!</p>`;
    } else {
      savedGrid.innerHTML = favRecipes.map(r => createRecipeCardHTML(r)).join("");
      initScrollReveal();
    }
  }

  // Render Shopping List Summary
  renderShoppingListUI();
}

// --- ADMIN PAGE ENGINE ---
function initAdminPage() {
  renderAdminRecipesTable();

  const addForm = document.getElementById("adminAddRecipeForm");
  if (addForm) {
    addForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const recipes = PawState.getRecipes();
      const newRecipe = {
        id: "rec-" + (Date.now()),
        name: document.getElementById("adminRecipeName").value,
        species: document.getElementById("adminPetSpecies").value,
        category: document.getElementById("adminCategory").value,
        lifeStage: "adult",
        dietTags: ["high-protein"],
        prepTime: document.getElementById("adminPrepTime").value + " MIN",
        difficulty: document.getElementById("adminDifficulty").value,
        rating: 5.0,
        reviews: 1,
        image: document.getElementById("adminImageSelect").value || "assets/images/1.jpg",
        summary: document.getElementById("adminSummary").value,
        ingredients: [
          { name: "Fresh Protein Base", amount: "300g" },
          { name: "Garden Vegetables", amount: "1 cup" }
        ],
        instructions: [
          { step: 1, title: "Prepare Fresh Ingredients", text: "Chop clean ingredients into safe portions.", img: "assets/images/21.jpg" },
          { step: 2, title: "Gently Cook & Serve", text: "Cook over low heat until safe and nutritious.", img: "assets/images/1.jpg" }
        ],
        nutrition: { protein: "32%", fat: "14%", fiber: "4.0%", calories: "400 kcal/bowl" }
      };

      recipes.unshift(newRecipe);
      PawState.saveRecipes(recipes);
      renderAdminRecipesTable();
      addForm.reset();
      alert("New Gourmet Recipe successfully published to platform!");
    });
  }
}

function renderAdminRecipesTable() {
  const tbody = document.getElementById("adminRecipesTableBody");
  if (!tbody) return;

  const recipes = PawState.getRecipes();
  tbody.innerHTML = recipes.map(r => `
    <tr>
      <td>
        <div class="d-flex align-items-center gap-3">
          <img src="${r.image}" style="width:48px;height:48px;object-fit:cover;border-radius:6px;">
          <div>
            <div class="fw-bold text-forest">${r.name}</div>
            <div class="small text-muted">${r.id}</div>
          </div>
        </div>
      </td>
      <td><span class="tag-badge ${r.species === 'dog' ? 'tag-dog' : 'tag-cat'}">${r.species.toUpperCase()}</span></td>
      <td><span class="badge bg-sage-light text-forest">${r.category}</span></td>
      <td>${r.prepTime}</td>
      <td><i class="fas fa-star text-warning me-1"></i> ${r.rating}</td>
      <td>
        <button class="btn btn-sm btn-outline-danger" onclick="deleteAdminRecipe('${r.id}')"><i class="fas fa-trash"></i></button>
      </td>
    </tr>
  `).join("");
}

window.deleteAdminRecipe = function(id) {
  if (confirm("Are you sure you want to delete this recipe?")) {
    let recipes = PawState.getRecipes();
    recipes = recipes.filter(r => r.id !== id);
    PawState.saveRecipes(recipes);
    renderAdminRecipesTable();
  }
};

// --- AUTHENTICATION PAGE ENGINE ---
function initLoginPage() {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("loginEmail").value;
      const user = { name: email.split("@")[0], email: email, isLoggedIn: true, role: "user" };
      PawState.setUser(user);
      alert("Welcome back! Redirecting to your personal Dashboard...");
      window.location.href = "dashboard.html";
    });
  }

  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("regName").value;
      const email = document.getElementById("regEmail").value;
      const user = { name: name, email: email, isLoggedIn: true, role: "user" };
      PawState.setUser(user);
      alert("Account created successfully! Welcome to Paw & Plate.");
      window.location.href = "dashboard.html";
    });
  }
}

// --- Sticky Navbar Scroll Elevation Effect ---
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".paw-navbar");
  if (navbar) {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
});

// --- Dynamic Active Navbar Link & Scroll Reveal Animations ---
document.addEventListener("DOMContentLoaded", () => {
  // 1. Navbar Active Link Auto-Highlight
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-link-paw");
  
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (!href) return;
    const linkPath = href.split("/").pop();
    
    if (linkPath === currentPath || (currentPath === "" && linkPath === "index.html") || (currentPath.toLowerCase() === linkPath.toLowerCase())) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // 2. Scroll-Triggered Reveal Animations Engine
  initScrollReveals();
});

function initScrollReveals() {
  const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale, .card-paw, .farm-card, .ingredient-ratio-card");
  
  if ("IntersectionObserver" in window) {
    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: "0px 0px -40px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add staggered delay for grid items
          setTimeout(() => {
            entry.target.classList.add("active");
          }, 60);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add("active"));
  }
}
