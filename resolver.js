const student=[
    {id:'1',name:"chithra",jobtitle:'developer'},
    {id:'2',name:"shiva",jobtitle:'owner'},
];

const resolvers={
    query:{
        students:()=>students,

    },
};
module.exports=resolvers;