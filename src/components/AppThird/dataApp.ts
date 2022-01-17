
export type TourType = {
    id: number,
    name: string,
    duration: number,
    rating: number,
    numberOfReviews: number,
    price: number,
    image:string
}
export type ToursType = {
    id: number,
    name:string,
    tours: TourType []
}
export const toursData: ToursType [] = [
    {
        "id": 1,
        "name": "Niagara Falls",
        "tours": [
            {
                "id": 1,
                "name": "Immerse into the Falls",
                "duration": 5,
                "rating": 4.5,
                "numberOfReviews": 462,
                "price": 465,
                "image": "https://tcproduction.blob.core.windows.net/media/%7B240f8b72-1159-4fd3-a150-0a837f50ba4a%7D.2573758641_297d6d19fa_o.jpg"
            },
            {
                "id": 2,
                "name": "Helicopter Over the Falls",
                "duration": 8,
                "rating": 3.5,
                "numberOfReviews": 641,
                "price": 385,
                "image": "https://d2ru2mvuh5wx24.cloudfront.net/avtivity_bootstrap/1241/flight_of_angels_3__1920x864.jpg"
            },
            {
                "id": 3,
                "name": "The Falls at Night",
                "duration": 2,
                "rating": 4.5,
                "numberOfReviews": 133,
                "price": 144,
                "image": "https://www.niagarafallsstatepark.com/~/media/parks/niagara-falls/attractions-and-tours/illumination/niagarafalls-illumination-header-desktop.jpg?h=500&w=1500&la=en&hash=123E6D5F1744FBCC74EC36570E77872608D24891g"
            },
            {
                "id": 4,
                "name": "Immerse into the Falls",
                "duration": 5,
                "rating": 4.5,
                "numberOfReviews": 462,
                "price": 465,
                "image": "https://tcproduction.blob.core.windows.net/media/%7B240f8b72-1159-4fd3-a150-0a837f50ba4a%7D.2573758641_297d6d19fa_o.jpg"
            }
        ]
    },
    {
        "id": 2,
        "name": "Las Vegas",
        "tours": [
            {
                "id": 4,
                "name": "All Around the World",
                "duration": 5,
                "rating": 4.5,
                "numberOfReviews": 462,
                "price": 465,
                "image": "https://assets.simpleviewcms.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/lasvegas/strip_b86ddbea-3add-4995-b449-ac85d700b027.jpg"
            },
            {
                "id": 5,
                "name": "View the Casinos",
                "duration": 5,
                "rating": 4.5,
                "numberOfReviews": 462,
                "price": 465,
                "image": "https://s3.amazonaws.com/virginhotelslv.com/content/uploads/2021/04/Website-Hero-Images-Mohegan-Sun-B-1300x420-1.jpg"
            },
            {
                "id": 6,
                "name": "Show me the Magic",
                "duration": 8,
                "rating": 3.5,
                "numberOfReviews": 641,
                "price": 385,
                "image": "https://footwearnews.com/wp-content/uploads/2020/10/magic-trade-show-las-vegas.jpg"
            },
            {
                "id": 7,
                "name": "The Falls at Night",
                "duration": 2,
                "rating": 4.5,
                "numberOfReviews": 133,
                "price": 144,
                "image": "https://assets.simpleviewcms.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/lasvegas/strip_b86ddbea-3add-4995-b449-ac85d700b027.jpg"
            }
        ]
    }
]