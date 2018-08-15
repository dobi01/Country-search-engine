var url = 'https://restcountries.eu/rest/v2/name/',
    countriesList = $('#countries'),
    capitalsList = $('#capitals');

function searchCountries() {
  var countryName = $('#country-name').val();
  if (!countryName.length) {
    countryName = 'Poland';
  }

  $.ajax({
    url: url + countryName,
    method: 'GET',
    success: showCountriesList
  });
}

function showCountriesList(resp) {
  countriesList.empty();
  capitalsList.empty();
  resp.forEach(function(item) {
    if (!item.capital.length) {
      $('<li>').text('no capital').appendTo(capitalsList);
    }
    $('<li>').text(item.name).appendTo(countriesList);
    $('<li>').text(item.capital).appendTo(capitalsList);
  });
}

$('#country-name').keyup(searchCountries);
