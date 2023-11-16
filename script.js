$(document).ready(function () {
    var characters = [];

    $.ajax({
        url: 'characters.json',
        dataType: 'json',
        success: function (data) {
            characters = data;
            displayCharacters(characters);
        },
        error: function () {
            console.error('Error loading JSON data');
        }
    });

    var sortOrder = {
        firstName: 1,
        lastName: 1,
        birthdate: 1,
        from:1,
        profession:1
    };

    $('th a').click(function (e) {
        e.preventDefault();
        var column = $(this).data('sort');
        sortOrder[column] = -sortOrder[column];
        characters.sort(compare(column, sortOrder[column]));
        displayCharacters(characters);
        updateChevrons();
    });

    function displayCharacters(characters) {
        var tableBody = $('#characterBody');
        tableBody.empty();

        $.each(characters, function (index, character) {
            var row = '<tr>';
            row += '<td>' + character.firstName + '</td>';
            row += '<td>' + character.lastName + '</td>';
            row += '<td>' + character.birthdate + '</td>';
            row += '<td>' + character.from + '</td>';
            row += '<td>' + character.profession + '</td>';
            row += '</tr>';
            tableBody.append(row);
        });

        updateChevrons();
    }

    function compare(key, order) {
        return function (a, b) {
            if (a[key] < b[key]) return -order;
            if (a[key] > b[key]) return order;
            return 0;
        };
    }

    function updateChevrons() {
        $('th a').each(function () {
            var column = $(this).data('sort');
            if (sortOrder[column] === 1) {
                $(this).html(column + ' &#x25B2;');
            } else if (sortOrder[column] === -1) {
                $(this).html(column + ' &#x25BC;');
            }
        });
    }
});