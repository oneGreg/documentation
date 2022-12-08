//for use in not webworker as replacement for warnm error info
function log(msg: string) {
    console.log(msg);
}
function info(msg: string) {
    console.log("INFO:  = " + msg);
}
function warn(msg: string) {
    console.log("WARN:  = " + msg);
}
function error(msg: string) {
    console.log("ERROR:  = " + msg);
}

var eName: keyof HTMLElementEventMap;

eName = "change";
eName = "click";

function manipulateSelectElement(id: string, fun: Function) {
    var el = document.getElementById(id);
    fun(el);

    if (el instanceof HTMLSelectElement) {
        fun(el);
    }
}

function doit(e: HTMLSelectElement) {
    console.log(e.value);
}

manipulateSelectElement("mydemo", doit);
manipulateSelectElement("mydemo", (e: HTMLSelectElement) => { console.log(e.value); });

type keyLabel = { key: string, label: string }
type keyValueList = [{ key: string, value: string }]
type keyLabelList = [keyLabel]

function fillDropdown(id: string, keyValueList: keyValueList) {
    var select = document.getElementById(id);
    if (!select) {
        warn("element not found id = " + id);
    }
    if (select instanceof HTMLSelectElement) {

        /*
        keyValueList.forEach(function (entry:keyLabel) {
            var opt = document.createElement('option');
            opt.value = entry.key;
            opt.innerHTML = entry.label;
            select.appendChild(opt);
        });
        */
    }
}

const f: Function = ((a: string) => { });

type EventListenerFunction = (event: Event) => void;

function addEventListener(id: string,
    type: keyof HTMLElementEventMap,
    func: EventListenerFunction) {
    var el = document.getElementById(id);

    if (el) {
        el.addEventListener(type, func);
    } else {
        warn("missing element id = " + id);
    }
}

function onDragStart(param1: string, param2: string, param3: string) {
    //some action...
}

function addEL(id: string) {
    var element: HTMLElement | null = document.getElementById(id);
    if (element) {
        element.addEventListener('dragstart', (evt) => onDragStart("some", "param", evt.type));
    }
}
addEL("wurst");

/*  */
function handleClick(event: Event) {
    console.log('button clicked');
    console.log(event);
    console.log(event);
}

/* =========== */
const button = document.getElementById('btn');
button?.addEventListener('click', handleClick);
button?.addEventListener('change', (evt) => onDragStart("some", "param", evt.type));
button?.addEventListener('change', (evt) => {
});

/* =========== */

function addEventListener(element: HTMLElement | null, f: EventListener) {
    element?.addEventListener('click', f);
}

const button2: HTMLElement | null = document.getElementById('btn');
addEventListener(button2, handleClick);
addEventListener(document.getElementById('btn'), handleClick);
addEventListener(document.getElementById('btn'), ()=>{});
