var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
card_object = "";
function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg", function(Img) {
        card_object=Img;
        card_object.scaleToWidth(700);
        card_object.scaleToHeight(510);
        card_object.set({
            top:0,
            left:0
        });
        canvas.add(card_object);
    });
}

function playSound(){
x.play();	
}
