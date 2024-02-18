

    const seatBtn = document.getElementsByClassName('seat-btn');
    let count = 40;
    let seatPrice = 0;
    let seatPerCount = 0; 
    let grandPrice = 0 ;
    let coupleDiscount;   
    let coupanDiscount;   
 

    for(const seat of seatBtn){
      seat.addEventListener('click', function(e){
        count = parseInt(count - 1);
        seatPrice = parseInt(seatPrice + 500);
        grandPrice = parseInt(seatPrice * 0.2);
        seatPerCount = parseInt(seatPerCount + 1);
        const seatName = e.target.innerText;
        const seatCategory = 'Economy';
        const seatPerPrice = 500;
        const selectTargetName = document.getElementById('seat-name');
        const selectTargetClass = document.getElementById('seat-class');
        const selectTargetPrice = document.getElementById('price-per-price');
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
        selectedSeats('seat-price', seatPrice);
        selectedSeats('total-price', seatPrice);
        selectedSeats('grand-price', seatPrice);
        selectedSeats('seat-count', seatPerCount);
        if(count===0){
            alert('There is no available seat')
            return;
        }

      })
    }
function selectedSeats(id, value){
      document.getElementById(id).innerText = value;
}




