function configureListeners() {
    let images = document.getElementsByTagName('img')

     for (var i = 0; i < images.length; i++) {        
        document.getElementById(images[i].id).addEventListener('mouseover', addOpacity, false)        
        document.getElementById(images[i].id).addEventListener('mouseout', removeOpacity, false)     
    } 
}

function addOpacity(event) {
    if (!this.classList.contains('dim')){
        this.classList.add('dim')
    }    
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
    if (this.classList.contains('dim')){
        this.classList.remove('dim')
    }

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let colorPrice;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':           
            colorPrice = '$19.99'
            colorName = 'Lime Green'
            updatePrice(colorName, colorPrice)           
            break;           
        case 'pn2':
            colorPrice = '$12.99'
            colorName = 'Medium Brown' 
            updatePrice(colorName, colorPrice)     
            break;            
        case 'pn3':
            colorPrice = '$11.99'
            colorName = 'Royal Blue'   
            updatePrice(colorName, colorPrice)   
            break;   
        case 'pn4':
            colorPrice = '$14.99'
            colorName = 'Bright Red'            
            updatePrice(colorName, colorPrice) 
            break;   
        case 'pn5':
            colorPrice = '$9.99'
            colorName = 'Solid White' 
            updatePrice(colorName, colorPrice)         
            break;   
        case 'pn6':
            colorPrice = '$15.99'
            colorName = 'Solid Black'   
            updatePrice(colorName, colorPrice)         
            break;   
        case 'pn7':
            colorPrice = '$8.99'
            colorName = 'Medium Blue'       
            updatePrice(colorName, colorPrice) 
            break;   
        case 'pn8':
            colorPrice = '$16.99'
            colorName = 'Light Purple'      
            updatePrice(colorName, colorPrice)   
            break;   
        case 'pn9':
            colorPrice = '$17.99'
            colorName = 'Bright Yellow'                       
            updatePrice(colorName, colorPrice) 
            break;   
          default:              
    }

    function updatePrice(colorName, colorPrice)
    {       
        let price = document.getElementById('color-price')
        price.textContent = colorPrice
        
        let color = document.getElementById('color-name')
        color.textContent = colorName
    }
    
}
