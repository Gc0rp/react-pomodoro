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
