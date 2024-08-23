function a() {
    var b = 10; 
    c();
    function c() {
        console.log(b);
        
    }

    var b = 100;
}

a();