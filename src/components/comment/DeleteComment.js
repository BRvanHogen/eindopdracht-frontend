import React from 'react';
import axios from 'axios';
// import styles from "../../stylesheets/band-dashboard.module.css";
import styles from './delete-comment.module.css';
import GetComment from "./GetComment";


// function DeleteComment(commentId) {
//     console.log('it got to DeleteComment!');

    // async function DeleteCommentFromDB() {
    async function DeleteCommentFromDB(commentId) {
        console.log('it got to DeleteCommentFromDB');
        try {
            await axios.delete(`https://localhost:8444/comments/${commentId}`);
            // GetComment();
        } catch (e) {
            console.error(e);
        }
    // }

    return (
        <>
            {/*<i*/}
            {/*    className={styles['delete-comment']}*/}
            {/*    onClick={DeleteComment}*/}
            {/*    id={props.id}*/}
            {/*>*/}
            {/*    🗑️*/}
            {/*</i>*/}
        </>
    );
}


// export default DeleteComment;

export default DeleteCommentFromDB;