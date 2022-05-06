AFRAME.registerComponent("car-model",{
    schema:{
        modelref:{type:"string",default:""}
    },
    init: function(){
        this.el.setAttribute("gltf-model",this.data.modelref)
        const position={
            x:0,y:50,z:80
        }
        const rotation={
            x:0,y:-100,z:0
        }
        this.el.setAttribute("position",position)
    }
})