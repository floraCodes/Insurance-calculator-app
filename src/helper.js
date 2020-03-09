// Get the car age
export function getYearDifference(year) {
  return Math.abs(new Date().getFullYear() - year);
}

// Calculate the price according to the brand origin
export function calculateBrand(brand) {
  let increment;

  switch (brand) {
    case "european":
      increment = 1.3;
      break;

    case "american":
      increment = 1.15;
      break;

    case "asia":
      increment = 1.05;
      break;

    default:
      break;
  }

  return increment;
}

// Calculate according to chosen plan
export function getPlan(plan) {
  return plan === "basic" ? 1.2 : 1.5;
}

// Capitalize user choices
export function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
