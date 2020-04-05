const { sequelize } = require("./connection")
const { Sequelize } = require("sequelize");
const { hashSync, genSaltSync, compareSync } = require("bcryptjs");
const uuid = require("uuid-random");


    const User = sequelize.define("user",{
        row_id:{
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        uuid:{
            type: Sequelize.TEXT,
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
            beforeCreate: (user) =>{
                user.uuid = uuid(user.password);
            }
          },
          instanceMethods: {
            validPassword: function(password) {
              return compareSync(password, this.password);
            }
        }
        
    });

    User.prototype.toJSON =  function () {
        var values = Object.assign({}, this.get());
      
        delete values.password
        delete values.created_by
        delete values.created_on
        delete values.updated_by
        delete values.updated_on
        delete values.row_id
        return values;
    }

 module.exports = User;



    
    
