$(document).ready(function() {
    let characters = []; 

    // Function to build the character table from JSON data
    function buildTable() {
        let tbody = $('#characterTable tbody');
        tbody.empty();

        characters.forEach(function(character) {
            let row = '<tr>';
            row += '<td>' + character.firstName + '</td>';
            row += '<td>' + character.lastName + '</td>';
            row += '<td>' + character.birthdate + '</td>';
            // Add more columns for other character data here
            row += '</tr>';
            tbody.append(row);
        });
    }

    // Initialize the table
    buildTable();

    // Sorting functionality
    let sortColumn = null;
    let ascending = true;

    $('#characterTable th a').on('click', function() {
        let col = $(this).data('col');

        if (sortColumn === col) {
            ascending = !ascending;
        } else {
            sortColumn = col;
            ascending = true;
        }

        characters.sort(function(a, b) {
            if (col === "birthdate") {
                // Convert birthdate strings to Date objects for proper sorting
                a[col] = new Date(a[col]);
                b[col] = new Date(b[col]);
            }
            let comparison = a[col] < b[col] ? -1 : (a[col] > b[col] ? 1 : 0);
            return ascending ? comparison : -comparison;
        });

        buildTable();

        // Reset chevrons for all columns
        $('#characterTable th a').removeClass('ascending descending');
        // Add the appropriate chevron class
        $(this).addClass(ascending ? 'ascending' : 'descending');
    });

    // AJAX request to load the JSON data from a separate file
    $.getJSON('character.json', function(data) {
        characters = data; // Assign the data to the 'characters' letiable
        
    });
});
