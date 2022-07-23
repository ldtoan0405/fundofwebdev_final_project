const jstut = document.querySelector('.js_modal');
const js_modal = document.querySelector('.js');
const jsclose_btn = document.querySelector('.jstut-close')

jsclose_btn.onclick = function(){
    jstut.classList.remove('modal');
};


js_modal.onclick = function(){
    jstut.classList.add('modal')
};

const javatut = document.querySelector('.java_modal');
const java_modal = document.querySelector('.java');
const javaclose_btn = document.querySelector('.javatut-close')

javaclose_btn.onclick = function(){
    javatut.classList.remove('modal');
};


java_modal.onclick = function(){
    javatut.classList.add('modal')
};

const pythontut = document.querySelector('.python_modal');
const python_modal = document.querySelector('.python');
const pythonclose_btn = document.querySelector('.pythontut-close')

pythonclose_btn.onclick = function(){
    pythontut.classList.remove('modal');
};


python_modal.onclick = function(){
    pythontut.classList.add('modal')
};

const csharptut = document.querySelector('.csharp_modal');
const csharp_modal = document.querySelector('.csharp');
const csharpclose_btn = document.querySelector('.csharptut-close')

csharpclose_btn.onclick = function(){
    csharptut.classList.remove('modal');
};


csharp_modal.onclick = function(){
    csharptut.classList.add('modal')
};

const cplustut = document.querySelector('.cplus_modal');
const cplus_modal = document.querySelector('.cplus');
const cplusclose_btn = document.querySelector('.cplustut-close')

cplusclose_btn.onclick = function(){
    cplustut.classList.remove('modal');
};


cplus_modal.onclick = function(){
    cplustut.classList.add('modal')
};

const ctut = document.querySelector('.c_modal');
const c_modal = document.querySelector('.c');
const cclose_btn = document.querySelector('.ctut-close')

cclose_btn.onclick = function(){
    ctut.classList.remove('modal');
};


c_modal.onclick = function(){
    ctut.classList.add('modal')
};

cplus_modal.onclick = function(){
    cplustut.classList.add('modal')
};

const phptut = document.querySelector('.php_modal');
const php_modal = document.querySelector('.php');
const phpclose_btn = document.querySelector('.phptut-close')

phpclose_btn.onclick = function(){
    phptut.classList.remove('modal');
};


php_modal.onclick = function(){
    phptut.classList.add('modal')
};

const htmlcsstut = document.querySelector('.htmlcss_modal');
const htmlcss_modal = document.querySelector('.htmlcss');
const htmlcssclose_btn = document.querySelector('.htmlcsstut-close')

htmlcssclose_btn.onclick = function(){
    htmlcsstut.classList.remove('modal');
};


htmlcss_modal.onclick = function(){
    htmlcsstut.classList.add('modal')
};

const sqltut = document.querySelector('.sql_modal');
const sql_modal = document.querySelector('.sql');
const sqlclose_btn = document.querySelector('.sqltut-close')

sqlclose_btn.onclick = function(){
    sqltut.classList.remove('modal');
};


sql_modal.onclick = function(){
    sqltut.classList.add('modal')
};

const rubytut = document.querySelector('.ruby_modal');
const ruby_modal = document.querySelector('.ruby');
const rubyclose_btn = document.querySelector('.rubytut-close')

rubyclose_btn.onclick = function(){
    rubytut.classList.remove('modal');
};


ruby_modal.onclick = function(){
    rubytut.classList.add('modal')
};

const items = document.querySelectorAll('.item > div');
items.forEach(item => item.addEventListener('click',() => {
    item.classList.toggle('active');

    const info = item.nextElementSibling;

    if(info.style.maxHeight) {
        info.style.maxHeight = null;
    } else {
        info.style.maxHeight = `${info.scrollHeight}px`;
    }
}));