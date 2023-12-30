const btn = document.querySelector('.btn'),
      tip = document.querySelector('.tip'),
      total = document.querySelector('.total'),
      error = document.querySelector('.error');

const errorHidden = () => {
  setInterval(() => {
    error.style.display = 'none';
  },5000);
}

const calculator = () => {
  const bill = document.querySelector('.bill').value,
        rate = document.querySelector('.rate').value;

  if (bill === '' || rate == '') {
    error.style.display = 'block';
    errorHidden();
  } else if (isNaN(bill)) {
    error.innerHTML = 'Please enter a number';
    error.style.display = 'block';
    errorHidden();
  } else {
    let tipAmount = Math.ceil(bill * rate);
    tip.innerHTML = `Tip amount: $${tipAmount}`;
    let totalAmout = Number(bill) + tipAmount;
    total.innerHTML = `Total Amount: $${totalAmout}`;
  }
}

btn.addEventListener('click', calculator);