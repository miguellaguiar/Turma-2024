$(document).ready(function() {

    function adicionarAoCarrinho(item, preco) {
        var cart = $("#cartItems");
        var lista = $("<li></li>").text(item + " - R$ " + preco.toFixed(2));
        cart.append(lista);

        var total = parseFloat($("#totalPrice").text().replace(',', '.'));
        total += preco;
        $("#totalPrice").text(total.toFixed(2).replace('.', ','));
    }

    $("#saveButton").click(function(event) {
        event.preventDefault();

        var nome = $("#name").val();
        var email = $("#email").val();

        if (nome !== "" && email !== "") {
            $(".add-to-cart").attr('disabled', false);

            $("#userInfo").html('');
            $("#userInfo").show(function() {
                var data = `${nome}<br>${email}`;
                const h4 = $("<h4></h4>").html(data);
                $("#userInfo").append(h4);
                $("#userInfo").show();
            });
        }
    });

    window.adicionarAoCarrinho = adicionarAoCarrinho;
});