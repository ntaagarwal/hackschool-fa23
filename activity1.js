const sentences = ["blah", "blah blah", "i am doing hack school", "haunted house"];

function update_sentences(sentences, toadd, action){
    let modified_count = 0;
    if(toadd = ""){
        return 0;
    }

    if(action = "add"){
        sentences.push(toadd)
    }
    // else{ // remove case
    //     // find
    // }

    for(i of sentences){
        console.log(i)
    }

    return modified_count; 
}

update_sentences(sentences, "peek-a-boo", "add")