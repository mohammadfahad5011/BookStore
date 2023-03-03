import { LOADED_BOOKS,ADD_BOOKS,UPDATE_BOOKS,DELETE_BOOKS } from "./bookConstant";



//action creator

export const loadedBooksAction=(books)=>{
    return{
        type:LOADED_BOOKS,
        payload:books
    }
}

export const addBooksAction=(bookInfo)=>{
    return{
        type:ADD_BOOKS,
        payload:bookInfo
    }
}

export const updateBooksAction=(bookId,updatebook)=>{
    return{
        type:UPDATE_BOOKS,
        payload:{
            bookId,
            updatebook
        }
    }
}



export const deleteBooksAction=(bookId)=>{
    return{
        type:DELETE_BOOKS,
        payload:bookId
    }
}


