import express from 'express';
import methodeOverride from 'method-override';

const app = express();
//template engine
app.set('views engine', 'ejs');

//middleware

app.use(methodeOverride("_method"));
app.use(express.urlencoded({extended:false}));

//api
import IndexRoutes from './Routes/index.js';
import ProductRoutes from './Routes/product.js';
import ServiceRoutes from './Routes/service.js';
import CourseRoutes from './Routes/course.js';
import BlogRoutes from './Routes/blog.js';
import AboutRoutes from './Routes/about.js';
import AuthRoutes from './Routes/auth.js';

//主頁
app.use('/index', IndexRoutes);
//產品
app.use('/product', ProductRoutes);
//服務種類
app.use('/service', ServiceRoutes);
//課程
app.use('/course', CourseRoutes);
//Blog活動
app.use('/blog', BlogRoutes);
//關於我們
app.use('/about', AboutRoutes);
//登入註冊
app.use('/auth', AuthRoutes);


//port
app.listen(3000, ()=>{
    console.log("server is running")
})