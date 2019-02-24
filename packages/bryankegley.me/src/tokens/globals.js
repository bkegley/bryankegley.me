import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    html {
        font-size: 16px;
        font-family: ${props => props.theme.fonts.sans};
        margin: 0px;
        padding: 0px;
        width: 100%;
        height: 100%;
    }
    body {
        width: 100%;
        height: 100%;
        margin: 0px;
        padding: 0px;
        color: ${props => props.theme.colors.black}
    }

    p {
        line-height: 1.65rem;
        margin-bottom: 2rem;
    }
`
