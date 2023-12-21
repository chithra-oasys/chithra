const {gql}=require('apollo-server');
const typeDefs=gql
 type STUDENT={
    id:ID!
    name:String!
    jobtitle:String!
 }
 type query={
    students:[STUDENT]
 }
  ;
 module.exports=typeDefs;