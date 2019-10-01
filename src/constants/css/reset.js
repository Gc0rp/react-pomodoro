import { css } from 'styled-components';

const reset = css`
    html {
        /* Nicer looking fonts for OS X and iOS */
        -webkit-font-smoothing: antialiased;
    }

    * {
        user-select: none;
        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
        -webkit-tap-highlight-color: transparent;
        box-sizing: border-box;
        margin: 0px;
        padding: 0px;
    }

    .d-flex{
        width: 100%;
        margin: 0px;
        padding: 0px;
    }

    .col-lg-12{
        margin: 5px;
    }

    .list-of-todos{
    }

    .display-todos{
        list-style-type: none;
    }

    .todoItem{
        font-family: 'Cantarell', sans-serif;
        font-size: 20px;
    }

    .col-lg-6{
        word-wrap: break-word;
    }

    #current-task{
        word-wrap: break-word;
        max-width: 300px;
        padding: 0px;
        margin: 0px;
    }

    #col-button{
        text-align: right;
    }

    #task-reset{
        margin: 0px;
    }

    .delete-button{
        margin-right: 15px;
    }
    

    .setTaskLabel{
        padding-left: 0px;
    }

    .list-of-todo-label{
        text-align: left;
    }

    hr {
        border: 0;
        display:block;
        width: 40%;               
        background-color: #FF8552;    
        height: 1px;
    }

    ::placeholder{
        color: white;
    }

    /* Let's get this party started */
::-webkit-scrollbar {
    width: 5px;
}
 
/* Track */
::-webkit-scrollbar-track {
    -webkit-border-radius: 5px;
    border-radius: 5px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    background: #FF8552; 
}
::-webkit-scrollbar-thumb:window-inactive {
	background: #FF8552; 
}
`;

export default reset;
