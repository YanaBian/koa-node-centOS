/**
 * Created by bianyanran on 2018/5/5.
 */
var Sequelize = require('sequelize');

var sequelize = new Sequelize(
    'ormsequelizetestone', // 数据库名
    'root',   // 用户名
    '',   // 用户密码
    {
        'dialect': 'mysql',  // 数据库使用mysql
        'host': 'localhost'// 数据库服务器ip
    }
);
//定义表
var User = sequelize.define(

    'user',
    {
        userId: {
            field: 'user_id',
            primaryKey: true,
            type: Sequelize.BIGINT,
            allowNull: false
        },
        userName: {
            field: 'user_name',
            type: Sequelize.STRING,
            allowNull: false
        },
        gender: {
            field: 'gender',
            type: Sequelize.ENUM('MALE','FEMALE'),
            allowNull: true
        },
        birth: {
            field: 'birth',
            type: Sequelize.STRING,
            allowNull: true
        },
        mail: {
            field: 'mail',
            type: Sequelize.STRING,
            allowNull: true
        },
        tel: {
            field: 'tel',
            type: Sequelize.STRING,
            allowNull: true
        },
        mobile: {
            field: 'mobile',
            type: Sequelize.STRING,
            allowNull: true
        },
        updateTime: {
            field: 'update_time',
            type: Sequelize.STRING,
            allowNull: true
        }
    },
    {
        tableName: 'user',
        timestamps: false,
        freezeTableName: true
    }
);

User.create({
        userId: 1,
        userName: 'a',
        updateTime: '2018-01-22 18:37:22'
    })//username role password对应相应的字段名
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


