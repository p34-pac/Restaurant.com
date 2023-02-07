export function goToServices(){
    document.body.addEventListener('click', body)
    function body(e){
        if(e.target.parentElement.parentElement.parentElement == 'itemInHome' || e.target.parentElement.parentElement.parentElement.parentElement == 'itemInHome' || e.target.nodeName == 'A'){
            e.preventDefault()
        }
    }
}
// itemInHome