const topText = document.getElementById('topText');
const bottomText = document.getElementById('bottomText');
const topT = document.getElementById('topT');
const bottomT = document.getElementById('bottomT');
const textSize = document.getElementById('textSize');
const textColor = document.getElementById('textColor');
const picker = document.getElementById('picker');
const image = document.getElementById('image');
const downloadBtn = document.querySelector('.downloadBtn');

picker.onchange = e => {
  /** @type {File} */
  const file = picker.files[0];
  image.src = URL.createObjectURL(file);
  // console.log(URL.createObjectURL(file));
};

topT.oninput = e => {
  topText.textContent = e.currentTarget.value;
};

bottomT.oninput = e => {
  bottomText.textContent = e.currentTarget.value;
};

downloadBtn.onclick = () => {
  html2canvas(document.querySelector('.img'), {
    useCORS: true,
    logging: true,
  }).then(c => {
    let a = document.createElement('a');
    a.download = 'meme.png';
    a.href = c.toDataURL('image/png');
    a.click();
  });
};
