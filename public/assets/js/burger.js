$(function() {
    $('.change-state').on('click', function(e) {
        var newState;
        var id = $(this).attr('data-id');
        console.log(id);
        var currentState = $(this).attr('data-newDevoured');
        console.log(currentState);

        currentState == 0 ? (newState = 1) : newState;
        console.log(newState);

        var newStatus = {
            devoured: newState
        };

        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: newStatus
        }).then(() => {
            console.log(`changed state to ${newState}`);
            location.reload();
        });
    });

    $('.create-form').on('submit', e => {
        e.preventDefault();

        let newBurger = {
            burger_name: $('#burger')
                .val()
                .trim(),
            devoured: $('[name=state]:checked')
                .val()
                .trim()
        };
        console.log(newBurger);

        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(() => {
            console.log(`created new burger`);
            location.reload();
        });
    });

    $('#delete-burger').on('click', function(e) {
        e.preventDefault();
        //alert($(this).data('id'));
        console.log(this);
        let id = $(this).attr('data-id');
        console.log(id);
        $.ajax('/api/burgers/' + id, {
            type: 'DELETE'
        }).then(() => {
            console.log(`deleted burger with id: ${id}`);
            location.reload();
        });
    });
});
