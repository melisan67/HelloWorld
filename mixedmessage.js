/* Random short story prompt creator 
Main Character - Dealing with - Villain - Reason they hate your main
*/
function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
}

const storyBoard = {
    heroList: ['A cowboy', 'An alien', 'A vampire', 'A king', 'A princess', 'A dragon', 'A knight', 'A rogue', 'A queen', 'A pirate', 'A wizard', 'A serial killer', 'A prince', 'A mermaid', 'A bard', 'A lady', 'A lord', 'An escaped prisoner', 'A sorceress', 'A robot', 'A werewolf', 'A psychic', 'A demigod', 'A god', 'A modern teen', 'A nomad', 'A time traveler', 'A warrior', 'An elf', 'A demon', 'A mad scientist', 'A ghost', 'An astronaut', 'A superhero'],
    villainList: ['A cowboy', 'An alien', 'A vampire', 'A king', 'A princess', 'A dragon', 'A knight', 'A rogue', 'A queen', 'A pirate', 'A wizard', 'A serial killer', 'A prince', 'A mermaid', 'A bard', 'A lady', 'A lord', 'An escaped prisoner', 'A sorceress', 'A robot', 'A werewolf', 'A psychic', 'A demigod', 'A god', 'A modern teen', 'A nomad', 'A time traveler', 'A warrior', 'An elf', 'A demon', 'A mad scientist', 'A ghost', 'An astronaut', 'A superhero'],
    plotList: ['Avoiding responsibility', 'Avenge parents', 'Mistaken Identity', 'Avenge lover', 'Psychotic/ Has hallucinations', 'Running away from past', 'Exploring the world', 'Wants to become famous', 'Abandonment issues', 'Memory loss', 'Searching for their purpose', 'On a quest to save the world', 'Searching for answers', 'Apocalyptic survival', 'Moving to new place', 'Haunted place', 'Theres been a murder!', 'Coming of age story'],
    hateList: ['Secretly in love with hero', 'Just a hateful person', 'Memory loss', 'Jealous of hero', 'Having a bad year', 'Blames hero for loss or failure', 'Childhood rivalry', 'Avenge parents', 'Avenge lover', 'Psychotic/ having hallucinations', 'Romantically slighted', 'Abandonment issues', 'Searching for purpose', 'Wants to take over the world', 'Wants to become infamous', 'Apocalyptic survival', 'Enjoys wreaking havoc']
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