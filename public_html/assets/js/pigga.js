/*!
=========================================================
* Pigga Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { goToServices } from "./goToServices.js";
import { hover_items } from "./hover.js";
import { loadItems } from "./load_items.js";
import { place_items } from "./place_items.js";

if(document.baseURI == 'http://127.0.0.1:5501/public_html/all_services.html#surprise-meal'||document.baseURI == 'http://127.0.0.1:5501/public_html/all_services.html#pastasandsteaks'||document.baseURI == 'http://127.0.0.1:5501/public_html/all_services.html#superbowl'||document.baseURI == 'http://127.0.0.1:5501/public_html/all_services.html#bowl'){
document.addEventListener('DOMContentLoaded', loadItems)
}
document.addEventListener('DOMContentLoaded', hover_items)
// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
}); 
goToServices()
place_items()
