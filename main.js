var courses = [
    {
        id: 1,
        name: 'C',
        coin: 12
    },
    {
        id: 2,
        name: 'C++',
        coin: 13
    },
    {
        id: 3,
        name: 'Python',
        coin: 14
    },
    {
        id: 4,
        name: 'Javascript',
        coin: 15
    },
];

function courseHandler(course){
    return `<h2>${course.name}<h2>`;
}

var newCourses = courses.map(courseHandler);
console.log(newCourses.join(''));