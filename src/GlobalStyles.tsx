import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --dark: black;
        --light: white;
        --transition: all .25s;
        --buttonColor: lightgrey;
        --buttonColorDisabled: rgba(124, 124, 124, 0.73);
    }

    html, body {
        background-color: var(--theme);
        color: var(--text-color);
        font-family: Arial, sans-serif;
    }

    *[data-theme=light] {
        transition: var(--transition);
        --theme: var(--light);
        --text-color: var(--dark);

        a {
            color: var(--dark);
            text-decoration: underline;

            &:hover {
                color: darkblue;
            }
        }

        button {
            background: var(--buttonColor);
            color: var(--dark);
            border-radius: 4px;
            padding: 8px 16px;

            &:disabled {
                background: var(--buttonColorDisabled);
            }
        }

        svg path {
            fill: var(--dark);
        }

        thead, tbody, .ant-table-cell {
            background-color: var(--light) !important;
            color: var(--dark) !important;
            border: 1px solid lightgrey;
            padding: 8px;
        }
    }

    *[data-theme=dark] {
        transition: var(--transition);
        --theme: var(--dark);
        --text-color: var(--light);

        a {
            color: var(--light);
            text-decoration: none;

            &:hover {
                color: lightblue;
            }
        }

        button {
            background: var(--buttonColorDisabled);
            color: var(--light);
            border-radius: 8px;
            padding: 12px 24px;

            &:disabled {
                background: var(--buttonColor);
            }
        }

        svg path {
            fill: var(--light);
        }

        thead, tbody, .ant-table-cell {
            background-color: var(--dark) !important;
            color: var(--light) !important;
            border: none;
            padding: 12px;
        }
    }

    @media (max-width: 768px) {
        html, body {
            font-size: 14px;
        }

        *[data-theme=light] {
            button {
                padding: 6px 12px;
            }

            thead, tbody, .ant-table-cell {
                padding: 6px;
            }
        }

        *[data-theme=dark] {
            button {
                padding: 8px 16px;
            }

            thead, tbody, .ant-table-cell {
                padding: 8px;
            }
        }
    }

    @media (max-width: 480px) {
        html, body {
            font-size: 12px;
        }

        *[data-theme=light] {
            button {
                padding: 4px 8px;
            }

            thead, tbody, .ant-table-cell {
                padding: 4px;
            }
        }

        *[data-theme=dark] {
            button {
                padding: 6px 12px;
            }

            thead, tbody, .ant-table-cell {
                padding: 6px;
            }
        }
    }
`;
