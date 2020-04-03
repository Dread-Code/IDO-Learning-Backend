const { sequelize } = require("../../index");
const { Sequelize } = require("sequelize");

module.exports = (sequelize,Sequelize) =>{
    const User = sequelize.define("user",{
        row_id:{
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        uuid:{
            type: Sequelize.TEXT
        },
        user_name:{
            type: Sequelize.TEXT
        },
        password:{
            type: Sequelize.TEXT
        },
        created_by:{
            type: Sequelize.TEXT
        },
        created_on:{
            type: Sequelize.DATE
        },
        updated_by:{
            type: Sequelize.TEXT
        },
        updated_on:{
            type: Sequelize.DATE
        }
    },{
        schema: "security",
        timestamps: false,
        freezeTableName: true,
        instanceMethods:{
            generateHash(password){
                return hashSync(password,genSaltSync(10));
            },
            validPassword(password){
                return compareSync(password,this.password);
            },
            toJSON: function () {
                var values = Object.assign({}, this.get());
          
                delete values.password;
                return values;
              }
        },
        
    });


    return User;
}

    
    

