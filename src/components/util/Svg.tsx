import React from "react";

export const icons = {
    ARROW_ROUNDED: "arrow_rounded",
    BUILDING: "building",
    CHAT: "chat",
    CLOSE_FILLED: "close_filled",
    EDIT: "edit",
    EXIT: "exit",
    HOME: "home",
    LINKED: "linked",
    MARKET: "market",
    PLUS: "plus",
    SEARCH: "search",
    SETTINGS: "settings",
    TRASH: "trash",
    ARROW_LEFT: "arrow_left",
};

interface Props {
    id: string;
}

const Svg = ({ id }: Props) => {
    switch (id) {
        case icons.ARROW_ROUNDED:
            return (
                <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.5131 1.29031C15.9273 1.29031 16.2631 1.6261 16.2631 2.04031V5.79031C16.2631 6.20453 15.9273 6.54031 15.5131 6.54031H11.7631C11.3488 6.54031 11.0131 6.20453 11.0131 5.79031C11.0131 5.3761 11.3488 5.04031 11.7631 5.04031H14.7631V2.04031C14.7631 1.6261 15.0988 1.29031 15.5131 1.29031Z"
                        fill="#82B284"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.19493 1.99269C8.00679 1.75636 6.77526 1.87765 5.65606 2.34124C4.53687 2.80483 3.58027 3.58988 2.90725 4.59714C2.23422 5.60439 1.875 6.78859 1.875 8C1.875 9.21141 2.23422 10.3956 2.90725 11.4029C3.58027 12.4101 4.53687 13.1952 5.65606 13.6588C6.77526 14.1224 8.00679 14.2436 9.19493 14.0073C10.3831 13.771 11.4744 13.1876 12.331 12.331C12.6239 12.0381 13.0988 12.0381 13.3917 12.331C13.6846 12.6239 13.6846 13.0988 13.3917 13.3917C12.3253 14.4581 10.9667 15.1843 9.48756 15.4785C8.00846 15.7727 6.47532 15.6217 5.08204 15.0446C3.68875 14.4675 2.49789 13.4902 1.66004 12.2362C0.822198 10.9823 0.375 9.50809 0.375 8C0.375 6.49192 0.822198 5.0177 1.66004 3.76378C2.49789 2.50986 3.68875 1.53254 5.08204 0.955422C6.47533 0.378304 8.00846 0.227303 9.48756 0.521516C10.9667 0.815728 12.3253 1.54194 13.3917 2.60831L12.8866 3.11339L13.3917 2.60831L16.0433 5.25996C16.3362 5.55286 16.3362 6.02773 16.0433 6.32063C15.7504 6.61352 15.2756 6.61352 14.9827 6.32062L12.331 3.66897C11.4744 2.81238 10.3831 2.22903 9.19493 1.99269Z"
                        fill="#82B284"
                    />
                </svg>
            );

        case icons.BUILDING:
            return (
                <svg
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M17.5 15.6667H19.1666V17.3333H0.833313V15.6667H2.49998V1.49999C2.49998 1.27898 2.58778 1.06701 2.74406 0.910734C2.90034 0.754454 3.1123 0.666656 3.33331 0.666656H16.6666C16.8877 0.666656 17.0996 0.754454 17.2559 0.910734C17.4122 1.06701 17.5 1.27898 17.5 1.49999V15.6667ZM15.8333 15.6667V2.33332H4.16665V15.6667H15.8333ZM6.66665 8.16666H9.16665V9.83332H6.66665V8.16666ZM6.66665 4.83332H9.16665V6.49999H6.66665V4.83332ZM6.66665 11.5H9.16665V13.1667H6.66665V11.5ZM10.8333 11.5H13.3333V13.1667H10.8333V11.5ZM10.8333 8.16666H13.3333V9.83332H10.8333V8.16666ZM10.8333 4.83332H13.3333V6.49999H10.8333V4.83332Z"
                        fill="#82B284"
                    />
                </svg>
            );

        case icons.CHAT:
            return (
                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.6572 3.34504C13.1456 1.83415 11.1379 0.999985 8.9995 0.999985C6.86109 0.999985 4.8534 1.83416 3.34178 3.34504C0.425771 6.25962 0.214603 10.9162 2.8122 14.072C2.45356 14.8057 2.03124 15.2948 1.55194 15.5293C1.26035 15.6734 1.0961 15.9883 1.14304 16.3099C1.1933 16.6348 1.44133 16.8861 1.76646 16.9363C1.9441 16.9631 2.13514 16.9799 2.33289 16.9799C3.31495 16.9799 4.34729 16.6415 5.20868 16.0486C6.36838 16.6717 7.67219 17 8.99949 17C11.1379 17 13.1456 16.1692 14.6572 14.6583C16.1688 13.1474 17.0001 11.1373 17.0001 9.00335C17.0001 6.86935 16.1688 4.85594 14.6572 3.34505L14.6572 3.34504Z"
                        stroke="#F7F7F7"
                        strokeWidth="1.5"
                        strokeMiterlimit="22.9256"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M5.27386 8.99998H12.7267"
                        stroke="#F7F7F7"
                        strokeMiterlimit="22.9256"
                        strokeLinecap="round"
                    />
                    <path
                        d="M5.27386 6.81239H12.7267"
                        stroke="#F7F7F7"
                        strokeMiterlimit="22.9256"
                        strokeLinecap="round"
                    />
                    <path
                        d="M5.27386 11.1875H12.7267"
                        stroke="#F7F7F7"
                        strokeMiterlimit="22.9256"
                        strokeLinecap="round"
                    />
                </svg>
            );

        case icons.CLOSE_FILLED:
            return (
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect width="20" height="20" rx="10" fill="#D95151" />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.19995 6.07226L9.1277 10L5.19995 13.9278L6.0722 14.8L9.99995 10.8723L13.9277 14.8L14.8 13.9278L10.8722 10L14.8 6.07226L13.9277 5.20001L9.99995 9.12777L6.0722 5.20001L5.19995 6.07226Z"
                        fill="#F7F7F7"
                    />
                </svg>
            );

        case icons.EDIT:
            return (
                <svg
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.3425 0.590688C13.0259 -0.0927293 14.134 -0.0927299 14.8174 0.590688L16.5282 2.30147C17.2116 2.98489 17.2116 4.09293 16.5282 4.77635L5.19018 16.1143C5.04953 16.255 4.85876 16.334 4.65985 16.334L1.53485 16.334C1.12064 16.334 0.784851 15.9982 0.784851 15.584L0.784851 12.459C0.784851 12.2601 0.863869 12.0693 1.00452 11.9287L12.3425 0.590688ZM13.7567 1.65135C13.6591 1.55372 13.5008 1.55372 13.4032 1.65135L2.28485 12.7697L2.28485 14.834L4.34919 14.834L15.4675 3.71569C15.5651 3.61806 15.5651 3.45977 15.4675 3.36213L13.7567 1.65135Z"
                        fill="#82B284"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.79322 15.1555L1.96479 12.3271L3.02545 11.2664L5.85388 14.0949L4.79322 15.1555Z"
                        fill="#82B284"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.9856 5.96312L11.1572 3.1347L12.2178 2.07404L15.0463 4.90246L13.9856 5.96312Z"
                        fill="#82B284"
                    />
                </svg>
            );

        case icons.EXIT:
            return (
                <svg
                    width="17"
                    height="18"
                    viewBox="0 0 17 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10.9569 4.55176L15.4052 9.00008L10.9569 13.4483"
                        stroke="#F7F7F7"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M4.23401 9H14.7537"
                        stroke="#F7F7F7"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M9.80102 17.125H1.125V0.875H9.80102"
                        stroke="#F7F7F7"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            );

        case icons.HOME:
            return (
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M17.1771 7.53932L18.6977 8.99703C18.9817 9.2693 19.0755 9.68874 18.9368 10.0656C18.798 10.4425 18.4601 10.686 18.076 10.686H16.7859V18.4431C16.7859 18.7507 16.5489 19 16.2566 19H11.8301H8.69918L8.16983 19H3.7432C3.45084 19 3.21385 18.7506 3.21385 18.443V10.686H1.92401C1.53985 10.686 1.202 10.4425 1.06324 10.0656C0.924514 9.68874 1.01835 9.2693 1.30227 8.99707L9.37829 1.25486C9.73263 0.915058 10.2672 0.915021 10.6217 1.2549L13.5 4.5L13.4581 2.70566C13.4581 2.39808 13.6951 2.14874 13.9874 2.14874H16.6477C16.9401 2.14874 17.1771 2.39811 17.1771 2.70566V7.53932Z"
                        stroke="#F7F7F7"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                    />
                    <mask id="path-2-inside-1_0_1" fill="white">
                        <rect
                            x="7.5"
                            y="9.6925"
                            width="5"
                            height="6.34088"
                            rx="1"
                        />
                    </mask>
                    <rect
                        x="7.5"
                        y="9.6925"
                        width="5"
                        height="6.34088"
                        rx="1"
                        stroke="#F7F7F7"
                        strokeWidth="2.6"
                        mask="url(#path-2-inside-1_0_1)"
                    />
                </svg>
            );

        case icons.LINKED:
            return (
                <svg
                    width="18"
                    height="10"
                    viewBox="0 0 18 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M2.24996 5.00001C2.24996 3.57501 3.40829 2.41668 4.83329 2.41668H8.16663V0.833344L4.83329 0.833344C2.53329 0.833344 0.666626 2.70001 0.666626 5.00001C0.666626 7.30001 2.53329 9.16668 4.83329 9.16668L8.16663 9.16668L8.16663 7.58334H4.83329C3.40829 7.58334 2.24996 6.42501 2.24996 5.00001ZM5.66663 5.83334L12.3333 5.83334V4.16668L5.66663 4.16668V5.83334ZM13.1666 0.833344L9.83329 0.833344V2.41668H13.1666C14.5916 2.41668 15.75 3.57501 15.75 5.00001C15.75 6.42501 14.5916 7.58334 13.1666 7.58334H9.83329V9.16668H13.1666C15.4666 9.16668 17.3333 7.30001 17.3333 5.00001C17.3333 2.70001 15.4666 0.833344 13.1666 0.833344Z"
                        fill="#82B284"
                    />
                </svg>
            );

        case icons.MARKET:
            return (
                <svg
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M17.5 10.035V15.6667H18.3333V17.3333H1.66665V15.6667H2.49998V10.035C1.98696 9.69258 1.56641 9.22879 1.27566 8.68481C0.984919 8.14083 0.832973 7.53348 0.833314 6.91667C0.833314 6.22751 1.01998 5.56334 1.36081 4.99751L3.62081 1.08334C3.69395 0.956659 3.79915 0.851463 3.92583 0.778323C4.0525 0.705182 4.1962 0.666675 4.34248 0.666672H15.6583C15.8046 0.666675 15.9483 0.705182 16.075 0.778323C16.2016 0.851463 16.3068 0.956659 16.38 1.08334L18.6316 4.98501C19.1288 5.81073 19.2886 6.79628 19.0778 7.73679C18.8671 8.67729 18.302 9.5004 17.5 10.035ZM15.8333 10.6433C15.2603 10.7076 14.6803 10.6388 14.1382 10.4422C13.5962 10.2456 13.1069 9.92663 12.7083 9.51001C12.3585 9.8759 11.9381 10.1671 11.4727 10.366C11.0072 10.565 10.5062 10.6675 9.99998 10.6675C9.49389 10.6678 8.99298 10.5655 8.5275 10.3668C8.06202 10.1682 7.64162 9.87726 7.29165 9.51167C6.893 9.92814 6.40363 10.247 5.86161 10.4434C5.31959 10.6399 4.73955 10.7086 4.16665 10.6442V15.6667H15.8333V10.6442V10.6433ZM4.82415 2.33334L2.79665 5.84417C2.59963 6.33096 2.59371 6.87419 2.78009 7.36516C2.96646 7.85612 3.33138 8.25858 3.8018 8.492C4.27222 8.72542 4.81343 8.77257 5.31713 8.62402C5.82083 8.47547 6.24984 8.14217 6.51831 7.69084C6.79748 6.99334 7.78498 6.99334 8.06498 7.69084C8.2194 8.07785 8.48631 8.40967 8.83125 8.64342C9.17619 8.87718 9.5833 9.00213 9.99998 9.00213C10.4167 9.00213 10.8238 8.87718 11.1687 8.64342C11.5136 8.40967 11.7806 8.07785 11.935 7.69084C12.2141 6.99334 13.2016 6.99334 13.4816 7.69084C13.5898 7.95705 13.7518 8.198 13.9576 8.39857C14.1634 8.59913 14.4084 8.75497 14.6773 8.85627C14.9461 8.95758 15.2331 9.00217 15.52 8.98724C15.807 8.97231 16.0877 8.89819 16.3447 8.76953C16.6016 8.64086 16.8291 8.46045 17.0129 8.23962C17.1968 8.01878 17.3329 7.76231 17.4129 7.48632C17.4928 7.21033 17.5148 6.92078 17.4774 6.63588C17.4401 6.35099 17.3442 6.07689 17.1958 5.83084L15.175 2.33334H4.82498H4.82415Z"
                        fill="#F7F7F7"
                    />
                </svg>
            );

        case icons.PLUS:
            return (
                <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.899994 6.99999C0.899994 6.66862 1.16862 6.39999 1.49999 6.39999H12.5C12.8314 6.39999 13.1 6.66862 13.1 6.99999C13.1 7.33136 12.8314 7.59999 12.5 7.59999H1.49999C1.16862 7.59999 0.899994 7.33136 0.899994 6.99999Z"
                        fill="#58A742"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.99999 0.899994C7.33136 0.899994 7.59999 1.16862 7.59999 1.49999V12.5C7.59999 12.8314 7.33136 13.1 6.99999 13.1C6.66862 13.1 6.39999 12.8314 6.39999 12.5V1.49999C6.39999 1.16862 6.66862 0.899994 6.99999 0.899994Z"
                        fill="#58A742"
                    />
                </svg>
            );

        case icons.SEARCH:
            return (
                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="7.60803"
                        cy="7.60809"
                        r="6.5"
                        stroke="#F7F7F7"
                        strokeWidth="2"
                    />
                    <path
                        d="M3.6084 7.60809C3.6084 5.39895 5.39926 3.60809 7.6084 3.60809"
                        stroke="#F7F7F7"
                        strokeLinecap="round"
                    />
                    <path
                        d="M11.2474 13.4603L13.3687 11.339L16.923 14.878C17.511 15.4634 17.512 16.4149 16.9253 17.0016C16.3404 17.5865 15.3924 17.5875 14.8063 17.0039L11.2474 13.4603Z"
                        fill="#F7F7F7"
                    />
                </svg>
            );

        case icons.SETTINGS:
            return (
                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.3555 7.36145L14.6154 7.02242C14.5476 6.81901 14.4572 6.63822 14.3894 6.4574L15.3838 4.98836C15.655 4.60416 15.5872 4.06172 15.2708 3.7227L14.3216 2.77347C13.9826 2.43448 13.4628 2.38928 13.056 2.66048L11.5871 3.6549C11.4063 3.56453 11.2029 3.4967 11.0221 3.42891L10.6831 1.68864C10.5701 1.21403 10.1633 0.875 9.68875 0.875H8.33276C7.85819 0.875 7.45139 1.21403 7.36102 1.66602L7.02202 3.40629C6.81862 3.47411 6.63785 3.56449 6.45703 3.63232L4.98809 2.63785C4.60388 2.36665 4.06151 2.43445 3.74513 2.75089L2.79593 3.70011C2.45696 4.0391 2.41176 4.55892 2.68294 4.96574L3.67734 6.43481C3.58694 6.6156 3.51911 6.81901 3.45133 6.9998L1.71117 7.33882C1.21401 7.45186 0.875 7.85864 0.875 8.33329V9.68933C0.875 10.1639 1.21401 10.5708 1.66596 10.6612L3.40612 11.0002C3.47395 11.2036 3.56431 11.3844 3.6321 11.5652L2.63774 13.0343C2.36656 13.4185 2.43435 13.9609 2.75073 14.2999L3.69989 15.2491C4.0389 15.5881 4.55868 15.6333 4.96547 15.3621L6.43445 14.3677C6.61522 14.4581 6.81862 14.5259 6.9994 14.5937L7.3384 16.3339C7.42881 16.8086 7.8356 17.125 8.31018 17.125H9.68875C10.1633 17.125 10.5701 16.786 10.6605 16.334L10.9995 14.5937C11.2029 14.5259 11.3837 14.4581 11.5645 14.3677L13.0334 15.3621C13.4176 15.6333 13.96 15.5656 14.299 15.2491L15.2482 14.2999C15.5872 13.9609 15.6324 13.4411 15.3612 13.0568L14.3668 11.5878C14.4572 11.407 14.525 11.2036 14.5928 11.0228L16.3329 10.6838C16.8075 10.5934 17.1239 10.1866 17.1239 9.71196L17.1239 8.33329C17.1465 7.85865 16.8075 7.45187 16.3556 7.36145L16.3555 7.36145Z"
                        stroke="#F7F7F7"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.99951 6.64111C7.70404 6.64111 6.64062 7.70454 6.64062 8.99998C6.64062 10.2954 7.70404 11.3589 8.99951 11.3589C10.2949 11.3589 11.3584 10.2954 11.3584 8.99998C11.3584 7.70454 10.2949 6.64111 8.99951 6.64111Z"
                        stroke="#F7F7F7"
                        strokeWidth="1.5"
                    />
                </svg>
            );

        case icons.TRASH:
            return (
                <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.12469 2.62501L14.8747 2.625C15.2889 2.625 15.6247 2.96079 15.6247 3.375C15.6247 3.78921 15.2889 4.125 14.8747 4.125L1.12469 4.12501C0.710482 4.12501 0.374695 3.78922 0.374695 3.37501C0.374695 2.96079 0.710481 2.62501 1.12469 2.62501Z"
                        fill="#D95151"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.125 6.375C6.53921 6.375 6.875 6.71079 6.875 7.125V12.125C6.875 12.5392 6.53921 12.875 6.125 12.875C5.71079 12.875 5.375 12.5392 5.375 12.125V7.125C5.375 6.71079 5.71079 6.375 6.125 6.375Z"
                        fill="#D95151"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.875 6.375C10.2892 6.375 10.625 6.71079 10.625 7.125V12.125C10.625 12.5392 10.2892 12.875 9.875 12.875C9.46079 12.875 9.125 12.5392 9.125 12.125V7.125C9.125 6.71079 9.46079 6.375 9.875 6.375Z"
                        fill="#D95151"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.37469 2.625C2.78891 2.625 3.12469 2.96079 3.12469 3.375V15.125H12.8747V3.375C12.8747 2.96079 13.2105 2.625 13.6247 2.625C14.0389 2.625 14.3747 2.96079 14.3747 3.375V15.25C14.3747 15.6147 14.2298 15.9644 13.972 16.2223C13.7141 16.4801 13.3644 16.625 12.9997 16.625H2.99969C2.63502 16.625 2.28529 16.4801 2.02742 16.2223C1.76956 15.9644 1.62469 15.6147 1.62469 15.25V3.375C1.62469 2.96079 1.96048 2.625 2.37469 2.625Z"
                        fill="#D95151"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.71079 0.710786C5.08586 0.335714 5.59457 0.125 6.125 0.125H9.875C10.4054 0.125 10.9141 0.335714 11.2892 0.710786C11.6643 1.08586 11.875 1.59457 11.875 2.125V3.375C11.875 3.78921 11.5392 4.125 11.125 4.125C10.7108 4.125 10.375 3.78921 10.375 3.375V2.125C10.375 1.99239 10.3223 1.86521 10.2286 1.77145C10.1348 1.67768 10.0076 1.625 9.875 1.625H6.125C5.99239 1.625 5.86522 1.67768 5.77145 1.77145C5.67768 1.86521 5.625 1.99239 5.625 2.125V3.375C5.625 3.78921 5.28921 4.125 4.875 4.125C4.46079 4.125 4.125 3.78921 4.125 3.375V2.125C4.125 1.59457 4.33571 1.08586 4.71079 0.710786Z"
                        fill="#D95151"
                    />
                </svg>
            );

        case icons.ARROW_LEFT:
            return (
                <svg
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.25 7C0.25 6.58579 0.585786 6.25 1 6.25L15 6.25C15.4142 6.25 15.75 6.58579 15.75 7C15.75 7.41421 15.4142 7.75 15 7.75L1 7.75C0.585786 7.75 0.25 7.41421 0.25 7Z"
                        fill="#82B284"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.25 7C0.25 6.80109 0.329017 6.61032 0.46967 6.46967L6.46967 0.469668C6.76256 0.176775 7.23744 0.176775 7.53033 0.469668C7.82322 0.762561 7.82322 1.23744 7.53033 1.53033L2.06066 7L7.53033 12.4697C7.82322 12.7626 7.82322 13.2374 7.53033 13.5303C7.23744 13.8232 6.76256 13.8232 6.46967 13.5303L0.46967 7.53033C0.329017 7.38968 0.25 7.19891 0.25 7Z"
                        fill="#82B284"
                    />
                </svg>
            );

        default:
            return null;
    }
};

export default Svg;
