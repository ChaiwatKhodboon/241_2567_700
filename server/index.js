const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 8000;

app.use(bodyParser.json());

let users = []
let counter = 1
// path: /user ใช้สำหรับแสดงข้อมูล user ทั้งหมด
app.get('/users', (req, res) => {
    res.json(users);
})

// path: /user ใช้สำหรับสร้างข้อมูล user ใหม่
app.post('/user', (req, res) => {
    let user = req.body;
    user.id = counter
    counter += 1 
    users.push(user);
    res.json({
        message: 'Create new user successfully',
        users: users
    });
    
})  
//path: /user/:id ใช้สำหรับแสดงข้อมูล user ตาม id ที่ระบุ
app.put('/user/:id', (req, res) => {
    let id = req.params.id;
    let updateUser = req.body;
    //หา user จาก id ที่ส่งมา
    let selectIndex = users.findIndex(user => user.id == id)

    
    //แก้ไขข้อมูล user 
    if (updateUser.firstnam) {
        users[selectIndex].firstname = updateUser.firstname
        
    }
    if (updateUser.lastname) {
        users[selectIndex].lastname = updateUser.lastname
        
    }
    res.json({
        message: 'Update user successfully',
        data :{
            user: updateUser,
            indexUpdate: selectIndex    
        }
    })
    


    res.json({
        message: 'Update user successfully',
        data :{
            user: updateUser,
            indexUpdate: selectIndex    
        }
    })
    // user ที่ update .ใหม่ กลับไปเก็บใน users เดิม



    res.send(id)
    
})
//path: DELETE /user/:id ใช้สำหรับลบข้อมูล user ตาม id ที่ระบุ
app.delete('/user/:id', (req, res) => {
    //หา index ของ user ที่ต้องการลบ
    let selectedIndex = users.findIndex(user => user.id == id)
    //ลบ 
    users.splice[selectIndex,1]
    res.json({
        message: 'Delete user successfully',
    
            indexDelete: selectIndex
        })
    })


app.listen(port, (req, res) => {
    console.log(`Http server is running on port `+port);
    });