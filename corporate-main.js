/*------------------------------------------------------------------
Main Stylesheet

Project:    Highpoint Corporate Template
Version:    1.0
Last change:    31/08/2021
Author:    creativemaze
Primary use:    Corporate
-------------------------------------------------------------------*/

/*------------------------------------------------------------------
[Table of contents]

1. General
2. Header
	2.1. Logo & Navigation
	2.2. Header Content
3. Main Content
	3.1. Corporate Area One 
	3.2. Corporate Area Two
	3.3. Corporate Area Three
	3.4. Corporate Area Four
	3.5. Corporate Area Five
	3.6. Corporate Area Six
	3.7. Corporate Area Seven
	3.8. Corporate Area Eight
	3.9. Corporate Area Nine
	 
4. Footer
5. Responsive
-------------------------------------------------------------------*/

/* 1. GENERAL
 ----------- */
body,
html{
	width:100%;
    height: auto;
    margin:0;
    padding:0;
    overflow-x: hidden;
	font-family: sans-serif;
}

ul{
	list-style-type: none;
	margin: 0;
	padding: 0;
}

*{
	box-sizing: border-box;
}

.page_area{
	width: 100%;
}

.js .loading::before {
	content: '';
	position: fixed;
	z-index: 100000;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #ffffff;
}

.js .loading::after {
	content: '';
	position: fixed;
	z-index: 100000;
	top: 50%;
	left: 50%;
	width: 60px;
	height: 60px;
	margin: -30px 0 0 -30px;
	pointer-events: none;
	border-radius: 50%;
	opacity: 0.4;
	background: #333333;
	animation: loaderAnim 0.7s linear infinite alternate forwards;
}

@keyframes loaderAnim {
	to {
		opacity: 1;
		transform: scale3d(0.5,0.5,1);
	}
}

.corporate_head{
	font-family: 'Montserrat' , Arial, sans-serif;
	font-size: 40px;
	font-weight: 500;
	display: block;
	color: #111111;
	text-transform: capitalize;
	letter-spacing: 1px;
	text-align: center;
	line-height: 1.3em;
}

.corporate_info{
	max-width: 600px;
	margin: 0 auto;
	font-family: 'Roboto' , Arial, sans-serif;
	font-size: 16px;
	font-weight: normal;
	display: block;
	color: #696969;
	letter-spacing: 1px;
	text-align: center;
	padding: 10px 10px 0;
	line-height: 1.5em;
}

/* 2. HEADER
 ----------- */
 
/* --- 2.1. Logo & Navigation --- */
.navbar-header h2{
	font-family: 'Montserrat', Arial, sans-serif;
	font-size: 22px;
	font-weight: 700;
	letter-spacing: 1px;
	text-transform: uppercase;
}

.navbar-header a.navbar-brand{
	text-decoration: none;
	color: #ffffff;
	transition: 0.5s;
}

.navbar-header a.navbar-brand:hover{
	color: #ffffff;
}

nav.navbar .navbar-brand img.logo{
   max-width: 200px;
   height: auto;
   display: block;
}

nav.navbar.bootsnav{
	background-color: transparent;
	border-bottom: none ;
	z-index: 9999;
}

nav.navbar.bootsnav ul.nav{
	margin-right: 160px;
}

nav.navbar.bootsnav li.dropdown ul.dropdown-menu{
	border: 0;
	background: #ffffff;
	z-index: 9999;
}

nav.navbar.bootsnav ul.nav > li > a{
    color: #ffffff;
    font-family: 'Montserrat' , Arial, sans-serif;
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
	letter-spacing: 1px;
	border-top: none;
}

nav.navbar.bootsnav ul.navbar-right li.dropdown ul.dropdown-menu li a{
    text-align: left;
	color: #111111;
	font-family: 'Montserrat' , Arial, sans-serif;
    font-size: 14px;
    font-weight: 600;
    text-transform: capitalize;
	letter-spacing: 1px;
	border-bottom: none;
	transition: 0.5s;
}

nav.navbar.bootsnav ul.navbar-right li.dropdown ul.dropdown-menu li a:hover{
	color: #009fff;
}

nav.navbar.bootsnav li.dropdown ul.dropdown-menu{
	left: 0;
}

 nav.navbar.bootsnav ul.nav > li.dropdown > a.dropdown-toggle:after{
    font-family: 'Font Awesome 5 Free';
    content: "\f107";
	font-size: 12px;	
}

nav.navbar.bootsnav ul.navbar-right li.dropdown ul.dropdown-menu li.dropdown > a.dropdown-toggle:before{
    font-family: 'Font Awesome 5 Free';
    float: right;
    content: "\f105";
    margin-top: 0;
}

nav.navbar.bootsnav ul.nav.navbar-right .dropdown-menu .dropdown-menu{
    left: 200px;
}

nav.navbar.bootsnav li.dropdown ul.dropdown-menu ul.dropdown-menu{
    top: 2px;
}

nav.navbar.bootsnav ul.dropdown-menu.megamenu-content .col-menu{
    border-left: solid 1px #e0e0e0;
    border-right: solid 1px #e0e0e0;
}

