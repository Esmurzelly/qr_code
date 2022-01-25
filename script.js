var qr_btn = document.getElementById("btn");
var blockHidden = document.querySelector('.qrcode'); 

qr_btn.addEventListener('click', () => {
    let website = document.getElementById("website").value;
    
    if (website) {
      let qrcodeContainer = document.getElementById("qrcode");
      qrcodeContainer.innerHTML = "";
      new QRCode(qrcodeContainer, website);
    } else {
      alert("Please enter a valid URL");
    }

    blockHidden.classList.add('b-show');

}, false);