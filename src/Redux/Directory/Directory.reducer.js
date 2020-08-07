const INITIAL_STATE = {
    sections:[
        {
            id:1,
            title:"Hats",
            imgUrl:"hhh.png",
            size:"large",
            linkUrl:"Hats"
        },
        {
           id:2,
           title:"Womens",
           imgUrl:"hhh.png",
           size:"small",
           linkUrl:""
       },
       {
           id:3,
           title:"Sneakers",
           imgUrl:"hhh.png",
           size:"small",
           linkUrl:""
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