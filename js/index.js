
 
    const seatBtn = document.getElementsByClassName('seat-btn');
    const discountBtn = document.getElementById('apply-btn');
    
    console.log(discountBtn);
    let count = 40;
    let totalPrice = 0;
    let seatPerCount = 0; 
    let grandPrice = 0 ;
    let clickedButtonCount = 0;
    

    for(const seat of seatBtn){
      seat.addEventListener('click', function(e){
      count = parseInt(count - 1);
      totalPrice = parseInt(totalPrice + 500);
      
      seatPerCount = parseInt(seatPerCount + 1);
      const seatName = e.target.innerText;
      e.target.style.backgroundColor = '#1DD100';
      e.target.setAttribute('disabled',true);
      const seatCategory = 'Economy';
      const seatPerPrice = 500;
      const selectTargetName = document.getElementById('seat-name');
      const selectTargetClass = document.getElementById('seat-class');
      const selectTargetPrice = document.getElementById('price-per-seat');

       const p1 =document.createElement('p');
       p1.innerText = seatName;
       selectTargetName.appendChild(p1);
       const p2 =document.createElement('p');
       p2.innerText = seatCategory;
       selectTargetClass.appendChild(p2);
       const p3 =document.createElement('p');
       p3.innerText = seatPerPrice;
       selectTargetPrice.appendChild(p3);
    

        selectedSeats('total-seat', count);
        // selectedSeats('seat-price', totalPrice);
        selectedSeats('total-price', totalPrice);
        selectedSeats('grand-price', totalPrice);
        selectedSeats('seat-count', seatPerCount);
        if(count===0){
            alert('There is no available seat')
            return;
        }
          if (totalPrice >= 2000 || clickedButtonCount >= 4) {
          alert('You have reached the maximum limit for this transaction');
            for (const seat of seatBtn) {
           if (seat !== e.target) {
             seat.disabled = true;
          }
      }

      return;
    }
   

      })
    }
   
    discountBtn.addEventListener('click', function(e) {
    const inputFiled = document.getElementById('input-field').value;
    const coupanCode = inputFiled.trim().toUpperCase(); 

    const totalPrice = parseInt(document.getElementById('total-price').innerText); 

    const discountField = document.getElementById('discount-price');
    discountField.innerHTML = '';

    if (totalPrice >= 2000) {
        if (coupanCode === 'COUPLE20') {
            const discountPrice = totalPrice * 0.2;
            const p4 = document.createElement('p');
            p4.innerText = "Discount Amount";
            discountField.appendChild(p4);
            const discountPriceName = document.createElement('p');
            discountPriceName.innerText = discountPrice;
            discountField.appendChild(discountPriceName);
            const grandPrice = parseInt(totalPrice * 0.8);
            selectedSeats('grand-price', grandPrice);
        } else {
            alert('Please input a valid coupon code.');
        }
    } else if (totalPrice >= 1500) {
        if (coupanCode === 'NEW15') {
            const discountPrice = totalPrice * 0.15;
            const p4 = document.createElement('p');
            p4.innerText = "Discount Amount";
            discountField.appendChild(p4);
            const discountPriceName = document.createElement('p');
            discountPriceName.innerText = discountPrice;
            discountField.appendChild(discountPriceName);
            const grandPrice = parseInt(totalPrice * 0.85);
            selectedSeats('grand-price', grandPrice); // Update grand total
        } else {
            alert('Please input a valid coupon code.');
        }
    } else {
        alert('You are not eligible for a discount.');
    }
});

function selectedSeats(id, value){
      document.getElementById(id).innerText = value;
}
function ticketBooking(){
    document.getElementById('ticket-booking');
}




