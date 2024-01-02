import * as bootstrap from 'bootstrap';

const Toast = function (text, type) {
    if (text) {
        var toast = (document.getElementById("wf-toast")).cloneNode(true);
        var body = toast.querySelector('.toast-body');
        type = type ? ('error' === type ? 'danger' : type) : 'danger';
        body.querySelector('span').innerHTML = text;
        toast.classList.add('bg-' + type);
        document.querySelector("#wf-toasts-place .toast-container").appendChild(toast);
        bootstrap.Toast.getOrCreateInstance(toast).show();
    }

};
export default Toast;