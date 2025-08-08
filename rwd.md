@media screen and (max-width: 1200px) {

    .product .first-column {
        grid-template-columns: repeat(2, minmax(320px, 1fr));
        grid-auto-rows: 320px;
    }

    .product .second-column {
        grid-template-columns: repeat(2, minmax(320px, 1fr));
        grid-auto-rows: 320px;
    }

}

@media screen and (max-width: 992px) {
    /* -------------------about------------------ */
    .about-content{
        grid-template-columns: 1fr 1fr;
    }

    /* ---------------industry------------------- */
    .industry-box {
        gap: 16px;
        grid-template-columns: repeat(5, minmax(80px, 1fr));
    }

    .industry-box div:nth-child(6) {
        display: none;
    }

    .industry-box img {
        width: 50%;
        height: auto;
        margin-bottom: 8px;
    }

    /* ---------------footer------------------- */
    .footer ul {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
}

@media screen and (max-width: 768px) {
    .img-wrapper img{
        object-position: 70% center;
    }
    /* -------------------about------------------ */
    .about-content{
        grid-template-columns: 8fr 4fr;
    }
    /* ---------------product------------------- */
    .product .first-column, .product .second-column {
        grid-template-columns: 1fr;
    }

    /* ---------------industry------------------- */
    .industry {
        padding-top: 264px;
    }

    .industry-box {
        gap: 16px;
        grid-template-columns: repeat(4, minmax(80px, 1fr));
    }
    .industry-heading{
        margin-top: 0;
    }
    .industry-box div:nth-child(5) {
        display: none;
    }

    /* ---------------footer------------------- */
    .footer ul {
        grid-template-columns: 1fr 1fr 1fr;
    }

    .footer ul li:first-child {
        display: none;
    }
}

@media screen and (max-width: 576px) {
    .img-wrapper img{
        object-position: 75% center;
    }
    /* -------------------about------------------ */
    .about-content{
        grid-template-columns: 1fr;
    }
    .about-content div:last-child{
        display: none;
    }
    /* ---------------industry------------------- */
    .industry-box {
        gap: 16px;
        grid-template-columns: repeat(3, minmax(80px, 1fr));
    }

    .industry-box div:nth-child(4) {
        display: none;
    }

    /* ---------------footer------------------- */
    .footer ul {
        grid-template-columns: 1fr 1fr 1fr;
    }

    .footer ul li:first-child {
        display: none;
    }

}