function displayMenuList(menuList){
    let flatMenu= menuList.flat();
    let combinedMenu= new Set();
    
    flatMenu.forEach(menuItem=>{

       combinedMenu.add(menuItem)

    });
    const menuElement= document.querySelector('#menu');

    for(let item of combinedMenu){
        let eachItem = document.createElement('li');
        eachItem.innerText= item;
        menuElement.appendChild(eachItem);
    }
    
}

displayMenuList([['rice', 'dal'],['dal','kobi']])