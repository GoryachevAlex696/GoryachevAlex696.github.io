'use strict';

let obj = {
    className: 'open menu'
}
function addClass(cls) {
    if (cls == '') return;
    if (cls.includes(' ')) {
        return this;
    }
    if (!this.className.includes(cls)) this.className += ' ' + cls;
    return this;
}

function removeClass(cls) {
    if (cls == '') return this;
    if (this.className.includes(cls)) {
        if (this.className.indexOf(cls) != 0) {
            let pos = this.className.indexOf(' ' + cls);
            this.className = this.className.substr(0, pos) + this.className.substr(pos + cls.length + 1);
        } else if (this.className.includes(cls + ' ')) {
            let pos = this.className.indexOf(cls + ' ');
            this.className = this.className.substr(0, pos) + this.className.substr(pos + cls.length + 1);
        } else {
            let pos = this.className.indexOf(cls);
            this.className = this.className.substr(0, pos) + this.className.substr(pos + cls.length + 1);
        }
    }
    return this;
}

console.log(obj);
obj.addClass = addClass;
obj.removeClass = removeClass;
let cls = prompt('Добавьте класс:');
console.log(obj.addClass(cls));
cls = prompt('Удалить класс:');
console.log(obj.removeClass(cls));