nav.navbar.bootsnav ul.dropdown-menu.megamenu-content .content ul.menu-col li a{
	font-family: 'Montserrat' , Arial, sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: #111111;
    text-transform: capitalize;
	letter-spacing: 1px;
}

nav.navbar.bootsnav ul.dropdown-menu.megamenu-content .content ul.menu-col li a:hover{
	color: #009fff;
}

nav.navbar.bootsnav li.dropdown ul.dropdown-menu.megamenu-content .title{
    font-size: 14px;
    font-weight: 600;
	font-family: 'Montserrat' , Arial, sans-serif;
    color: #009fff;
    text-transform: uppercase;
	letter-spacing: 1px;
}

.attr-nav > ul > li.dropdown ul.dropdown-menu{
    margin-top: 0;
    margin-left: 55px;
    width: 250px;
    left: -250px !important;
}

.attr-nav > ul > li > a{
    color: #ffffff;
	padding-top: 30px;
	margin-left: -12px;
	position: relative;
	left: -160px;
}

.top-search ::placeholder{
	font-family: 'Montserrat' , Arial, sans-serif;
	font-size: 14px;
	font-weight: 600;
	letter-spacing: 1px;
}

/* --- 2.2. Header Content --- */
.top_box{
	height: 50px;
	overflow-y: auto;
	border-bottom: solid 1px #6f6f6f;
}

.top_info{
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	max-width: 1400px;
	margin: auto
}

.left_info,
.right_info{
	position: relative;
	flex: 50%;
	width: 50%;
	padding-top: 15px;
}

.left_info{
	max-width: 600px;
	margin: auto;
	text-align: left;
	display: block;
}

.right_info{
	max-width: 400px;
	margin: auto;
	text-align: right;
	display: block;
}

.left_info .fas,
.left_info .far,
.right_info .fab{
	font-size: 16px;
	color: #ffffff;
}

.left_info .fas,
.left_info .far{
	padding-right: 8px;
}

.right_info > a{
	padding-right: 14px;
}

.left_info .fas:hover,
.right_info .fab:hover{
	opacity: 0.6;
}

.sub_width{
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	text-align: center;
}

.left_sub{
	flex: 50%;
	width: 50%;
	text-align: left;
}

.right_sub{
	flex: 50%;
	width: 50%;
	text-align: center;
	padding-left: 25px;
}

.top_sub{
	font-family: 'Montserrat' , Arial, sans-serif;
	font-size: 13px;
	font-weight: 700;
	text-transform: capitalize;
	display: block;
	color: #ffffff;
	letter-spacing: 1px;
	text-align: left;
	margin-bottom: 0;
}

.head_btn{
	max-width: 300px;
	display: inline-block;
	position: absolute;
	top: 15px;
	right: 0;
}

.head_btn a{
	background-color: #009fff;
	width: 150px;
	margin: 0 auto;
	min-height: 30px;
    border: none;
    color: #ffffff;
    padding: 12px 14px;
    text-decoration: none;
	text-transform: uppercase;
    display: block;
    font-size: 13px;
	font-weight: 600;
	font-family: 'Montserrat', Arial, sans-serif;
    transition: 0.5s;
    cursor: pointer;
	border: 1px solid #009fff;
	letter-spacing: 1px;
	text-align: center;
}

.head_btn a:hover{
	color: #111111;
	background-color: #ffffff;
	border-color: #ffffff;
}

.sliderwrap{
	position: relative;
	top: -140px;
}

.header__content{
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	height: 100vh;
	min-height: 750px;
}

.slide__content{
	height: 100vh;
	min-height: 750px;
	text-align: center;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	position: relative;
	z-index: 1000;
}

.slide__content:before {
	content: '';
	position: absolute;
	z-index: -1;
	display: block;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(24, 25, 34, 0.5);
}

.header-title {
	max-width: 650px;
	display: block;
	margin-left: 10vw;
	padding-right: 10px;
}

.header__content > div{
	animation-duration: 1s;
	animation-delay: 0.5s;
	display: none;
}

.header__content > div.active{
	display: block;
}

.header-title__main{
	font-family: 'Montserrat' , Arial, sans-serif;
	font-size: 45px;
	font-weight: 500;
	letter-spacing: 1px;
	line-height: 1.2em;
	text-align: left;
	display: block;
	color: #ffffff;
}

.header-title__sub{
	font-family: 'Roboto' , Arial, sans-serif;
	font-size: 16px;
	font-weight: normal;
	display: block;
	color: #f2f2f2;
	max-width: 500px;
	line-height: 1.5em;
	letter-spacing: 1px;
	text-align: left;
	padding: 30px 0;
}

.buttoncol a{
	background-color: #009fff;
	width: 150px;
	min-height: 30px;
    border: none;
    color: #ffffff;
    padding: 15px 14px;
    text-decoration: none;
	text-transform: uppercase;
    display: block;
    font-size: 13px;
	font-weight: 600;
	font-family: 'Montserrat', Arial, sans-serif;
    transition: 0.5s;
    cursor: pointer;
	border: 1px solid #009fff;
	letter-spacing: 1px;
	text-align: center;
}

