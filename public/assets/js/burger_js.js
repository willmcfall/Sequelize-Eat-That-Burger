/* eslint-disable indent */
/* eslint-disable no-console */
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    // This section updates a burger
    $('.change-burger').on('click', function () {
        const id = $(this).data('id');
        const newBurger = $(this).data('newburger');
        const newBurgerState = {
            devoured: newBurger,
        };

        $.ajax(`/api/burgers/${id}`, {
            type: 'PUT',
            data: newBurgerState,
        }).then(function () {
            console.log('changed devoured to', newBurger);
            location.reload();
        });
    });

    // This section adds a burger
    $('#submit').on('click', function (event) {
        console.log('click successful');
        event.preventDefault();

        const newBurger = {
            burger_name: $('#create-burger')
                .val()
                .trim(),
            devoured: 0,
        };

        console.log(newBurger);

        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger,
        }).then(() => {
            console.log('created new burger');
            location.reload();
        });
    });

    // This section deletes a burger
    $('.delete-burger').on('click', function () {
        const id = $(this).data('id');
        console.log(id);
        $.ajax(`/api/burgers/${id}`, {
            type: 'DELETE',
        }).then(() => {
            console.log('deleted burger', id);
            location.reload();
        });
    });
});
