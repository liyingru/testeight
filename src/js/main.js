require.config({
    baseUrl: './js/',
    paths: {
        'jquery': './libs/jquery.min',
        'bscroll': './libs/better-scroll',
        'flexible': './libs/flexible',
        'index': './page/index'
    }
});

require(['index']);