.buttoncol a:hover{
	color: #111111;
	background-color: #ffffff;
	border-color: #ffffff;
}

.slick-dots {
	position: relative;
	z-index: 9999;
	display: flex;
	justify-content: center;
	margin: 0;
	padding: 1rem 0;
	list-style-type: none;
}

.slick-dots button{
	display: block;
	width: 1.4rem;
	height: 1.4rem;
	padding: 0;		
	border: solid 1px #ffffff;
	border-radius: 100%;
	background-color: transparent;
	text-indent: -9999px;
	margin-top: -55px;
}

li.slick-active button{
	background-color: #009fff;
}

.slick-dots button:hover{
	background-color: #009fff;
}

.slick-dots li{
	margin: 0 0.40rem;
}

/* 3. MAIN CONTENT
 ----------- */
 
/* --- 3.1. Corporate Area One --- */
.corporate_area_one{
	max-width: 1400px;
	margin-bottom: 9em;
	margin-top: calc(9em - 140px);
	margin-left: auto;
	margin-right: auto;
	padding: 0 25px;
}

.corporate_group_one{
	width: 100%;
	display: flex;
	flex-wrap: wrap;
}

.corporate_col_one{
	position: relative;
	flex: 50%;
	width: 50%;
	padding: 0 20px;
}

.corporate_col_one img{
	vertical-align: middle;
	width: 100%;
	height: auto;
	transition: 0.5s;
	display: block;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
}

.corporate_col_area{
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
}

.corporate_col_box{
	max-width: 600px;
	padding-right: 25px;
}

.corporate_col_box h2{
	font-family: 'Montserrat' , Arial, sans-serif;
	font-size: 40px;
	font-weight: 500;
	display: block;
	color: #111111;
	text-align: left;
	letter-spacing: 1px;
	line-height: 1.3em;
	margin-top: 0;
}

.corporate_col_box > p{
	font-family: 'Roboto' , Arial, sans-serif;
	font-size: 16px;
	font-weight: normal;
	display: block;
	color: #696969;
	padding: 15px 0;
	letter-spacing: 1px;
	text-align: left;
	line-height: 1.5em;
}

.info_items{
	margin: 20px 0;
}

.info_list{
	padding: 3px 0;
}

.info_list > .list_num{
	font-family: 'Montserrat' , Arial, sans-serif;
	font-size: 15px;
	font-weight: 600;
	display: inline-block;
	color: #ffffff;
	text-transform: capitalize;
	letter-spacing: 1px;
	text-align: left;
	background-color: #009fff;
	border-radius: 50%;
	padding: 13px;
}

.info_list > h3{
	font-family: 'Montserrat' , Arial, sans-serif;
	font-size: 16px;
	font-weight: 600;
	display: inline-block;
	color: #111111;
	text-transform: capitalize;
	letter-spacing: 1px;
	text-align: left;
}

.info_list > h3::before{
	content: '\2014';
	padding: 0 0.8em;
}

/* --- 3.2. Corporate Area Two --- */
.corporate_area_two{
	max-width: 1400px;
	margin: 0 auto 9em;
	padding: 0 25px;
}

.corporate_group_two{
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	padding-top: 40px;
}

.corporate_icon_col{
	flex: 25%;
	width: 25%;
	padding: 0 20px;
}

.corporate_icon_box{
	max-width: 350px;
	margin: auto;
	padding: 30px;
	text-align: center;
	background: transparent;
	transition: 0.5s;
	border: solid 1px #e0e0e0;
}

.corporate_icon_box h3{
	color: #111111;
	font-family: 'Montserrat' , Arial, sans-serif;
	font-size: 18px;
	font-weight: 600;
	display: block;
	text-align: center;
	letter-spacing: 1px;
	transition: 0.5s;
	line-height: 1.4em;
}

.corporate_icon_box p{
	font-family: 'Roboto' , Arial, sans-serif;
	font-size: 15px;
	font-weight: normal;
	padding-top: 10px;
	display: block;
	color: #696969;
	letter-spacing: 1px;
	text-align: center;
	transition: 0.5s;
	line-height: 1.5em;
}

.corporate_icon_box .fas,
.corporate_icon_box .far{
	font-size: 35px;
	color: #009fff;
	text-align: center;
	display: block;
	transition: 0.5s;
}

.corporate_icon_box:hover{
	background-color: #009fff;
}

.corporate_icon_box:hover h3,
.corporate_icon_box:hover p{
	color: #ffffff;
}

.corporate_icon_box:hover .fas,
.corporate_icon_box:hover .far{
	color: #ffffff;
}

/* --- 3.3. Corporate Area Three --- */
.corporate_area_three{
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 450px;
	height: 100%;
	text-align: center;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	margin-bottom: 9em;
	padding: 6em 0;
}

.corporate_area_three::before {
	content: '';
	position: absolute;
	z-index: 1;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(24, 25, 34, 0.6);
}

.corporate_group_three{
	max-width: 1400px;
	width: 100%;
	margin: 0 auto;
	padding: 0 25px;
	position: relative;
	z-index: 999;
}

.corporate_group_area{
	width: 100%;
	display: flex;
	flex-wrap: wrap;
}

