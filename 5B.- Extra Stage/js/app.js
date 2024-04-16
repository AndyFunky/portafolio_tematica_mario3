window.onload = () =>  {
    let monoChange = document.getElementById("mono");
    const mono = {
        element : document.getElementById("mono"),
        topPosition : 0,
        leftPosition: 0,
        step: 10,

        move: function(direction){
            switch (direction) {
                case "ArrowUp" :
                    this.topPosition = this.topPosition - this.step;
                    this.element.style.top = this.topPosition + "px";
                break;

                case "ArrowDown" :
                    this.topPosition = this.topPosition + this.step;
                    this.element.style.top = this.topPosition + "px";
                break;

                case "ArrowRight" :
                    this.leftPosition = this.leftPosition + this.step;
                    this.element.style.left = this.leftPosition + "px";
                    monoChange.src = "./assets/personaje_cae_right.gif";
                break;

                case "ArrowLeft" :
                    this.leftPosition = this.leftPosition - this.step;
                    this.element.style.left = this.leftPosition + "px";
                    monoChange.src = "./assets/personaje_cae_left.gif";
                break;

                default : console.log("No es Derecha");
                break;
            }
        }
    };
    onkeydown = (key) => {
        mono.move(key.code);
    }
    setTimeout(function(){
        console.log("funciona el time out")
    },3000);


}