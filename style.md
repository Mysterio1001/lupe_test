
/* --------------------------font size------------------------ */
h1{
    font-size: 4.5rem;
    letter-spacing: 4px;
    line-height: 6rem;
}

h2{
    font-size: 2.488rem;
    font-weight: 500;
    letter-spacing: 0.14rem;
}

h3{
    font-size: 2.074rem;
    font-weight: 500;
    line-height: 4rem;
    letter-spacing: 0.12rem;
}

h4{
    font-size: 1.728rem;
    font-weight: 500;
    line-height: 1.6rem;
    letter-spacing: 0.1rem;
}

h5{
    font-size: 1.44rem;
    font-weight: 500;
    line-height: 1.6rem;
    letter-spacing: 0.08rem;
}

h6{
    font-size: 1.2rem;
    line-height: 1.6rem;
    letter-spacing: 0.08rem;
}

p{
    font-size: 16px;
    line-height: 1.6rem;
    letter-spacing: 0.06rem;
}

small{
    font-size: 12px;
}


/* --------------------------body------------------------ */

body{
    font-family: "Noto Sans","JetBrains", Arial, Helvetica, sans-serif ;
}

#wrapper{
    /* width: 1200px; */
    margin: 0 auto;
}

/* --------------------------kv------------------------- */

header {
    background-color: #f6f6f6;
    margin:  0 auto;
    position: relative;
    height: 744px;
    overflow: hidden;
}

.img-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 8px;
}
  
.img-wrapper img {
    width: 100%;
    height: 100%; 
    object-fit: cover;
    border-radius: 8px;
}

.kv {
    position: absolute;
    top: 50%;
    left: 10%;
    color: white;
    z-index: 1;
}
.kv .product-name{
    font-weight: 600;
}
.top-text {
    flex: 1;
    text-align: left;
    width: 100%;
}

.top-text h1{
    color: #ffffff;
    margin-bottom: 16px;
}

/* -----------------header-contact------------------- */
.header-contact {
    width: 82px;
    height: 82px;
    bottom: 40px;
    right: 40px;
    position: fixed;
    z-index: 1000;
    overflow: hidden;
    backdrop-filter: blur(10px); 
    border-radius: 100%;
}

.header-contact_outer{
    width: 100%;
    height: 100%;
    border-radius: 100%;
    animation: rotation 10s infinite linear;
}

@keyframes rotation {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(-359deg);
    }
}

.header-contact_center{
    border-radius: 100%;
    position: absolute;
    top:calc((82px - 56px) / 2);
    left:calc((82px - 56px) / 2);
}
/* -----------------------container---------------------- */

.container{
    margin: 0 auto;
    background-color: #f6f6f6;
    z-index: 2;
}

.about h4{
    text-align: left;
    margin-bottom: 48px;
}
/* -----------------------about---------------------- */
.about{
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 64px;
}
.about-content{
    display: grid;
    grid-template-columns: 5fr 7fr;
    padding-top: 144px;
    padding: 0 16px;
}
.about .content-text{
    padding-top: 144px;
}
.about .content-text p{
    margin-bottom: 32px;
    text-align: justify;
}
.about .content-text a{
    text-decoration: none;
    color: #0f0f0f;
    box-sizing: border-box;
}
.about .about-content a:hover{
    color: #5559FF;
}
.about img{
    width: 60%;
}
.container > img{
    width: 80%;
    float: right;
    padding: 48px 0 80px 0 ;
}
/* -----------------------customer---------------------- */
.customer{
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
}

.customer .content{
    width: 100%;
    margin: 0 auto;
    text-align: center;
    overflow: hidden;
    position: relative;
    mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
    box-sizing: border-box;
    padding-bottom: 48px;
}

.customer .our-customers {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 80px;
    margin: 20px 0;
    animation: scroll 20s linear infinite;

}
@keyframes scroll {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-100%);
    }
}

.customer .our-customers img{
    height: 32px;
    width: auto;
}
/* -----------------------news---------------------- */
.news-wrapper{
    background-color: #151515;
    padding: 144px 0;
}

.news{
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
}
.news-heading{
    color: #fff;
    box-sizing: border-box;
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 48px;
    padding: 0 16px;
}
.news-heading a {
    /* box-sizing: border-box; */
    text-decoration: none;
    color:#d9d9d9
}
.news-heading a:hover{
    color:#5559FF;
}

.news ul{
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    overflow-x: auto; /* 璅芸�皛𡁜� */
    scroll-snap-type: x mandatory;
    padding: 0 16px;
    gap: 20px;
}
.news ul::-webkit-scrollbar {
    display: none; /* �鞱�皛𡁏�璇�*/
}
.news li{
    width: 282px;
}
.news img{
    border-radius: 8px;
}

