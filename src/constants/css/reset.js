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
        border: 1px solid red;
    }

    .display-todos{
        list-style-type: none;
    }

    .todoItem{
        font-family: 'Cantarell', sans-serif;
        font-size: 20px;
    }

    .col-lg-6{
        border: 1px solid red;
        word-wrap: break-word;
    }

    #col-button{
        text-align: right;
    }

    .delete-button{
        margin-right: 15px;
    }
    

    .setTaskLabel{
        padding-left: 0px;
        border: 1px solid red;
    }

    .list-of-todo-label{
        text-align: left;
    }

    ::placeholder{
        color: white;
    }
`;

export default reset;
