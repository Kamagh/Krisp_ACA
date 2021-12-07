/*let loadFile = function(event) {
    let image = document.getElementById('output');
    image.src = URL.createObjectURL(event.t.files[0]);
}*/

const input = document.querySelector('#input');
let uploaded_img = "";

input.addEventListener( 'change', function(){
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        uploaded_img = reader.result;
        document.querySelector('#display').style.backgroundImage = `url(${uploaded_img})`
    })
    reader.readAsDataURL(this.files[0]);
})
