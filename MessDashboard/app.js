let totalProtein = 0;

function addFoodItem() {
    const foodItemInput = document.getElementById('foodItem');
    const proteinContentInput = document.getElementById('proteinContent');

    const foodItem = foodItemInput.value.trim();
    const proteinContent = parseFloat(proteinContentInput.value);

    if (foodItem === '' || isNaN(proteinContent) || proteinContent <= 0) {
        alert('Please enter valid values for food item and protein content.');
        return;
    }

    // Update total protein
    totalProtein += proteinContent;
    updateTotalProtein();

    // Display food item in the list
    const foodList = document.getElementById('foodList');
    const listItem = document.createElement('li');
    listItem.textContent = `${foodItem}: ${proteinContent}g`;
    foodList.appendChild(listItem);

    // Clear input fields
    foodItemInput.value = '';
    proteinContentInput.value = '';
}

function clearMenu() {
    // Clear the menu list
    const foodList = document.getElementById('foodList');
    foodList.innerHTML = '';

    // Reset total protein
    totalProtein = 0;
    updateTotalProtein();
}

function updateTotalProtein() {
    const totalProteinSpan = document.getElementById('totalProtein');
    totalProteinSpan.textContent = totalProtein.toFixed(2);
}


document.addEventListener('DOMContentLoaded', function() {
    // Trigger animations after the DOM has loaded
    const elementsToAnimate = document.querySelectorAll('.animated');
    elementsToAnimate.forEach(element => {
        element.classList.add('animate__animated');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Ensure the home content is visible by default
    showHomePage();
});

function showHomePage() {
    document.getElementById('homeContent').style.display = 'block';
    document.getElementById('aboutContent').style.display = 'none';
}

function showAboutPage() {
    document.getElementById('homeContent').style.display = 'none';
    document.getElementById('aboutContent').style.display = 'block';
}

