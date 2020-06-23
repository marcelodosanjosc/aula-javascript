function fn(){
    log(" hoisting de funçao");
    function log(){
        console.log(value);
        
    }
    
}
fn();