.corporate_col_three{
	position: relative;
	flex: 50%;
	width: 50%;
	padding: 0 25px;
}

.bg_area{
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
}

.bg_box{
	max-width: 700px;
}

.bg_box h2{
	color: #ffffff;
	font-family: 'Montserrat' , Arial, sans-serif;
	font-size: 40px;
	font-weight: 500;
	display: block;
	text-align: left;
	letter-spacing: 1px;
	line-height: 1.3em;
	margin-top: 0;
}

.bg_box p{
	font-family: 'Roboto' , Arial, sans-serif;
	font-size: 16px;
	font-weight: normal;
	display: block;
	color: #f2f2f2;
	letter-spacing: 1px;
	text-align: left;
	padding: 20px 0;
	line-height: 1.5em;
	max-width: 500px;
}

.corporate_col_button a{
	background-color: #009fff;
	width: 150px;
	min-height: 30px;
	margin: 10px 0 20px;
    border: none;
    color: #ffffff;
    padding: 13px 15px;
    text-decoration: none;
	text-transform: uppercase;
    display: block;
    font-size: 13px;
	font-weight: 600;
	font-family: 'Montserrat', Arial, sans-serif;
    transition: 0.5s;
    cursor: pointer;
	border: 1px solid #009fff;
	letter-spacing: 1px;
	text-align: center;
}

.corporate_col_button a:hover{
	color: #111111;
	background-color: #ffffff;
	border-color: #ffffff;
}

.video-play-button {
	position: absolute;
	z-index: 10;
	left: 50%;
	top: 50%;
	transform: translateX(-50%) translateY(-50%);
	box-sizing: content-box;
	display: block;
	width: 28px;
	height: 42px;
	border-radius: 50%;
	padding: 28px 16px 12px 32px;
}

.video-play-button:before {
	content: "";
	position: absolute;
	z-index: 0;
	left: 50%;
	top: 50%;
	transform: translateX(-50%) translateY(-50%);
	display: block;
	width: 80px;
	height: 80px;
	background: #ffffff;
	border-radius: 50%;
	animation: pulse-border 1500ms ease-out infinite;
}

.video-play-button:after {
	content: "";
	position: absolute;
	z-index: 1;
	left: 50%;
	top: 50%;
	transform: translateX(-50%) translateY(-50%);
	display: block;
	width: 80px;
	height: 80px;
	background: #ffffff;
	border-radius: 50%;
	transition: all 200ms;
}

.video-play-button span {
	display: block;
	position: relative;
	z-index: 3;
	width: 0;
	height: 0;
	border-left: 18px solid #009fff;
	border-top: 12px solid transparent;
	border-bottom: 12px solid transparent;
}

@keyframes pulse-border {
  0% {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
    opacity: 0;
  }
}

/* --- 3.4. Corporate Area Four --- */
.corporate_area_four{
	max-width: 1400px;
	margin: 0 auto 9em;
	padding: 0 25px;
}

.corporate_group_four{
	width: 100%;
	display: flex;
	flex-wrap: wrap;
}

.corporate_wide_col{
	flex: 33.33%;
	width: 33.33%;
	padding: 0 15px;
	overflow: hidden;
	position: relative;
}

.corporate_box_col{
	flex: 66.66%;
	width: 66.66%;
	padding: 0 15px;
	position: relative;
}

.wide_area{
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
}

.wide_box{
	max-width: 600px;
	padding: 0 20px
}

.wide_box h2{
	font-family: 'Montserrat' , Arial, sans-serif;
	font-size: 40px;
	font-weight: 500;
	display: block;
	color: #111111;
	text-align: left;
	letter-spacing: 1px;
	line-height: 1.3em;
}

.wide_box > p{
	font-family: 'Roboto' , Arial, sans-serif;
	font-size: 16px;
	font-weight: normal;
	display: block;
	color: #696969;
	padding: 15px 0;
	letter-spacing: 1px;
	text-align: left;
	line-height: 1.5em;
}

.corporate_list ul{
	padding: 14px 0 16px;
}

.title_group.active{
	background-color: #009fff;
	color: #ffffff;
}

.title_group.active::before{
	color: #ffffff;
	font-family: 'Font Awesome 5 Free';
	content: "\f00c";
	font-weight: 900;
	font-size: 15px;
	padding-right: 12px;
}

.title_group:hover{
	background-color: #009fff;
	color: #ffffff;
}

.title_group:hover::before{
	color: #ffffff;
}

.corporate_list > ul li{
	font-family: 'Montserrat' , Arial, sans-serif;
	font-size: 12px;
	font-weight: 600;
	display: block;
	color: #111111;
	letter-spacing: 1px;
	text-transform: uppercase;
	text-align: left;
	padding: 14px 0;
	max-width: 250px;
	background-color: #ffffff;
	cursor: pointer;
	transition: 0.5s;
}

.corporate_list > ul li::before{
	font-family: 'Font Awesome 5 Free';
	content: "\f00c";
	font-weight: 900;
	font-size: 15px;
	padding-right: 12px;
	padding-left: 12px;
	color: #009fff;
}

