const INITIAL_STATE = {
    sections:[
        {
            id:1,
            title:"hats",
            imgUrl:"hhh.png",
            size:"large",
            linkUrl:"shop/hats"
        },    {
            id:2,
            title:"jackets",
            imgUrl:"hhh.png",
            size:"small",
            linkUrl:"shop/jackets"
        },
        {
            id:3,
            title:"sneakers",
            imgUrl:"hhh.png",
            size:"small",
            linkUrl:"shop/sneakers"
        },
        {
           id:4,
           title:"womens",
           imgUrl:"hhh.png",
           size:"small",
           linkUrl:"shop/womens"
       },
       {
           id:3,
           title:"mens",
           imgUrl:"hhh.png",
           size:"small",
           linkUrl:"shop/mens"
       }
       
    ]
}




const directoryReducer  = (state = INITIAL_STATE,action) => {
    switch (action.type) {

    
        default:
            return state;
    }
}

export default directoryReducer