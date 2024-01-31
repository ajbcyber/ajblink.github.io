const shareButtons = document.querySelectorAll('.tile-share-button')
console.log(shareButtons)

 function copyText(e) {
//prevent button going to the site
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)

    try {
         navigator.share({
            title: document.title,
            text: 'Hello World',
            url: link
        })
        .then(() => console.log('Successful share! 🎉'))
        .catch(err => console.error(err));

        
    } catch (err) {
        console.error(err)
    }
}

shareButtons.forEach(shareButton =>{
    shareButton.addEventListener('click', copyText)
})