.corporate_slider{
	max-width: 1000px;
	margin: auto;
	width: 100%;
}

.corporate_image img{
	vertical-align: middle;
	width: 100%;
	height: auto;
	display: block;
}

.corporate_slide_box{
	max-width: 600px;
	position: relative;
	text-align: center;
	overflow: hidden;
	margin: auto;
	padding-left: 30px;
}

.corporate_image{
	overflow: hidden;
	position: relative;
	cursor: pointer;
}

.featured_content{
	overflow: hidden;
	position: relative;
	text-align: center;
	padding-top: 10px;
	max-width: 300px;
}

.featured_content h3{
	color: #111111;
	font-family: 'Montserrat' , Arial, sans-serif;
	font-size: 18px;
	font-weight: 600;
	display: block;
	text-align: left;
	letter-spacing: 1px;
	line-height: 1.4em;
}

.featured_content p{
	font-family: 'Roboto' , Arial, sans-serif;
	font-size: 15px;
	font-weight: normal;
	display: block;
	color: #696969;
	letter-spacing: 1px;
	text-align: left;
	padding: 10px 0 0;
	line-height: 1.5em;
}

.area_button a{
	font-family: 'Montserrat' , Arial, sans-serif;
	font-size: 12px;
	font-weight: 600;
	letter-spacing: 1px;
	text-align: left;
	text-transform: uppercase;
	display: block;
	color: #009fff;
	text-decoration: none;
	width: 110px;
	transition: 0.5s;
    cursor: pointer;
}

.area_button a::after{
	content: "\203A";
	font-size: 20px;
	margin: 0;
	padding: 0;
	display: inline-block;
	height: auto;
	padding-left: 5px;
	top: 1px;
	position: relative;
}

.area_button a:hover{
	color: #111111;
}
/* --- 3.5. Corporate Area Five --- */
.corporate_area_five{
	width: 100%;
	margin: 0;
	min-height: 400px;
	padding: 6em 25px;
	background-color: #f6f6f6;
}

.corporate_group_five{
	max-width: 1400px;
	margin: auto;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	padding: 40px 0;
}

.team_col{
	flex: 25%;
	width: 25%;
	padding: 0 20px;
}

.team_box{
	max-width: 350px;
	position: relative;
	text-align: center;
	overflow: hidden;
	margin: auto;
	min-height: 150px;
	padding: 25px;
	background-color: #ffffff;
}

.team_image{
	border-radius: 50%;
	overflow: hidden;
	position: relative;
	transition: ease-in-out 0.5s;
}

.team_image img{
	border-radius: 50%;
	vertical-align: middle;
	width: 100%;
	height: auto;
	display: block;
}

.team_content{
	padding-top: 15px;
	padding-bottom: 15px;
	text-align: center;
}

.team_box .team_image > img{
	transition: ease-in-out 3.25s;
}

.team_box:hover .team_image > img{
	transform: scale(1.15);
}

.team_name{
	font-family: 'Montserrat' , Arial, sans-serif;
	font-size: 18px;
	display: block;
	font-weight: 600;
	color: #111111;
	letter-spacing: 1px;
	text-align: center;
	line-height: 1.4em;
}

.team_title{
	font-family: 'Montserrat' , Arial, sans-serif;
	font-size: 15px;
	display: block;
	font-weight: 600;
	color: #696969;
	text-transform: uppercase;
	letter-spacing: 1px;
	text-align: center;
	line-height: 1.5em;
	padding-top: 16px;
	padding-bottom: 16px;
	margin-top: 0;
}

.team_icon{
	text-align: center;
}

.team_icon .fa-facebook-f{
	padding: 10px 12px !important;
}

.team_icon .fab,
.team_icon .fa{
	font-size: 14px;
	color: #ffffff;
	width: 35px;
	height: 35px;
	background-color: #009fff;
	padding: 10px;
	border: solid 1px #009fff;
	border-radius: 50%;
	display: inline-block;
	text-align: left;
	margin-right: 7px;
	transition: ease-in-out 0.5s;
}

.team_icon .fab:hover,
.team_icon .fa:hover{
	color: #ffffff;
	background-color: #111111;
	border-color: #111111;
}

/* --- 3.6. Corporate Area Six --- */
.corporate_area_six{
	width: 100%;
	min-height: 100px;
	margin: 0;
	background-color: #009fff;
	margin: 0 0 9em;
}

.corporate_group_six{
	max-width: 1400px;
	margin: auto;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	padding: 20px;
}

.count_area{
	width: 100%;
	display: flex;
	flex-wrap: wrap;
}

.count_col{
	flex: 25%;
	width: 25%;
	padding: 0 25px;
	min-height: 50px;
}

.count_col::before{
	content: ".";
	font-weight: 900;
	font-size: 30px;
	float: right;
	text-align: right;
	font-family: 'Montserrat' , Arial, sans-serif;
	color: #ffffff;
	margin-top: 30px;
	position: relative;
	left: 15%;
	transform: translateX(-15%);
}

.fourth_circle::before{
	content: ".";
	display: none;
}

.count_box{
	max-width: 300px;
	margin: auto;
	padding: 0 25px;
}

