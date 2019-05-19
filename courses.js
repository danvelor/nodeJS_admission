const { courses } = require("./coursesRepository.js");
const { settings } = require("./settingsRepository");
const fs = require('fs');
const { coursesName } = settings.messages;


let getAllCurses = () => {
    let timer = 0;
    console.log("\n*******Listado de cursos*******");
    courses.forEach(item => {
        setTimeout(() => {
            let messageCourses = "\n" +
                "Nombre del curso: " + item.name + "\n" +
                "id: " + item.id + "\n" +
                "Periodo: " + item.term + " " + item.unityTerm + "\n" +
                "Costo: " + item.price + " " + item.unityPrice + "\n" +
                "_____________________________________________";
            console.log(messageCourses);
        }, timer);
        timer += settings.timer;
    });
}

let getCourse = (id,callback) => {
    let course = courses.find(element => element.id == id);
    callback(course);
};

let FileCreate = (course,name,idCard) => {
    let texto = "El estudiante " + name + " con cedula "+idCard+
    " se ha matriculado en el curso "+course.name+
    " con una duración de "+course.term+" "+course.unityTerm + 
    " y un costo de "+course.price+" "+course.unityPrice;
    console.log(texto);
    fs.writeFile('admission.log', texto, (err) => {
        if (err) throw (err);
        //console.log('se ha creado el archivo');
    })
};

module.exports = {
    getAllCurses,
    getCourse,
    FileCreate
}
