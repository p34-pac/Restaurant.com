export function hover_items(){
document.addEventListener('click', change)

function change(e){
    let item = e.target.parentElement;
    let a = e.target;

    a.style.fontSize = '11px';
    a.style.color = 'black';
    a.style.borderBottom = 'none'
let child = item.children;
let element;
        if(item.id === 'sub-heading'){
            console.log(child)
            for (const i in child) {
                if (Object.hasOwnProperty.call(child, i)) {
                    element = child[i];
            

                    a.style.fontSize = '11px';
                    a.style.color = 'black';
                    a.style.borderBottom = 'none'
                    if(a == element){
                        console.log(element)
                    }
                }
            }
            a.style.fontSize = 'large';
            a.style.color = 'grey';
            a.style.borderBottom = '2px solid grey'
            }else{
                a.style.fontSize = '11px';
                a.style.color = 'black';
                a.style.borderBottom = 'none'
            }
    
}

// document.body.addEventListener('mousemove', hover)
function getUrl(){
    let url = document.baseURI;
    let splitURL = url.split('#')
    let link = splitURL[0]
    return link
}
// function hover(e){
//     if(e.target.parentElement.parentElement.id == 'underHeading'){
//     let a = document.querySelectorAll(`a`)
//         for (const key in a) {
//             if (Object.hasOwnProperty.call(a, key)) {
//                 const ele = a[key];
//                 // console.log(ele.href)

//                 if(ele.href == `${getUrl()}#${e.target.parentElement.id}`){
//                     ele.style.fontSize = 'large';
//                     ele.style.color = 'grey';
//                     ele.style.borderBottom = '2px solid grey'
//                 }else{
//                     ele.style.fontSize = '11px';
//                     ele.style.color = 'black';
//                     ele.style.borderBottom = 'none'
//                 }
//             }
//         }
//     }
// }

}