.count_box h3{
	font-family: 'Montserrat' , Arial, sans-serif;
	font-size: 16px;
	font-weight: 600;
	display: block;
	text-align: center;
	color: #111111;
	letter-spacing: 1px;
	text-transform: uppercase;
}

.count_box .counter{
	font-family: 'Montserrat' , Arial, sans-serif;
	font-size: 30px;
	font-weight: 700;
	display: block;
	text-align: center;
	color: #f2f2f2;
	letter-spacing: 1px;
}

/* --- 3.7. Corporate Area Seven --- */
.corporate_area_seven{
	max-width: 1280px;
	margin: 0 auto 9em;
	padding: 0 30px;
	position: relative;
}

.corporate_group_seven{
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	padding-top: 40px;
}

.blog_col{
	flex: 33.33%;
	width: 33.33%;
	padding: 0 20px;
}

.blog_box{
	max-width: 400px;
	position: relative;
	text-align: left;
	overflow: hidden;
	margin: auto;
	min-height: 150px;
}

.blog_image{
	overflow: hidden;
	position: relative;
}

.blog_area{
	overflow: hidden;
	position: relative;
	padding-bottom: 5px;
	padding-right: 5px;
	padding-top: 5px;
	padding-left: 5px;
	background-color: #ffffff;
}

.blog_content{
	text-align: left;
	padding: 15px 0;
	padding-right: 5px;
}

.blog_date{
	font-family: 'Montserrat' , Arial, sans-serif;
	font-size: 13px;
	display: block;
	font-weight: 600;
	color: #696969;
	text-transform: uppercase;
	letter-spacing: 1px;
	text-align: left;
	margin-bottom: 0;
	width: 250px;
}

.blog_col img{
	vertical-align: middle;
	width: 100%;
	height: auto;
	transition: 0.5s;
	display: block;
}

.blog_image > a > img{
	transition: ease-in-out 3.25s;
}

.blog_image > a > img:hover{
	transform: scale(1.15);
}

.blog_title a{
	font-family: 'Montserrat' , Arial, sans-serif;
	font-size: 18px;
	display: block;
	font-weight: 600;
	color: #111111;
	letter-spacing: 1px;
	text-align: left;
	text-decoration: none;
	transition: 0.5s;
	line-height: 1.4em;
}

a.blog_btn{
	max-width: 120px;	
    color: #009fff;
	padding-top: 10px;
    text-decoration: none;
	text-transform: uppercase;
    display: inline-block;
    font-size: 13px;
	font-weight: 600;
	font-family: 'Montserrat', Arial, sans-serif;
    transition: 0.5s;
    cursor: pointer;
	letter-spacing: 1px;
	text-align: left;
}

a.blog_btn::after{
	content: "\203A";
	font-size: 20px;
	margin: 0;
	padding: 0;
	display: inline-block;
	height: auto;
	padding-left: 5px;
	top: 1px;
	position: relative;
}

a.blog_btn:hover{
	color: #111111;
}

/* --- 3.8. Corporate Area Eight --- */
.corporate_area_eight{
	width: 100%;
	margin: 0 0 9em;
	min-height: 400px;
	padding: 6em 25px 8em;
	background-color: #f6f6f6;
}

.corporate_group_eight{
	max-width: 1000px;
	margin: auto;
	width: 100%;
	text-align: center;
	padding-top: 20px;
	padding-bottom: 40px;
	position: relative;
}

.client_details{
	display: block;
	max-width: 325px;
	width: 100%;
	margin: auto;
	padding: 0 15px;
	text-align: center;
	padding-top: 30px;
	padding-bottom: 30px;
}

.client_box{
	width: 100%;
	padding: 35px 30px;
	text-align: center;
	display: block;
	background-color: #ffffff;
}

.client_info img{
	max-width: 90px;
	height: 90px;
	margin: auto;
	border-radius: 50%;
	display: block;
	text-align: center;
	margin-bottom: 14px;
}

.client_name{
	font-family: 'Montserrat' , Arial, sans-serif;
	font-size: 18px;
	font-weight: 600;
	display: block;
	color: #111111;
	letter-spacing: 1px;
	text-align: center;
	text-transform: capitalize;
	line-height: 1.4em;
}

.client_comment{
	display: block;
	clear: both;
}

.client_title{
	font-family: 'Montserrat' , Arial, sans-serif;
	font-size: 14px;
	font-weight: 600;
	display: block;
	color: #009fff;
	letter-spacing: 1px;
	text-align: center;
	text-transform: uppercase;
}

.client_comment q{
	font-family: 'Roboto' , Arial, sans-serif;
	font-size: 15px;
	font-weight: normal;
	display: block;
	color: #696969;
	letter-spacing: 1px;
	text-align: center;
	max-width: 350px;
	margin: auto;
	padding-top: 15px;
	line-height: 1.5em;
}

.review_nav{
	position: absolute;
	bottom: 0;
	left: 50%;
	margin-bottom: -15px;
	transform: translateX(-50%);
}

.prev_nav,
.next_nav{
	font-size: 14px;
	transition: 0.6s ease;
	background: transparent;
	width: auto;
	display: inline-block;
	overflow: hidden;
	padding: 10px 16px;
	color: #111111;
	cursor: pointer;
	border: solid 1px #111111;
	border-radius: 3px;
}

