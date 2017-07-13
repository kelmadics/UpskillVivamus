/**
 * Created by Le Charles de Villz on 12/07/2017.
 */


var charles = 0;


function count() {

    self.postMessage("<div >test</div>")

    charles = charles + 1;
    setTimeout("count()",1000);

}

count();


