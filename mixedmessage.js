/* Random short story prompt creator 
Main Character - Dealing with - Villain - Reason they hate your main
*/
function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
}

const storyBoard = {
    heroList: ['A cowboy', 'An alien', 'A vampire'],
    villainList: ['An escaped prisoner', 'A pirate', 'A modern teen'],
    plotList: ['Avoiding responsibility', 'Avenge parents', 'Mistaken Identity'],
    hateList: ['Secretly in love with hero', 'Just a hateful person', 'memory loss']
}
let randomStory = []

for (let item in storyBoard) {
    let option = generateRandomNumber(storyBoard[item].length)

    switch(item){
        case 'heroList':
            randomStory.push(`Your hero is: ${storyBoard[item][option]}.`)
            break;
        case 'villainList':
            randomStory.push(`Your villain is: ${storyBoard[item][option]}.`)
            break;
        case 'plotList':
            randomStory.push(`Your plot line is: ${storyBoard[item][option]}.`)
            break;
        case 'hateList':
            randomStory.push(`The reason your villain hates your hero is: ${storyBoard[item][option]}.`)
            break;
        default: 
            randomStory.push('Write your life story')
    }
}
function formatStory(story) {
    const formatted = randomStory.join('\n')
    console.log(formatted)
}
formatStory(randomStory);