.news ul h6{
    color: #ffffff;
    text-align: left;
    margin-top: 24px;
    margin-bottom: 8px;
    font-weight: 400;

    display: -webkit-box;           
    -webkit-box-orient: vertical;    
    overflow: hidden; 
    -webkit-line-clamp: 2; 
}
.news small{
    font-size: 12px;
    color: #A4A7AE;
}
.news ul p{
    color: #fff;
    font-weight: 200;
    letter-spacing: 1px;
    margin: 16px 0;
    display: -webkit-box;           
    -webkit-box-orient: vertical;    
    overflow: hidden;               
    text-overflow: ellipsis;        
    -webkit-line-clamp: 3; 
}
.news ul a{
    font-size: small;
    color: #626466;
    display: block;
    text-decoration: none;
    line-height: 44px;
    border-top: 1px solid #4a4a4a;
}

.news ul a:hover{
    color: #5559FF;
}

/* -----------------------product---------------------- */

.product{
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
}

.product > h4{
    box-sizing: border-box;
    padding: 0 16px;
    text-align: left;
    padding-top: 144px;
    margin-bottom: 48px;
}
.product-content{
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
}

.product .first-column{
    display: grid;
    grid-template-columns: 7fr 5fr;
    gap: 16px;
    box-sizing: border-box;
    margin-bottom: 16px;
    width: 100%;
    padding: 0 16px;
}

.product .second-column{
    display: grid;
    grid-template-columns: 5fr 7fr;
    gap: 16px;
    box-sizing: border-box;
    padding: 0 16px;
}
.product-item {
    position: relative;
    width: 100%;
    overflow: hidden;
    border-radius: 8px;
}

.product-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* display: block; */
}

.product-info {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: white;
    padding: 16px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: linear-gradient(to top,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 50%);
    pointer-events: none;
}

.product .product-info h4{
    font-weight: 800;
}

.product .product-info-text{
    box-sizing: border-box;
    gap: 16px;
}

.product .product-info-text p:first-child{
    font-weight: 600;
}

.product .product-info-text .border{
    font-weight: 200;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    padding-bottom: 8px; 
    margin-bottom: 8px;
}
.product .product-info-text a{
    box-sizing: border-box;
    padding: 8px 16px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 20px;
    color: #ffffff;
    text-decoration: none;
    font-size: 12px;
    display: inline-block;
}
  
.product .product-item img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* -----------------------industry---------------------- */
.industry{
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding-bottom: 144px;
}
.industry-heading{
    box-sizing: border-box;
    padding: 0 16px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 192px;
    margin-bottom: 48px;
}
.industry-heading a {
    text-decoration: none;
    color:#252B37
}
.industry-heading a:hover{
    color:#5559FF;
}

.industry-box{
    display: grid;
    justify-content: center;
    margin: 0 auto;
    grid-template-columns: repeat(6, minmax(80px,1fr));
    box-sizing: border-box;
    gap: 24px;
    padding: 0 16px;
}

.industry-box div{
    display: flex;
    flex-direction: column; 
    justify-content: center; 
    align-items: center;
    text-align: center; 
    position: relative;
    border-radius: 8px;
    border: 1px solid #E9EAEB;
    transition: transform 0.3s ease;
    aspect-ratio: 1 / 1;
    overflow: hidden;
}

.industry-box div:hover{
    background: #ffffff;
    transform: translateY(-10px);
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.04);
}

.industry-box img {
    width: 60%;
    height: auto; 
    margin-bottom: 8px;
}
.industry-box p{
    font-weight: 500;
    /* margin-top: 16px; */
    letter-spacing: 1px;
    margin-bottom: 16px;
}


/* -----------------------footer---------------------- */
.footer{
    background-color: #151515;
    box-sizing: border-box;
    padding: 0 16px;
    padding-top: 48px;
}
.footer-content{
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    justify-content: center;
    padding-bottom: 32px;
}
.footer ul{
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr;
    gap: 48px;
    padding-bottom: 200px;
}

.footer ul li{
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
}
.footer ul li img{
    margin-bottom: 24px;
}
.footer .slogan{
    background: linear-gradient(170deg, #21DEFF, #A099FF, #E17DFF );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding-bottom: 40px;
}

.footer ul li a{
    font-family: "JetBrains Mono", "Menlo", "Monaco", "Consolas", "monospace";
    font-size: small;
    letter-spacing: 2px;
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    text-decoration: none;
    color: #fff;
    padding: 12px 0;
}
.footer ul li a:hover{
    background: linear-gradient(160deg, #21DEFF, #A099FF, #E17DFF );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.footer p{
    color: #8f949b;
    font-size: 12px;
    letter-spacing: 2px;
    font-weight: 200;
} 