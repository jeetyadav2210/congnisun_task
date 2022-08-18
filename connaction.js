var mysql=require('mysql2')
var mysqlconnaction=mysql.createConnection({
    host: '192.168.7.36',
    user: 'akash1',
    password: 'e9UzvykmX1@',
    database: 'db_angularcore',
    // database:"cognisunTask",
})







mysqlconnaction.connect((err)=>{
    if(err){
        console.log("server is not connacted",err);
    }else{
        console.log("mysql server is connacted");
    }
})


module.exports = mysqlconnaction