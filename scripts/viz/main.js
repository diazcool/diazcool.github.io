let yesButton = $('#yes-button')
let noButton = $('#no-button')
let replyTextField = $('#reply-text')

yesButton[0].addEventListener('click', function() {
    replyTextField[0].value = "Yes"
}.bind(this))

noButton[0].addEventListener('click', function() {
    replyTextField[0].value = "No"
}.bind(this))
