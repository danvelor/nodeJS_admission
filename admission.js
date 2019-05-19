const { getAllCurses, getCourse,FileCreate } = require("./courses.js");
const { options } = require("./settingsRepository").settings;
const argv = require('yargs')
    .command('inscribir', 'admission', options)
    .argv

let listCourses = ()=>{ 
    getAllCurses(function (name) {
    console.log(name);
});
}

if (!argv.i) {
    listCourses();
    return;
}

getCourse(argv.i, function (course) {
    if (!course) {
        console.log("El curso con el id: " + argv.i + " No existe");
        listCourses();
    }else{
        FileCreate(course,argv.n,argv.c);
    }
});

