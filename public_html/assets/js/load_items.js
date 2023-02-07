export function loadItems(){
    let itemBadge = document.getElementById('number-of-available-items');

    let itemsUnderHeading = document.getElementById('underHeading');
    let  adult = itemsUnderHeading.children;
    let element;
    for (const children in adult) {
        if (Object.hasOwnProperty.call(adult, children)) {
            element = adult[children];
            let kids = element.children
            for (const kid in kids) {
                if (Object.hasOwnProperty.call(kids, kid)) {
                    const ele = kids[kid];
                    let mainChild = kids.length - 1
                    let children = kids[mainChild]
                    let childChildren = children.children.length
                    let bge = kids[0]
                    for (const k in bge.children) {
                        if (Object.hasOwnProperty.call(bge.children, k)) {
                            const element = bge.children[k];
                            element.textContent = `${childChildren}`
                        }
                    }
                }
            }
        }
    }
}
export function discountedPrice(normalPrice, dicountPercent){
    let discount = dicountPercent;
    let discperc = discount/100
    let discountPrice = normalPrice - (discperc*normalPrice)
    return discountPrice
}
