interface IUrl {
    [key: string]: string,
}

interface IDelay {
    [key: string]: number,
}

export const Url: IUrl  = {
    base: 'https://dzen.ru',
    main: '/',
    video: '/video',
} as const;


export const Delay: IDelay = {
    keyPress: 500,
} as const;