.prev_nav{
	margin-right: 15px;
}

.next_nav:hover,
.prev_nav:hover{
	background-color: #009fff;
	color: #ffffff;
	border-color: #009fff;
}

/* --- 3.9. Corporate Area Nine --- */
.corporate_area_nine{
	max-width: 1280px;
	margin: 0 auto 2em;
	padding: 0 35px;
}

.corporate_group_nine{
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	background-color: #009fff;
	padding: 40px 35px;
}

.col_head{
	flex: 50%;
	width: 50%;
}

.col_info{
	flex: 50%;
	width: 50%;
	margin-top: 15px;
}

.col_head h3{
	font-family: 'Montserrat' , Arial, sans-serif;
	font-size: 30px;
	display: block;
	font-weight: 500;
	color: #ffffff;
	letter-spacing: 1px;
	text-align: left;
	line-height: 1.3em;
	max-width: 500px;
	margin-top: 0;
}

.subscribe-row{
	text-align: right;
}

.col_info input[type="email"]{
	width: 350px;
	padding: 12px 20px 14px;
	border: solid 1px #e0e0e0;
	font-family: 'Montserrat' , Arial, sans-serif;
	font-size: 13px;
	display: inline-block;
	font-weight: 600;
	color: #333333;
	text-transform: capitalize;
	letter-spacing: 1px;
	background-color: #ffffff;
}

.col_info input[type="submit"]{
	display: inline-block;
	width: auto;
	padding: 11px 24px;
	text-align: center;
	font-family: 'Montserrat' , Arial, sans-serif;
	font-size: 16px;
	font-weight: 500;
	text-transform: uppercase;
	margin: 0;
	margin-left: -4px;
	color: #ffffff;
	border-radius: 0;
	letter-spacing: 1px;
	background-color: #111111;
	border: solid 1px #111111;
	transition: 0.5s;
}

.col_info input[type="submit"]:hover{
	background: transparent;
	color: #ffffff;
	border-color: #ffffff;
}

/* 4. FOOTER
 ----------- */
.footer{
	width: 100%;
	min-height: 350px;
	position: relative;
	clear: both;
	height: 100%;
}

.footer_area{
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 25px;
	display: flex;
	flex-wrap: wrap;
}

.footer_col{
	flex: 25%;
	width: 25%;
	padding: 0 20px;
	max-width: 300px;
}

.footer_col{
	padding-top: 3.5em;
}

a.footer-brand img{
	max-width: 200px;
	height: auto;
	display: block;
}

.footer_box > h3 > a{
	font-family: 'Montserrat', Arial, sans-serif;
	font-size: 22px;
	font-weight: 700;
	letter-spacing: 1px;
	text-transform: uppercase;
	text-decoration: none;
	color: #111111;
	text-align: left;
}

.footer_box > p{
	font-family: 'Montserrat', Arial, sans-serif;
	font-size: 14px;
	font-weight: normal;
	letter-spacing: 1px;
	color: #111111;
	text-align: left;
	padding: 20px 0;
	line-height: 1.5em;
}

.footer_social{
	margin: 12px 0;
}

.footer_social .fab,
.footer_social .fa{
	font-size: 16px;
	color: #111111;
	text-align: left;
}

.footer_social > a{
	padding-right: 12px;
}

.footer_social > a:hover{
	opacity: 0.6;
}

.final{
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
}

.footer_col > h4{
	font-family: 'Montserrat', Arial, sans-serif;
	font-size: 18px;
	font-weight: 700;
	letter-spacing: 1px;
	text-transform: capitalize;
	color: #111111;
}

.footer_col > ul > li{
	padding: 4px 0;
}

.footer_col > ul > li a{
	font-family: 'Montserrat', Arial, sans-serif;
	font-size: 13px;
	font-weight: normal;
	letter-spacing: 1px;
	text-decoration: none;
	color: #111111;
	text-align: justify;
	transition: 0.5s;
}

.footer_col > ul > li a:hover{
	opacity: 0.6;
}

.right_list{
	padding-top: 10px;
}

.blog_list{
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	max-width: 390px;
	padding-bottom: 10px;
}

.left_blog{
	flex: 25%;
	width: 25%;
	padding-bottom: 10px;
}

.right_blog{
	flex: 75%;
	width: 75%;
	max-width: 290px;
	padding-bottom: 15px;
	padding-left: 14px;
	margin-top: -5px;
}

.left_blog img{
	vertical-align: middle;
	width: 100%;
	max-width: 100px;
	transition: .5s;
}

.details{
	width: 100%;
	padding-top: 35px;
	padding-bottom: 10px;
	margin-top: 35px;
	border-top: solid 1px #e0e0e0;
}

.details p{
	font-family: 'Montserrat', Arial, sans-serif;
	font-size: 13px;
	font-weight: normal;
	letter-spacing: 1px;
	color: #111111;
	text-align: center;
}

/* 5. RESPONSIVE
 ----------- */
