import { 
    renderFriend,
    renderMushroom
} from '../render-utils.js';

const test = QUnit.test;

test("This function should return a div of class='friend', a p of class='name' with the value of friend.name, and a p of class='emoji with an emoji face correspondent to the satisfaction levels of 1, 2, and 3.", (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const friend = {
        name: 'Fred',
        satisfaction: 2
    };
    const expected = '<div class="friend"><p class="name">Fred</p><p class="emoji">😑</p></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderFriend(friend).outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test("This function should return a div element of class='mushroom'", (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const expected = '<div class="mushroom"></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderMushroom().outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});