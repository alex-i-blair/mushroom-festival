export function renderMushroom() {
    const div = document.createElement('div');
    div.classList.add('mushroom');

    return div;
}

export function renderFriend(friend) {
    // make three elements: an outer div, a place for the name, and a place for an emoji
    // add friend, name, and emoji classes to the appropriate elements
    const friend_div = document.createElement('div');
    const emoji_p = document.createElement('p');
    const name_p = document.createElement('p');
    friend_div.classList.add('friend');
    emoji_p.classList.add('emoji');
    name_p.classList.add('name');

    // put the friend's name in the nameEl
    name_p.textContent = friend.name;
    if (friend.satisfaction === 1) {
        emoji_p.textContent = '😞';
    }
    if (friend.satisfaction === 2) {
        emoji_p.textContent = '😑';
    }
    if (friend.satisfaction === 3) {
        emoji_p.textContent = '🤪';
    }
    
    
    // for each friend, set the emojiEl's text content to a different emoji depending on their satisfaction level

    // append the emojiEl and nameEl to the outer div
    friend_div.append(name_p, emoji_p);
    return friend_div;
    // return the outer div
}