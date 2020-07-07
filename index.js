function main() {
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();

        const thing = $(this).find('input').val();

        if(thing) {
            $('.shopping-list').append(`<li>
                <span class="shopping-item">${thing}</span>
                <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                </button>
                </div></li>`);
        }
    });

    //check
    $('ul').on('click','.shopping-item-toggle', function(event) {
        $(this).closest('.shopping-item-controls').siblings().toggleClass('shopping-item__checked');
    });


    //delete
    $('ul').on('click','.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
    });
}

$(main);