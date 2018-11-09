
function getDetails() {
    var familyGuy = [
        {name: 'Peter Griffin', age: 45, job: "Works at a brewery. Pawtucket to be exact.", image: './images/peter.jpg'},
        {name: 'Lois Griffin', age: 39, job: "Stay-at-home mom. Helps to recover bad habits Peter instills on his kin.", image: './images/lois.jpg'},
        {name: 'Chris Griffin', age: 16, job: "Student. Not the brightest tool in the shed, but he has a growth mindset.", image: './images/chris.jpg'},
        {name: 'Stewie Griffin', age: 1, job: "The brains of the operation. We're not sure if people understand him, but he understands people.", image: './images/stewie.jpg'},
        {name: 'Brian Griffin', age: 3, job: "Smarter than most humans in the show. Still has the occasional pee problem.", image: './images/brian.jpg'},
        {name: 'Glen Quagmire', age: 38, job: "Professional womanizer. Might be best friends with Judge Kavanaugh.", image: './images/quagmire.jpg'},
        {name: 'Joe Swanson', age: 34, job: "Cop. The best handicap cop around.", image: './images/joe.jpg'},
        {name: 'Cleveland Brown', age: 35, job: "No idea, but we like him. He's a good man. As far as we know.", image: './images/cleveland.jpg'},
        {name: 'Mort Goldman', age: 45, job: "Professional Jew.", image: './images/mort.jpg'},
        {name: 'Meg (no one cares)', age: 15, job: "Taking an emotional and mental beating, on the daily. Poor girl.", image: './images/meg.jpg'}
    ]

    var similar = document.getElementsByTagName()

    for (let i = 0; i < familyGuy.length; i++) {
        var details = `
        <card-title>${familyGuy[i].name}</card-title>
        <card-age>${familyGuy[i].age}</tag>
        <card-text>${familyGuy[i].job}</tag>
        <card-img-top>${familyGuy[i].image}</tag>
        `
    }
}