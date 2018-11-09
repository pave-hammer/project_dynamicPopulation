var familyGuy = [
    {name: 'Peter Griffin', age: 1, job: '', image: './images/peter.jpg'},
    {name: 'Lois Griffin', age: 1, job: '', image: './images/lois.jpg'},
    {name: 'Chris Griffin', age: 1, job: '', image: './images/chris.jpg'},
    {name: 'Stewie Griffin', age: 1, job: '', image: './images/stewie.jpg'},
    {name: 'Brian Griffin', age: 1, job: '', image: './images/brian.jpg'},
    {name: 'Glen Quagmire', age: 1, job: '', image: './images/quagmire.jpg'},
    {name: 'Joe Swanson', age: 1, job: '', image: './images/joe.jpg'},
    {name: 'Cleveland Brown', age: 1, job: '', image: './images/cleveland.jpg'},
    {name: 'Mort Goldman', age: 1, job: '', image: './images/mort.jpg'},
    {name: 'Meg (no one cares)', age: 1, job: '', image: './images/meg.jpg'}
]

function getNames() {
    var name;
    for (let i = 0; i < familyGuy.length; i++) {
        var name = familyGuy[i].name
    }
    return name
}

function getAge() {
    var age;
    for (let i = 0; i < familyGuy.length; i++) {
        var age = familyGuy[i].age
    }
    return age
}

function getJob() {
    var job;
    for (let i = 0; i < familyGuy.length; i++) {
        var job = familyGuy[i].job
    }
    return job
}

function getImg() {
    var img;
    for (let i = 0; i < familyGuy.length; i++) {
        var img = familyGuy[i].img
    }
    return img
}