import { meals } from "../data/data.js";
import { discountedPrice } from "./load_items.js";

export async function place_items(){
    // get all meals
    console.log(document.baseURI)
    meals().then(res =>{
        res.forEach(item => {
            // get id
            let host = document.getElementById(`${item.name}`)
            // get ites
            let f;
            item.items.forEach(fud => {
                let discountPrice = discountedPrice(fud.normalPrice, fud.discountPrice)

            if(document.baseURI.split("#")[0] == 'http://127.0.0.1:5501/public_html/all_services.html'){
                if(item.name == host.id){
                    let chi;
                    for (const key in host.children) {
                        if (Object.hasOwnProperty.call(host.children, key)) {
                            const element = host.children[key];
                            if(element.classList.contains('child')){
                                chi = element
                            }
                        }
                    }
                    
                    chi.innerHTML += `
                    <div class="card">
                    <h3 class="dish-type">
                        <div class="bge">
                            <b></b>
                        </div>
                        <i class="text-muted"> ${fud.continental}</i>
                    </h3>
                    <img src="./assets/imgs/dish-1.jpg" alt="">
                    <div class="card-body">
                    <h5 class="card-title">${fud.name}</h5>
                    <b class='description'>${fud.description}</b>
                    </div>
                    <div class="content">
                        <ul class="pricing">
                            <li class="price">
                                <span class="new-price">${discountPrice}</span>
                                <span class="old-price">${fud.normalPrice}</span>
                            </li>
                            <li id="percent-off">${fud.discountPrice}% off</li>
                            <li class="discount"></li>
                        </ul>
                        <ul class="type-of-order">
                            <li><button type="button" class="btn btn-warning">${fud.typeOfOrder}</button></li>
                        </ul>
                    </div>
                    <p class="card-text availability">${fud.availability}</p>
                    </div>
                    `;
                }
            }else if(document.baseURI == 'http://127.0.0.1:5501/public_html/'){
                let row = document.querySelector('.row-list')
                row.innerHTML += `
                <div class="col-md-6 mb-4 itemInHome">
                    <a href="./all_services.html#${item.name}" class="custom-list">
                        <div class="img-holder">
                            <img src="assets/imgs/dish-${fud.id+1}.jpg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Pigga Landing page">
                        </div>
                        <div class="info">
                            <div class="head clearfix">
                                <h5 class="title float-left">${fud.name}</h5>
                                <p class="float-right text-primary">
                                    <span class="new-price">$${discountPrice}</span>
                                    <span class="old-price">$${fud.normalPrice}</span>                                    
                                </p>
                            </div>
                            <div class="body">
                                <p>${fud.description}</p>
                            </div>
                        </div>
                    </a>
                </div>
                `;
            }
            });
            
            
        });
    })

}

