export class Name {
     constructor(name){
        this.value = name
    }

    valid (name) {
        if(!name) return false
        if(name.trim().length < 2 || name.trim().length > 256) return false
        return true
    }
}