const { sequelize } = require("./conexion")
const { Sequelize } = require("sequelize");
const { hashSync, genSaltSync, compareSync } = require("bcryptjs");


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
        hooks: {
            beforeCreate: (user) => {
              const salt = genSaltSync(10);
              user.password = hashSync(user.password, salt);
            },
          },
          instanceMethods: {
            validPassword: function(password) {
              return compareSync(password, this.password);
            },
            toJSON: function (user) {
                var user = Object.assign({}, this.get());
          
                delete user.password;
                return user;
              }
            
        }
        
    });
 module.exports = User;



    
    
