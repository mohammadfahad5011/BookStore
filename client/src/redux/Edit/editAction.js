export const editBooksAction=(bookId,book)=>{
    return{
        type:'EDIT_BOOK_DATA',
        payload:{
            bookId,
            book,
            edit: true
        }
    }
}