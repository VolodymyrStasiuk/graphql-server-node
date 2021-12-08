const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const db = require('./db');
const NoIntrospection = require('graphql-disable-introspection');

const port = process.env.PORT || 9000;
const app = express();
var whitelist = ["http://172.16.10.97:9000"]

const fs = require('fs')
const typeDefs = fs.readFileSync('./schema.graphql',{encoding:'utf-8'})
const resolvers = require('./resolvers')

const {makeExecutableSchema} = require('graphql-tools')
const schema = makeExecutableSchema({typeDefs, resolvers})

app.use(cors(), bodyParser.json());

const  {graphiqlExpress,graphqlExpress} = require('apollo-server-express')
// to disable introspection, uncomment line below
// app.use('/graphql',graphqlExpress({schema, validationRules: [NoIntrospection]}))
app.use('/graphql',graphqlExpress({schema}))
app.use('/graphiql',graphiqlExpress({endpointURL:'/graphql'}))


app.listen(
    port, () => console.info(
        `Server started on port ${port}`
    )
);