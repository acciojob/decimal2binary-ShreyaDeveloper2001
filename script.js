document.addEventListener("DOMContentLoaded", function () {
  // Array of band names
  let bandNames = [
    "The Rolling Stones",
    "Aerosmith",
    "The Beatles",
    "Pink Floyd",
    "Led Zeppelin",
    "The Who",
  ];

  // Function to sort band names without articles
  function sortBandNamesWithoutArticles(names) {
    return names.sort((a, b) => {
      // Regular expression to match articles 'a', 'an', 'the' at the beginning
      const articleRegex = /^(a|an|the)\s+/i;

      // Remove articles from both names for comparison
      const nameA = a.replace(articleRegex, "");
      const nameB = b.replace(articleRegex, "");

      // Compare the modified names
      return nameA.localeCompare(nameB);
    });
  }

  // Sort the band names
  bandNames = sortBandNamesWithoutArticles(bandNames);

  // Function to create and populate the ul element
  function populateBandList(names) {
    const ul = document.getElementById("bands");

    // Clear any existing items in the ul
    ul.innerHTML = "";

    // Loop through the sorted names and create li elements
    for (const name of names) {
      const li = document.createElement("li");
      li.textContent = name;
      ul.appendChild(li);
    }
  }

  // Call the function to populate the ul with sorted band names
  populateBandList(bandNames);
});
