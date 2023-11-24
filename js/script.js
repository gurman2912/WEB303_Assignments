$(document).ready(function() {
  var charactersData; // Variable to store the characters data

  // Load data from JSON file
  $.ajax({
    url: 'js/characters.json',
    dataType: 'json',
    success: function(data) {
      charactersData = data; // Store the characters data
      populateTable(data); // Populate the table with characters
      updateFilterButtons(); // Update the filter button counts
    }
  });

  // Search functionality
  $('#searchInput').on('input', function() {
    var searchTerm = $(this).val().toLowerCase();
    $('#charactersTable tbody tr').each(function() {
      var firstName = $(this).find('td:first').text().toLowerCase();
      if (firstName.includes(searchTerm)) {
        $(this).addClass('highlight');
      } else {
        $(this).removeClass('highlight');
      }
    });
  });

  // Filter functionality
  $('#filterAM').on('click', function() {
    filterCharacters('A', 'M');
  });

  $('#filterNZ').on('click', function() {
    filterCharacters('N', 'Z');
  });

  // Function to populate the table with characters
  function populateTable(data) {
    data.forEach(function(character) {
      $('#charactersTable tbody').append(`
        <tr>
          <td>${character.firstName}</td>
          <td>${character.lastName}</td>
          <td>${character.birthdate}</td>
          <td>${character.from}</td>
          <td>${character.profession}</td>
        </tr>
      `);
    });
  }

  // Function to filter characters based on last name
  function filterCharacters(startChar, endChar) {
    $('#charactersTable tbody tr').hide().filter(function() {
      var lastName = $(this).find('td:eq(1)').text();
      return lastName.toLowerCase().charCodeAt(0) >= startChar.toLowerCase().charCodeAt(0) &&
             lastName.toLowerCase().charCodeAt(0) <= endChar.toLowerCase().charCodeAt(0);
    }).show();
  }

  // Function to update the filter button counts
  function updateFilterButtons() {
    var countAM = charactersData.filter(function(character) {
      return character.lastName.toLowerCase().charCodeAt(0) >= 'a'.charCodeAt(0) &&
             character.lastName.toLowerCase().charCodeAt(0) <= 'm'.charCodeAt(0);
    }).length;

    var countNZ = charactersData.length - countAM;

    $('#filterAM').text(`A - M (${countAM})`);
    $('#filterNZ').text(`N - Z (${countNZ})`);
  }
});