$(function() {
    // changing the state of the burger
    $(".eat-burger").on("click", function(event) {
        event.preventDefault();
        let id = $(this).data("id");
        let state = $(this).data("state");

        let eatenBurg = {
            devoured: state
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eatenBurg
        }).then(function() {
            console.log("the burger eaten was: " + state);
            location.reload();
        });
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        let newBurger = {
            burger_name: $(".burger-name").val().trim(),
            devoured: 0
        };
        console.log("The name of this is: " + newBurger.burger_name);
        $.ajax("/api/burgers/", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("New burger made!");
            location.reload();
        });
    });
});

