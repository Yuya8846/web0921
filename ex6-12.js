function hyoji2(){
    //表示する文字varstr= "一文字ずつ表示します。"; 
    //テキストボックスの文字数
    varcnt= document.timer2.moji2.value.length; 
    //文字が全部表示されているか確認if ( cnt< 11 ) { 
        //現在より1文字多く切り出して表示
        document.timer2.moji2.value= str.substr(0,cnt+1); } else { 
            //全て表示されたら、空文字に戻す
            document.timer2.moji2.value= ""; } 
            //setTimeout()を含む関数を呼び出す
            setTimeout2("hyoji2()",1000); }