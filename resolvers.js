const db = require("./db");
const Query =
    {
        greeting: () => 'Hello GraphQL  From TutorialsPoint !!' ,
        sayHello:(root,args,context,info) =>  `Hi ${args.name} GraphQL server says Hello to you!!`,
        students:() => db.students.list(),
    }
module.exports = {Query}
