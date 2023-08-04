$(document).ready(function () {
    function add() {
        $(".copied").addClass("bounce-effect");
    }

    function remove() {
        $(".copied").removeClass("bounce-effect");
    }
    remove();

    $(".copy-btn").click(function () {
        $("#textField").select();
        document.execCommand("copy");
        add();
        setTimeout(remove, 800);
    })
})