@media only screen and (max-width: 1024px){
	.header__content{
		height: auto;
	}
	
	.slide__content{
		height: auto;
	}
	
	.corporate_col_one{
		flex: 100%;
		width: 100%;
		max-width: 600px;
	}
	
	.corporate_col_area{
		margin-bottom: 30px;
	}
	
	.corporate_icon_col{
		flex: 50%;
		width: 50%;
		margin-bottom: 35px;
	}
	
	.corporate_box_col{
		flex: 100%;
		width: 100%;
		padding: 0;
	}
	
	.corporate_wide_col{
		flex: 100%;
		width: 100%;
		padding: 0;
	}
	
	.wide_box{
		margin-bottom: 40px;
	}
	
	.team_col{
		flex: 50%;
		width: 50%;
		margin-bottom: 40px;
	}
	
	.blog_col{
		flex: 50%;
		width: 50%;
		margin-bottom: 40px;
	}
	
	.col_info{
		flex: 100%;
		width: 100%;
		margin-top: 0;
	}
	
	.col_head{
		flex: 100%;
		width: 100%;
	}
	
	.subscribe-row{
		text-align: center;
		margin-top: 35px;
	}
	
	.col_head h3{
		text-align: center;
		width: 100%;
		margin: auto;
	}
}

@media only screen and (max-width: 992px){
	nav.navbar.bootsnav .navbar-toggle{
        background: transparent;
        color: #ffffff;
		font-size: 25px;
	}
	
	.head_btn{	
		margin-top: 40px;
		position: relative;
		left: 50%;
		transform: translateX(-50%);
	}
	
	.navbar-header h2{
		margin-top: 7px;
	}
	
	nav.navbar.bootsnav ul.nav > li > a{
		color: #111111;
	}
	
	nav.navbar.bootsnav li.dropdown a.dropdown-toggle:before{
        font-family: 'Font Awesome 5 Free';
        content: "\f105";
        float: right;
        font-size: 16px;
        margin-left: 10px;
    }
	
	nav.navbar.bootsnav ul.nav > li.dropdown > a.dropdown-toggle:after{
		display: none;	
	}
	
	nav.navbar.bootsnav .dropdown .megamenu-content .col-menu .title:before{
        font-family: 'Font Awesome 5 Free';
        content: "\f105";
    }
	
	nav.navbar.bootsnav ul.nav.navbar-right .dropdown-menu .dropdown-menu{
		left: 0;
	}
	
	nav.navbar.bootsnav ul.navbar-right li.dropdown ul.dropdown-menu li.dropdown.on > a.dropdown-toggle:before{
		 content: "\f107";
	}
	
	nav.navbar.bootsnav ul.dropdown-menu.megamenu-content .col-menu{
		border-left: none;
		border-right: none;
	}
	
	.left_info,
	.right_info,
	.left_sub,
	.right_sub{
		flex: 100%;
		width: 100%;
		text-align: center;
	}
	
	.right_sub{
		padding-left: 0;
		padding-top: 12px;
	}
	
	.top_sub,
	.left_info a{
		text-align: center;
	}
	
	.top_sub{
		padding-bottom: 4px;
	}
	
	.attr-nav > ul > li > a{
		position: relative;
		left: 0;
		padding-top: 25px;
	}
	
	.header-title{
		margin-left: 5vw;
	}
	
	.corporate_col_three{
		flex: 100%;
		width: 100%;
		padding: 0;
	}
	
	.corporate_col_button a{
		margin-bottom: 90px;
	}
	
	.count_col{
		flex: 50%;
		width: 50%;
		margin: 20px 0;
	}
	
	.second_circle::before{
		display: none;
	}
	
	.footer_col{
		flex: 50%;
		width: 50%;
	}
}

@media only screen and (max-width: 600px){
	.header-title__main{
		font-size: 30px;
	}
	
	.corporate_col_box h2,
	.corporate_head,
	.bg_box h2,
	.wide_box h2{
		font-size: 30px;
	}
	
	.corporate_icon_col{
		flex: 100%;
		width: 100%;
	}
	
	.corporate_slide_box{
		padding-left: 0;
	}
	
	.team_col{
		flex: 100%;
		width: 100%;
	}
	
	.count_col{
		flex: 100%;
		width: 100%;
	}
	
	.third_circle::before,
	.first_circle::before{
		display: none;
	}
	
	.blog_col{
		flex: 100%;
		width: 100%;
	}
	
	.col_info input[type="email"]{
		display: block;
		width: 100%;
	}
	
	.col_info input[type="submit"]{
		margin-top: 20px;
		display: block;
		width: 100%;
		margin-left: 0;
	}
	
	.footer_col{
		flex: 100%;
		width: 100%;
	}
}

@media only screen and (max-width: 420px){
	.corporate_col_one,
	.corporate_col_box,
	.corporate_col_area,
	.corporate_icon_col,
	.blog_col,
	.wide_box{
		padding: 0;
	}
	
	.col_head h3{
		font-size: 25px;
	}
}

@media only screen and (max-width: 360px){
	.team_col{
		padding: 0;
	}
}

@media only screen and (max-width: 320px){
	.info_list > h3{
		font-size: 14px;
	}
}
