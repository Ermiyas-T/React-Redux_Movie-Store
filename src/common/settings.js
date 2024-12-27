export const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: true,
    slidesToScroll: 1,
    responsive: [

        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
            },
        },

        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};
