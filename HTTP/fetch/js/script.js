const url = "https://jsonplaceholder.typicode.com/posts";
//参考記事JsonPlaceholder
//https://jsonplaceholder.typicode.com/
//fetch関数が実行されたタイミングで、サーバーにリクエストが送信される。
//検証のNetworkタブから確認
fetch(url,{
    method:'POST',
    //requestの送信方法(method)を指定
    headers: {
        //リクエストにヘッダーを指定

        //headerのキーは、大文字と小文字の区別は、つけない
        Accept:"text/plain",
        'content-type':'text/plain',
    },
    body:'hello',
    //bodyを何かしら設定する場合は、requestのmethodは、
    //GETかHEAD以外送ることができない。
    //reqかres関係なく、bodyに設定した際には、そのデータがどうゆう種類の
    //データなのかを明治的に送り先が正しく理解できるようContentTypeという
    //headerをつけるべきあるということになっている。
});