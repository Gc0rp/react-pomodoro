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

    #col-button{
        text-align: right;
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
`;

export default reset;
