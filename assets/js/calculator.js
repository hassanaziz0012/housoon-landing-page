function retrieveCalculatorData() {
    const ageElement = document.getElementById("age");
    const coupleAgeElement = document.getElementById("coupleAge");
    const monthlyRentElement = document.getElementById("monthlyRent");
    const monthlySavingsElement = document.getElementById("monthlySavings");
    const alreadySavedElement = document.getElementById("alreadySaved");

    let age = ageElement.value;
    let coupleAge = coupleAgeElement.value;
    let monthlyRent = monthlyRentElement.value;
    let monthlySavings = monthlySavingsElement.value;
    let alreadySaved = alreadySavedElement.value;

    let data = {
      'method': 'GET',
    };

    let url = `https://pinterest-bulk-upload.herokuapp.com/housoon-calculator/${age}/${coupleAge}/${monthlyRent}/${monthlySavings}/${alreadySaved}`;
    console.log(url);

    fetch(url, data)
      .then(response => response.text()).then(text => updateResult(JSON.parse(text)));

    const submitBtn = document.getElementById("calculatorSubmit");
    submitBtn.style.visibility = 'hidden';

    const loading = document.getElementById("loading");
    loading.style.visibility = 'visible';
}

function updateResult(result) {
  console.log(result);
  
  const maxValue = document.getElementById("maxValue");
  maxValue.innerHTML = result.max_value;
  const bestDeal = document.getElementById("bestDeal");
  bestDeal.innerHTML = result.best_deal;
  const timeSaved = document.getElementById("timeSaved");
  timeSaved.innerHTML = result.time_saved_months;
  const moneySaved = document.getElementById("moneySaved");
  moneySaved.innerHTML = result.max_savings;

  const submitBtn = document.getElementById("calculatorSubmit");
  submitBtn.style.visibility = 'visible';

  const loading = document.getElementById("loading");
  loading.style.visibility = 'hidden';
}